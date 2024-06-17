"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import CustomButton from "@/components/button";

function ProductsPage() {
  const cards = [
    { name: "Card 1" },
    { name: "Card 2" },
    { name: "Card 3" },
    { name: "Card 4" },
    { name: "Card 5" },
    { name: "Card 6" },
    { name: "Card 7" },
    { name: "Card 8" },
    { name: "Card 9" },
  ];

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="pt-20 max-w-screen-3xl mx-auto">
      <div className="text-7xl text-white leading-tight">
        The most advance <br />
        features for the best <br /> results.
      </div>

      <div className="grid grid-cols-3 gap-20 py-16">
        {cards.map((card, index) => (
          <div key={index}>
            <div className="relative border p-4 rounded-2xl h-[60vh] bg-black opacity-60">
              <button className="absolute top-4 right-4 h-10 w-10 border-white border text-white rounded-full font-bold text-xl text-center">
                +
              </button>
            </div>
            <h2 className="font-light text-3xl text-white py-5">{card.name}</h2>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center">
        <div className="w-2/5">
          <div className="text-5xl font-bold text-white mb-10 leading-tight">
            Ready for <br /> more?
          </div>
          <CustomButton
            text="CONTACT OUR SALES TEAM"
            width="w-[25vw]"
            backgroundColor="#F01E2A"
            border="border-2 border-[#F01E2A]"
            textColor="text-white"
            iconColor="white"
            textSize="text-lg"
             iconName="chevronRight"
            onClick={handleClick}
          />
          <CustomButton
            text="VISIT OUR LIVE DEMO SITE"
            width="w-[25vw]"
            backgroundColor="transparent"
            border="border-2 border-[#F01E2A]"
            textColor="text-white"
            iconColor="white"
            textSize="text-lg"
             iconName="chevronRight"
            onClick={handleClick}
            className="mt-5"
          />
        </div>
        <div className="w-3/5 flex justify-center">
          <Image
            src="/product-items.png" // Path to your image
            height="300"
            width="1000"
            quality={100} // Optional: define the quality of the image
            alt="Background Image" // Optional: define a meaningful alt attribute
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
