import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";



const AllArticlePage = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border-gray-200/50 dark:border-white/10",
          "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
        )}
      >
        <div className="p-6">
          <Link href={`/articles/${3434}`} className="flex flex-col h-full">
            <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
              <img
                alt="blog-img"
                src={
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                className="object-cover w-full"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 gap-3 dark:text-gray-400">
              <Avatar className="h-8 w-8">
                <AvatarImage src={"globe.svg"}></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Hello</span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              Nice title
            </h3>

            <p className="mt-2  text-gray-600 dark:text-gray-300">Web master</p>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>12 Feb</span>
              <span>{12} min </span>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AllArticlePage;
