"use client"

import React, { useActionState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createComment } from "@/actions/create-comment";

type CommentInputProps = {
    articleId : string
}

const CommentInput : React.FC<CommentInputProps> = ({articleId}) => {

    const [formState, action, isPending] = useActionState(createComment.bind(null,articleId),{errors:{}})

  return (
    <form className="mb-8" action={action}>
      <div className="gap-4 flex">
        <Avatar>
          <AvatarImage src={""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1 ">
          <Input type="text" name="body" placeholder="Add your comment..." />
          {
            formState.errors.body && (
                <span className="text-red-400 text-sm">{formState.errors.body}</span>
            )
          }
          <div className="mt-4 flex justify-end">
            <Button type="submit" disabled={isPending}>{isPending ? "Posting.." : "Post Comment"}</Button>
            <div>
                {
            formState.errors.formErrors && (
                <span className="text-red-400 text-sm">{formState.errors.formErrors[0]}</span>
            )
          }
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
