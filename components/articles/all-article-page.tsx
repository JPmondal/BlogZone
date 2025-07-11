import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { fetchArticleByQuery } from "@/lib/query/fetch-article-by-query";
import { Search } from "lucide-react";
import { Prisma } from "@/app/generated/prisma";

type AllArticleProps = {
  articles: Prisma.ArticleGetPayload<{
    include : {
      author : {
        select : {
          name : true,
          email : true,
          imageUrl : true
        }
      }
    }
  }>[];
};

const AllArticlePage: React.FC<AllArticleProps> = async ({ articles }) => {
 

  if (articles.length <= 0) {
    return <NoSearchResult />;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )}
        >
          <div className="p-6">
            <Link href={`/articles/${article.id}`} className="flex flex-col h-full">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                <img
                  alt="blog-img"
                  src={article.featuredImage}
                  className="object-cover w-full"
                />
              </div>

              <div className="flex items-center text-sm text-gray-500 gap-3 dark:text-gray-400">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={article.author.imageUrl || ""}
                  ></AvatarImage>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {article.title}
              </h3>

              <p className="mt-2 text-sm  text-gray-600 dark:text-gray-300">
                {article.category}
              </p>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{article.createdAt.toDateString()}</span>
                <span>{12} min </span>
              </div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllArticlePage;

const NoSearchResult = () => {
  return (
    <div className="flex flex-col justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-8 w-8" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">No result found</h1>
        <p className="text-sm mt-3">
          We could not find any article according to your search
        </p>
      </div>
    </div>
  );
};
