import { Prisma } from "@/app/generated/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import React from "react";

type CommentListProps = {
  comments: Prisma.CommentGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={comment.author.imageUrl || ""}></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-2">
              <span className="font-medium">{comment.author.name}</span>
              <span className="text-sm ml-2">{comment.createdAt.toLocaleDateString()}</span>
            </div>
            <p>{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
