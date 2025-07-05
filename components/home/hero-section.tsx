import React from "react";
import { Button } from "../ui/button";

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
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300">
            Discover insightfull articles, thought-provoking stories and expert
            prospective on technology, lifestyle and innovation
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button className="rounded-full text-md">Start Reading</Button>
            <Button className="rounded-full text-md" variant={'outline'}>Explore Topics</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
