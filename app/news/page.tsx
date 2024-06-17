import React from "react";
import Image from "next/image";


function NewsPage() {
  return (
    <div className="pt-16 bg-white">
      <div className=" max-w-screen-2xl mx-auto space-y-12 py-12">
        <div className="tracking-widest text-2xl">NEWS</div>
        <div className="text-7xl leading-tight text-gray-500">
          Lorem Ipsum is <br />
          simply dummy text of <br />
          the printing and.
        </div>
        <div className="flex">
          <div className="w-1/2">
          
          <Image
            src="/news.png" // Path to your image
            height="1000"
            width="1200"
            quality={100} // Optional: define the quality of the image
            alt="Background Image" // Optional: define a meaningful alt attribute
          />
          </div>
          <div>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
