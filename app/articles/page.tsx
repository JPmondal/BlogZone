import AllArticlePage from "@/components/articles/all-article-page";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { fetchArticleByQuery } from "@/lib/query/fetch-article-by-query";
import Link from "next/link";
import { AllArticlesPageSkeleton } from "@/components/articles/skeleton";

type SearchPageProps = {
  searchParams: Promise<{ search?: string; page?: string }>;
};

const itemsPerPage = 3;

const Page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";

  const currentPage = Number((await searchParams).page) || 1;

  const skip = (currentPage - 1) * itemsPerPage;
  const take = itemsPerPage;

  const { articles, total } = await fetchArticleByQuery(searchText, skip, take);

  const totalPage = Math.ceil(total / itemsPerPage);

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
        <Suspense fallback={<AllArticlesPageSkeleton />}>
          <AllArticlePage articles={articles} />
        </Suspense>

        {/* Pagination  */}

        <div className="mt-12 flex justify-center gap-2">
          <Link
            href={`/articles?search=${searchText}&page=${currentPage - 1}`}
            passHref
          >
            <Button disabled={currentPage === 1} variant={"ghost"} size={"sm"}>
              ← Prev
            </Button>
          </Link>
          {Array.from({ length: totalPage }, (_, index) => (
            <Link
              key={index}
              href={`/articles?search=${searchText}&page=${index + 1}`}
              passHref
            >
              <Button
                variant={`${
                  currentPage === index + 1 ? "destructive" : "ghost"
                }`}
                size={"sm"}
              >
                {index + 1}
              </Button>
            </Link>
          ))}

          <Link
            href={`/articles?search=${searchText}&page=${currentPage + 1}`}
            passHref
          >
            <Button
              disabled={currentPage === totalPage}
              variant={"ghost"}
              size={"sm"}
            >
              Next →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Page;
