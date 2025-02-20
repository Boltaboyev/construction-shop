import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

import img1 from "../../shared/assets/img/brand/1.png"
import img2 from "../../shared/assets/img/brand/2.png"
import img3 from "../../shared/assets/img/brand/3.png"
import img4 from "../../shared/assets/img/brand/4.png"
import img5 from "../../shared/assets/img/brand/5.png"
import img6 from "../../shared/assets/img/brand/6.png"
import img7 from "../../shared/assets/img/brand/7.png"
import img8 from "../../shared/assets/img/brand/8.png"

const slides = [img1, img2, img3, img4, img5, img6, img7, img8]

const Brand = () => {
    return (
        <section className="py-6">
            <h1 className="section-title">Популярные бренды</h1>
            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    loop
                    breakpoints={{
                        230: {slidesPerView: 2, spaceBetween: 10},
                        600: {slidesPerView: 4, spaceBetween: 10},
                        850: {slidesPerView: 5, spaceBetween: 10},
                        1280: {slidesPerView: 7, spaceBetween: 10},
                    }}>
                    {slides.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="!flex !justify-center !items-center cursor-pointer">
                            <img
                                src={img}
                                alt={`Brand ${index + 1}`}
                                className="w-[70%] h-[30px] object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Brand
