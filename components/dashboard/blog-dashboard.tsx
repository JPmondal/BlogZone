import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FileText, MessageCircle, PlusIcon, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import RecentArticles from "./recent-articles";
import { prisma } from "@/lib/prisma";

const BlogDashboard = async () => {
  const [articles, totalComments] = await Promise.all([
    prisma.article.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: true,
        author: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
    }),
    prisma.comment.count(),
  ]);

  return (
    <div className="p-4 flex-1">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className=" text-2xl md:text-3xl font-bold">Blog Dashboard</h1>
          <p className="text-xs md:text-primary">
            Manage your content and analytics
          </p>
        </div>
        <div>
          <Link href={"/dashboard/articles/create"}>
            <Button className="cursor-pointer hover:bg-amber-300 hover:text-blue-900 hidden md:flex">
              <PlusIcon />
              Create Article
            </Button>
            <Button className="cursor-pointer hover:bg-amber-300 hover:text-blue-900 flex md:hidden">
              <PlusIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        <Card className="hover:scale-[1.02] cursor-pointer transition-all hover:border-blue-400">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="font-bold">Total Articles</CardTitle>
            <FileText />
          </CardHeader>
          <CardContent>
            <h1 className="font-bold text-lg">{articles.length}</h1>
            <p className="text-sm">+5 from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:scale-[1.02] cursor-pointer transition-all hover:border-blue-400">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="font-bold">Total Comments</CardTitle>
            <MessageCircle />
          </CardHeader>
          <CardContent>
            <h1 className="font-bold text-lg">{totalComments}</h1>
            <p className="text-sm">+12 waiting moderatino</p>
          </CardContent>
        </Card>
        <Card className="hover:scale-[1.02] cursor-pointer transition-all hover:border-blue-400">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="font-bold">App Rating Time</CardTitle>
            <Star />
          </CardHeader>
          <CardContent>
            <h1 className="font-bold text-lg">4.6</h1>
            <p className="text-sm">+0.6 from last month</p>
          </CardContent>
        </Card>
      </div>
      <RecentArticles articles={articles} />
    </div>
  );
};

export default BlogDashboard;
