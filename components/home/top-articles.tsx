import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopArticles = () => {
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
          <Link href={`/articles/${1235}}`}>
            <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
              <Image
                alt="blog-img"
                src={
                  "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 gap-3 dark:text-gray-400">
              <Avatar className="h-8 w-8">
                <AvatarImage src={""}></AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Patel Donkey</span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              How to become a web developer in 2025
            </h3>
            
            <p className="mt-2  text-gray-600 dark:text-gray-300">
              Web development
            </p>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>12 feb</span>
              <span>{12} min </span>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
