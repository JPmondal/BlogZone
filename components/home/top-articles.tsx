import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { prisma } from "@/lib/prisma";

const TopArticles = async () => {

  const articles = await prisma.article.findMany({
    orderBy : {
      createdAt: "desc",
    },
    include : {
      comments : true,
      author : {
        select : {
          name: true,
          email: true,
          imageUrl: true,
        }
      }
    }
  })

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {
        articles.slice(0,3).map((article)=>(
          <Card key={article.id}
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
                src={
                  article.featuredImage ||
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                
                className="object-cover w-full"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 gap-3 dark:text-gray-400">
              <Avatar className="h-8 w-8">
                <AvatarImage src={article.author.imageUrl || ""}></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{article.author.name}</span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {article.title }
            </h3>
            
            <p className="mt-2  text-gray-600 dark:text-gray-300">
              {article.category}
            </p>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{article.createdAt.toLocaleDateString()}</span>
              <span>{12} min </span>
            </div>
          </Link>
        </div>
      </Card>
        ))
      }
    </div>
  );
};

export default TopArticles;
