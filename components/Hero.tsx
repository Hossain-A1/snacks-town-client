"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay,Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "@/data/sliderData";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
      parallax={true}
      grabCursor={true}
      autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}
      loop={true}
      speed={700}
      pagination={{
        clickable:true
      }}
        navigation={true}
        modules={[Navigation,Pagination,Autoplay,Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                height={1920}
                width={1080}
                priority
                className="h-full w-full object-cover"
              />
                <Overlay/>
              <div className="space-y-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
                <h2 data-swiper-parallax="-500%" className="lg:text-6xl text-4xl text-white font-semibold">{slide.title}</h2>
                <p data-swiper-parallax="-700%" className="text-gray-100">{slide.para}</p>
                <div data-swiper-parallax="-900%">
                <Link href={"/products"} className="btn">{slide.cta}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
