import React, {useEffect, useState} from "react"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

import CardItem from "../card-item"
import SkeletonLoader from "../skeleton-loader"
import my_axios from "../../hook/useAxios"

// img
import img1 from "../../shared/assets/img/static-card.png"

// icon
import cartIcon from "../../shared/assets/icons/cart.svg"
import {Tabs} from "antd"

const HomeCardSwiper = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const items = [
        {key: "1", label: "Все товары"},
        {key: "2", label: "Инструменты"},
        {key: "3", label: "Сантехника"},
    ]

    useEffect(() => {
        my_axios
            .get("/products")
            .then((res) => {
                const filteredProducts = res.data
                    .filter((item) => item.status === "хит")
                    .slice(0, 6)
                setProducts(filteredProducts)
            })
            .catch((error) => console.error("Error fetching products:", error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section className="py-6 flex flex-col">
            <h1 className="section-title">Хиты продаж</h1>
            <Tabs defaultActiveKey="1" items={items} />
            <div className="w-full flex gap-[10px]">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    loop
                    breakpoints={{
                        900: {slidesPerView: 2, spaceBetween: 20},
                        1195: {slidesPerView: 3, spaceBetween: 20},
                    }}>
                    {loading
                        ? [...Array(3)].map((_, index) => (
                              <SwiperSlide key={index}>
                                  <SkeletonLoader />
                              </SwiperSlide>
                          ))
                        : products.map((item) => (
                              <SwiperSlide key={item.id}>
                                  <CardItem {...item} />
                              </SwiperSlide>
                          ))}
                </Swiper>

                {/* Static Card */}
                <div className="min-w-[320px] flex flex-col justify-between pt-[15px] items-center gap-[15px] border border-[#117fe3] rounded-xl overflow-hidden max-[660px]:hidden">
                    <div className="flex justify-between items-center w-full px-[15px]">
                        <h1 className="font-medium text-[18px] leading-[110%] text-[#011120]">
                            Успейте купить <br /> по скидке
                        </h1>
                        <span className="bg-[#1b9665] text-white text-[12px] font-light p-[2px_4px] rounded-[4px]">
                            -12%
                        </span>
                    </div>
                    <img src={img1} alt="img" className="h-[140px]" />
                    <p className="font-medium text-[18px] text-center leading-[110%] text-[#011120]">
                        Клей для напольных <br /> покрытий Porret
                    </p>
                    <div className="flex justify-center items-center gap-[15px]">
                        <p className="font-normal text-[17px] leading-[129%] line-through text-[#8f9296]">
                            15 999 ₽
                        </p>
                        <h1 className="font-medium text-[24px] leading-[92%] text-[#1b9665]">
                            12 789 ₽
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-[10px] bg-blue-500 text-white p-[10px] w-full cursor-pointer text-[14px] select-none">
                        <img src={cartIcon} alt="icon" />
                        Добавить в корзину
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeCardSwiper
