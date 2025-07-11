import ArticleDetailPage from "@/components/articles/article-detail-page";
import { prisma } from "@/lib/prisma";
import React from "react";

type ArticleDetailedPageProps = {
  params: Promise<{ id: string }>;
};

const page: React.FC<ArticleDetailedPageProps> = async ({ params }) => {
  const id = (await params).id;

  const article = await prisma.article.findUnique({
    where: {
      id,
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
  });

  if (!article) {
    return <h1>Article not found</h1>;
  }
  return (<div>
    <ArticleDetailPage article={article}/>
  </div>);
};

export default page;
