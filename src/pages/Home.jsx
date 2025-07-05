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
    <Carousel className="w-full max-w-full">
      <CarouselContent className="ml-1 flex">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1"
            style={{ flexBasis: `${100 / items.length}%` }}
          >
            <div className="p-1">
              <Card className="border-0 shadow-none">
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    className="w-24 h-32 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                </CardContent>
                <h3 className="text-xl text-center">{item.name}</h3>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Home;
