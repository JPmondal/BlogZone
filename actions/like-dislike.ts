"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const likeDisLikeToggle = async (articleId: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must logged in to do like");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const existingLike = await prisma.like.findFirst({
    where: {
      userId: user.id,
      articleId: articleId,
    },
  });

  if (existingLike) {
    await prisma.like.delete({
      where: {
        id: existingLike.id,
      },
    });
  } else {
    await prisma.like.create({
      data: {
        articleId: articleId,
        userId: user.id,
      },
    });
  }

  revalidatePath(`/articles/${articleId}`);
};
