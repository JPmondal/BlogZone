import AllArticlePage from "@/components/articles/all-article-page";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { fetchArticleByQuery } from "@/lib/query/fetch-article-by-query";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ search?: string; page?: string }>,
  
};

const itemsPerPage = 3

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";

  const currentPage = Number((await searchParams).page) || 1;

  
  const skip = (currentPage-1)*itemsPerPage
  const take = itemsPerPage

  const {articles, total} = await fetchArticleByQuery(searchText,skip,take)

  const totalPage = Math.ceil(total/itemsPerPage)


  return (
    <div className="h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
        {/* Page Header  */}

        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">All articles</h1>

          {/* Search Bar  */}

          <ArticleSearchInput />
        </div>

        {/* All articles card  */}
        <Suspense fallback={<AllArticlesPageSkeleton/>}>
          <AllArticlePage articles={articles} />
        </Suspense>

        {/* Pagination  */}

        <div className="mt-12 flex justify-center gap-2">
          <Link href={`/articles?search=${searchText}&page=${currentPage-1}`} passHref>
          <Button disabled={currentPage === 1} variant={"ghost"} size={"sm"}>
            ← Prev
          </Button></Link>
         {
          Array.from({ length: totalPage }, (_, index) => (
            <Link
              key={index}
              href={`/articles?search=${searchText}&page=${index + 1}`}
              passHref
            >
              <Button variant={`${currentPage === index + 1 ? "destructive" : "ghost"}`} size={"sm"}>
                {index + 1}
              </Button>
            </Link>
          ))
         }
         
          <Link  href={`/articles?search=${searchText}&page=${currentPage+1}`} passHref>
          <Button disabled={currentPage === totalPage} variant={"ghost"} size={"sm"}>
            Next →
          </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;

export function AllArticlesPageSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            {/* Article Image Skeleton */}
            <Skeleton className="mb-4 h-48 w-full rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20" />

            {/* Article Title Skeleton */}
            <Skeleton className="h-6 w-3/4 rounded-lg" />

            {/* Article Category Skeleton */}
            <Skeleton className="mt-2 h-4 w-1/2 rounded-lg" />

            {/* Author & Metadata Skeleton */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Author Avatar Skeleton */}
                <Skeleton className="h-8 w-8 rounded-full" />

                {/* Author Name Skeleton */}
                <Skeleton className="h-4 w-20 rounded-lg " />
              </div>

              {/* Date Skeleton */}
              <Skeleton className="h-4 w-24 rounded-lg " />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
