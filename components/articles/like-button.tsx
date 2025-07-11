import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";

const LikeButton = () => {
  return (
    <div className="flex gap-4 mb-12 pt-8 border-t">
      <form action="">
        <Button type="button" className="gap-2" variant={"ghost"}>
          <ThumbsUp className="h-5 w-5" />
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
