import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Gradient circle  */}
      <div className="absolute inset-0 before:absolute before:right-1/10 before:top-0 before:h-[600px] before:w-[600px] before:rounded-full before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:blur-md" />

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        <div className="flex-1 text-center space-y-8 md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Explore The World Through
            <span className="text-black"> Words</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-300">
            Discover insightfull articles, thought-provoking stories and expert
            prospective on technology, lifestyle and innovation
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button className="rounded-full text-md">Start Reading</Button>
            <Button className="rounded-full text-md" variant={"outline"}>
              Explore Topics
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:max-w-md">
            <div className="space-y-8">
              <div className="text-2xl font-bold text-primary">1k+</div>
              <div className="text-sm text-white">Published Articles</div>
            </div>
            <div className="space-y-8">
              <div className="text-2xl font-bold text-primary">50k+</div>
              <div className="text-sm text-white">Expert writters</div>
            </div>
            <div className="space-y-8">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-white">Monthly Readers</div>
            </div>
          </div>
        </div>
        {/* Image Farme  */}
        <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto w-64 h-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <Image
              alt="hero-image"
              src={
                "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
