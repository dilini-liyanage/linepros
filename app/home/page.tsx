"use client"
import React from "react";
import Image from "next/image";
import Button from "@/components/button";

function HomePage() {

  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <div className="min-h-fit pt-24">
      <div className="max-w-screen-3xl mx-auto justify-between grid grid-cols-12">
        <div className="col-span-8">
          <Image
            src="/laptop.png"
            height="1000"
            width="1200"
            quality={100}
            alt="Background Image"
          />
        </div>
        <div className="flex flex-col col-span-4 -ms-24  py-28 text-white ">
          <div className="text-5xl space-y-2 mt-8">
            <div>
              We are the <span className="font-black">#1 online</span>
            </div>
            <div>
              <span className="font-black"> betting software</span> <span className=" font-extralight">in </span> 
            </div>
            <div className=" font-extralight">Latin America</div>
          </div>
          <Button
            text="BOOK A DEMO"
            width="w-72"
            backgroundColor="transparent"
            border="border-4 border-red-700"
            textColor="text-white"
            iconColor="white"
            textSize="text-lg"
            className="mt-16"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
