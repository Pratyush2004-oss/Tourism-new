"use client"; // Add this line at the very top

import {
  A11y,
  Autoplay,
  EffectCube,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { TOURS } from "@/constants/Packages";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../ui/button";
import { ImportantLinks } from "@/constants/navbarItems";
import Link from "next/link";

export default function LandingSlider() {
  // It's good practice to name your component function

  return (
    <main>
      <div className="w-full mx-auto">
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCube,
            Keyboard,
            Autoplay,
          ]}
          autoplay
          loop
          keyboard
          spaceBetween={0}
          centeredSlides
          initialSlide={0}
          slideToClickedSlide
          speed={500}
          slidesPerView={1}
          effect="cube"
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {TOURS.slice(0, 5).map((item, idx) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center h-96 sm:h-[500px] lg:h-[600px] bg-blue-400 w-full relative">
                  <Image
                    src={item.image}
                    alt=""
                    height={1000}
                    width={1000}
                    className="w-full object- h-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-20">
                    <div className="flex gap-2 h-full m-4">
                      <div className="h-10 w-1 bg-blue-400" />
                      <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold text-white">
                          {item.name}
                        </h1>
                        <div className="flex gap-2 items-center opacity-100">
                          <p className="bg-yellow-500 text-black font-bold text-xs rounded-lg shadow-lg w-fit px-2 py-0.5">
                            {item.days}D | {item.days - 1}N
                          </p>
                          <p className="text-white text-sm">
                            Starts from{" "}
                            <span className="font-bold text-lg font-mono">
                              ₹{item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full absolute bottom-1/2">
                      <Button
                        variant={"outline"}
                        className="w-40 bg-transparent text-white hover:text-red-500"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* text slider */}
      <div className=" my-2 mx-auto w-full bg-blue-400/75">
        <Swiper
          loop
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          autoplay
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          speed={500}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {ImportantLinks.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="p-2 cursor-pointer text-center font-semibold text-sm text-nowrap"
            >
              <Link href={item.href}>{item.name}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
