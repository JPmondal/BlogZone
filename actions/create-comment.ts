"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createCommentSchema = z.object({
  body: z.string().min(1),
});

type CreateCommentsFormState = {
  errors: {
    body?: string[];
    formErrors?: string[];
  };
};

export const createComment = async (
  articleId: string,
  prevState: CreateCommentsFormState,
  formData: FormData
): Promise<CreateCommentsFormState> => {
  const result = createCommentSchema.safeParse({
    body: formData.get("body"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { userId } = await auth();

  if (!userId) {
    return {
      errors: {
        formErrors: ["You have to login first"],
      },
    };
  }

  const existingUserId = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!existingUserId) {
    return {
      errors: {
        formErrors: ["User not found , please register before comment"],
      },
    };
  }

  try {
    await prisma.comment.create({
      data: {
        body: result.data.body,
        authorId: existingUserId.id,
        articleId: articleId,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formErrors: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formErrors: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath(`/articles/${articleId}`);
  return { errors: {} };
};
