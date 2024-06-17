"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "@/components/button";

function AboutPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="pt-20  bg-white">
      <div className="max-w-screen-3xl mx-auto">
        <div className="py-8 text-4xl text-gray-400 font-extralight text-center leading-snug">
          The <span className="font-bold">LinePros</span> team developed
          products to address gaps in the marketplace and build <br/>
          superior solutions. Since our inception in 2010, our development has continued to close <br/>
          vulnerabilities and highlight opportunities. Our industry knowledge and technological <br/>
          expertise make us a necessary strategic
          partner.
        </div>
        <div className="flex py-12 w-full items-center">
          <div className="w-1/2">
            <video
              className="rounded-xl "
              width="600"
              height="300"
              controls
              preload="none"
            >
              <source src="/sample-video.mov" type="video/mp4" />
            </video>
          </div>
          <div className="w-1/2 space-y-12 py-16">
            <div className="flex w-full gap-3 items-center text-gray-400">
              <div className="text-8xl w-1/7">14</div>
              <div className=" w-1/7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#BB1515"
                  stroke-width="2"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="w-5/7 text-xl font-light ml-12">
                Years leading the industry with innovation driven by a top-notch
                team
              </div>
            </div>
            <div className="flex w-full gap-3 items-center text-gray-400">
              <div className="text-8xl w-1/7">50</div>
              <div className=" w-1/7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#BB1515"
                  stroke-width="2"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="w-5/7 text-xl font-light ml-12">
                Collaborators with extensive industry knowledge and great
                motivation to develop innovative solutions
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center">
          <div className="w-1/2">
            <Button
              text="VISIT OUR LIVE DEMO SITE"
              width="w-"
              backgroundColor="#F01E2A"
              textColor="text-white"
              iconColor="white"
              textSize="text-lg"
              onClick={handleClick}
            />
          </div>
          <div className="w-1/2 space-y-12 py-16 text-3xl leading-relaxed text-gray-400">
            100% stable, customizable, and integration-friendly. <br />
            <span className="font-black">Visit our demo website</span>, create a
            free user account, and explore all the features our software offers
            for your business.
          </div>
        </div>
      </div>

      <div className=" w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default AboutPage;
