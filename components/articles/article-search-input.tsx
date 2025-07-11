import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const ArticleSearchInput = () => {
  return (
    <form className="mx-auto max-w-2xl">
      <div className="relative">
        <Search className="absolute h-5 w-5 left-3 top-1/2 -translate-y-1/2" />
        <Input
          type="text"
          name="search"
          placeholder="Search Articles ..."
          className="w-full pl-10 pr-4 py-6 text-lg"
        />
      </div>
    </form>
  );
};

export default ArticleSearchInput;
