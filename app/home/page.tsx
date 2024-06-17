import React from "react";
import Image from "next/image";
import Header from "@/components/header";

function HomePage() {
  return (
    <div className="min-h-fit pt-24">
      <div className="flex max-w-screen-2xl mx-auto justify-between">
        <div className="relative">
          <Image
            src="/laptop.png" // Path to your image
            height="1000"
            width="1200"
            quality={100} // Optional: define the quality of the image
            alt="Background Image" // Optional: define a meaningful alt attribute
          />
        </div>
        <div className="ml-[130vh] flex flex-col absolute z-10 py-28 text-white ">
          <div className="text-5xl space-y-2 font-thin">
            <div>
              We are the <span className="font-black">#1 online</span>
            </div>
            <div>
              {" "}
              <span className="font-black"> betting software</span> in
            </div>
            <div>Latin America</div>
          </div>

          <button className="flex w-72 mt-16 p-3 border-4 border-red-700 rounded-md justify-between">
            <div className="text-3xl font-bold">BOOK A DEMO</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
