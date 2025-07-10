"use client";

import React, { startTransition, useTransition } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRightIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Prisma } from "@/app/generated/prisma";
import { useFormState, useFormStatus } from "react-dom";
import { deleteArticle } from "@/actions/delete-article";

type RecentArticlesProps = {
  articles: Prisma.ArticleGetPayload<{
    include: {
      comments: true;
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>;
};

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Recent Articles</CardTitle>
          <ArrowRightIcon className="cursor-pointer" size={20} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>
                    <Badge
                      className="bg-green-700 text-white"
                      variant="secondary"
                    >
                      Published
                    </Badge>
                  </TableCell>
                  <TableCell>{article.comments.length}</TableCell>
                  <TableCell>
                    {article.createdAt.toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 items-center">
                      <Link href={`/dashboard/articles/${article.id}/edit`}>
                        <Button
                          className="cursor-pointer"
                          size={"sm"}
                          variant="outline"
                        >
                          Edit
                        </Button>
                      </Link>
                      <DeleteButton articleId={article.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentArticles;

type DeleteButtonProps = {
  articleId: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ articleId }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() => {
        startTransition(async () => {
          await deleteArticle(articleId);
        });
      }}
    >
      <Button
        disabled={isPending}
        size={"sm"}
        type="submit"
        className="cursor-pointer"
        variant={"outline"}
      >
        {isPending ? "Deleting..." : "Delete"}
      </Button>
    </form>
  );
};
