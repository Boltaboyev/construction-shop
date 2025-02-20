import React, {useEffect, useState} from "react"
import "swiper/css"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"

import CardItem from "../card-item"
import my_axios from "../../hook/useAxios"

// icon
import {Segmented, Tabs} from "antd"

const BestProducts = () => {
    const items = [
        {
            key: "1",
            label: "Все товары",
        },
        {
            key: "2",
            label: "Инструменты",
        },
        {
            key: "3",
            label: "Сантехника",
        },
    ]
    const [products, setProducts] = useState([])

    useEffect(() => {
        my_axios
            .get("/products")
            .then((res) => {
                const filteredProducts = res.data.slice(0, 10)
                setProducts(filteredProducts)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <section className="py-6 flex flex-col">
            <h1 className="section-title">Лучшие предложения</h1>
            <Tabs defaultActiveKey="1" items={items} />
            <div className="w-full flex gap-[10px]">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{delay: 4000, disableOnInteraction: false}}
                    loop
                    breakpoints={{
                        500: {slidesPerView: 2, spaceBetween: 10},
                        800: {slidesPerView: 3, spaceBetween: 10},
                        1195: {slidesPerView: 4, spaceBetween: 10},
                    }}>
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <CardItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default BestProducts
