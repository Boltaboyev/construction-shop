import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

import img1 from "../../shared/assets/img/banner/1.png"
import img2 from "../../shared/assets/img/banner/2.png"
import img3 from "../../shared/assets/img/banner/3.png"
import img4 from "../../shared/assets/img/banner/4.png"

const slides = [
    {
        img: img1,
        title: "Метизные изделия",
        discount: "до -15%",
    },
    {
        img: img2,
        title: "Лакокрасочные материалы",
        discount: "до -30%",
    },
    {
        img: img3,
        title: "Напольные покрытия",
        discount: "до -25%",
    },
    {
        img: img4,
        title: "Все для отопления",
        discount: "до -30%",
    },
]

const Banner = () => {
    return (
        <section className="py-6 w-full">
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                loop
                breakpoints={{
                    320: {slidesPerView: 1, spaceBetween: 10},
                    640: {slidesPerView: 2, spaceBetween: 10},
                    1280: {slidesPerView: 4, spaceBetween: 10},
                }}>
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url(${slide.img})`,
                            position: "relative",
                        }}
                        className="!bg-cover !flex !flex-col !gap-[10px] !justify-center !items-start p-[25px] !h-[175px] cursor-pointer rounded-lg">
                        <h2 className="font-medium text-[22px] leading-[118%] text-[#2c333d]">
                            {slide.title.split(" ").map((word, i) => (
                                <React.Fragment key={i}>
                                    {word} <br />
                                </React.Fragment>
                            ))}
                        </h2>
                        <p className="bg-[#011120] p-[5px_8px] rounded-[6px] text-white text-[14px] font-medium w-fit">
                            {slide.discount}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Banner