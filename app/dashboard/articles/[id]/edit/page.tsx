import EditArticlePage from "@/components/articles/edit-article-page";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditArticlePage = {
  params: Promise<{ id: string }>;
};

const page: React.FC<EditArticlePage> = async ({ params }) => {
  const id = (await params).id;
  const article = await prisma.article.findUnique({
    where: {
      id,
    },
    include: {
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
    return <h1>Article not found.</h1>;
  }
  return (
    <div>
      <EditArticlePage article={article} /> 
    </div>
  );
};

export default page;