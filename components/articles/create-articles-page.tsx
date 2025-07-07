"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "../ui/button";

const ReactQuil = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const CreateArticlePage = () => {
  const [content, setContent] = useState("");
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="font-bold">Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-4">
            <div>
              <label className="font-medium" htmlFor="title">
                Title
              </label>
              <Input
                type="text"
                name="title"
                placeholder="Enter an article title"
              />
            </div>
            <div>
              <Label className="font-medium" htmlFor="category">
                Category
              </Label>
              <select
                className="w-full border p-2 rounded-md mt-2"
                name="category"
                id="category"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="programming">Programming</option>
                <option value="web-development">Web development</option>
              </select>
            </div>
            <div>
              <Label className="font-medium" htmlFor="featuredImage">
                Featured Image
              </Label>
              <input
                name="featuredImage"
                id="featuredImage"
                type="file"
                accept="image/*"
                className="w-full border mt-2 p-2 rounded-md"
              />
            </div>
            <div>
              <Label className="font-medium ">Content</Label>
              <ReactQuil
                className="mt-2"
                value={content}
                onChange={setContent}
              />
            </div>
            <div className="flex justify-end gap-2 items-center">
                <Button className="cursor-pointer" variant={'outline'}>Cancel</Button>
                <Button type="submit" className="cursor-pointer">Publish Article</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateArticlePage;
