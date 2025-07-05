import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home({ items }) {
  return (
    <>
      <Carousel className="w-full max-w-sm border-0">
        <CarouselContent className="ml-1">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-2/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex  items-center justify-center p-2">
                    <img className="w-24 h-24" src={item.image} />
                    
                  </CardContent>
                  <h3 className="text-xl text-center ">{item.name}</h3>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Home;
