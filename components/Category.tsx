"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/categoryData";

import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "./SectionTitle";
import CategoriSliderItem from "./CategoriSliderItem";

const Category = () => {
  return (
    <section className="py-20">
     <SectionTitle subTitle="Categories" title="Visit our snacks town of all categories"/>
      <div className="w-full h-[50vh] ">
        <Swiper
          speed={700}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
             <CategoriSliderItem image={item.src} alt={item.alt} name={item.name}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
