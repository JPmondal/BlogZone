"use client"

import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";
import { likeDisLikeToggle } from "@/actions/like-dislike";
import { Like } from "@/app/generated/prisma";

type LikeButtonProps = {
  articleId : string
  likes: Like[],
  isLiked : boolean
}

const LikeButton : React.FC<LikeButtonProps> = ({articleId, likes, isLiked}) => {

  const [optimisticLike,setOptimisticLike]= useOptimistic(likes.length)

  const [isPending,startTransition]= useTransition()

  const handleLikeDisLike = async ()=>{
    startTransition(async ()=>{
      setOptimisticLike(isLiked ? optimisticLike-1 : optimisticLike+1)
      await likeDisLikeToggle(articleId)
    })
  }
  return (
    <div className="flex gap-4 mb-12 pt-8 border-t">
      <form action={handleLikeDisLike}>
        <Button disabled={isPending} type="submit" className="gap-2" variant={"ghost"}>
          <ThumbsUp className="h-5 w-5" />
          {optimisticLike}
        </Button>
      </form>
      <Button className="gap-2" variant={"ghost"}>
        <Bookmark className="h-5 w-5" />
      </Button>
      <Button className="gap-2" variant={"ghost"}>
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default LikeButton;
