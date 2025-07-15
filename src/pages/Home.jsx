import React from "react";
// import image from "../../public/images/background.jpg";
import mainBackground from "../../public/images/main-background-image.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Home() {
  return (
    <>
      {/* <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-56 w-full bg-cover relative"
      >
        <Carousel className="w-full max-w-full absolute ">
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
                        className="w-32 h-32 rounded-full "
                        src={item.image}
                        alt={item.name}
                      />
                    </CardContent>
                    <h3 className="text-xl text-center text-white">
                      {item.name}
                    </h3>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}

      <main>
        <div className="relative h-64 w-full bg-cover bg-center flex  items-center justify-center pt-8">
          <img
            src={mainBackground}
            alt="mainImage"
            className="w-full h-96 bg-cover"
          />
          <h1 className="absolute text-center font-bold mb-2 text-3xl ">
            Welcome to Annapurna Treats Restaurant!
          </h1>
          <p className="absolute text-center max-w-xl font-light pt-10">
            Experience delicious flavors, cozy ambiance, and heartfelt
            hospitality. Enjoy your meal!
          </p>
        </div>
      </main>

      {/* <footer></footer> */}
    </>
  );
}

export default Home;
