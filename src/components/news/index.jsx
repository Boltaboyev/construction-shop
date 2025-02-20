import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

import img1 from "../../shared/assets/img/news/1.png"
import img2 from "../../shared/assets/img/news/2.png"
import img3 from "../../shared/assets/img/news/3.png"
import img4 from "../../shared/assets/img/news/4.png"

const slides = [img1, img2, img3, img4]

const News = () => {
    return (
        <section className="py-6">
            <h1 className="section-title">Последние новости</h1>
            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{delay: 6000, disableOnInteraction: false}}
                    loop
                    breakpoints={{
                        560: {slidesPerView: 2, spaceBetween: 20},
                        875: {slidesPerView: 3, spaceBetween: 20},
                        1280: {slidesPerView: 4, spaceBetween: 20},
                    }}>
                    {slides.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="!flex !flex-col !justify-between !items-start !gap-[8px] cursor-pointer">
                            <img
                                src={img}
                                alt={"title"}
                                className="!self-center w-full object-cover"
                            />
                            <p className="font-medium leading-[130%] text-[#2c333d]">
                                Масштабное обновление каталога инструментов
                            </p>
                            <p className="font-normal text-[14px] leading-[144%] text-[#393939e9]">
                                С радостью сообщаем вам о крупном пополнении
                                нашего каталога инструментов.
                            </p>
                            <small className="text-[12px]">
                                5 Августа 2023
                            </small>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default News
