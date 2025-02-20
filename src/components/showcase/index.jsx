import React, {useRef, useEffect, useState} from "react"

// antd
import {Button} from "antd"

// swiper
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay, Navigation} from "swiper/modules"

// img
import img1 from "../../shared/assets/img/swiper/1.png"
import img2 from "../../shared/assets/img/swiper/2.png"
import img3 from "../../shared/assets/img/swiper/3.webp"

// icons
import {MdChevronRight} from "react-icons/md"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa6"

const ShowcaseSwiper = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiperInstance = swiperRef.current.swiper
                swiperInstance.params.navigation.prevEl = prevRef.current
                swiperInstance.params.navigation.nextEl = nextRef.current
                swiperInstance.navigation.init()
                swiperInstance.navigation.update()
            }
        }, 100)
    }, [])

    return (
        <div className="relative w-full">
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                loop
                className="w-full h-[450px] rounded-lg max-[360px]:h-80">
                {[img1, img2, img3].map((img, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundPosition:
                                screenWidth <= 360
                                    ? index === 2
                                        ? "center"
                                        : "-500px"
                                    : screenWidth <= 500
                                    ? index === 2
                                        ? "center"
                                        : "-650px"
                                    : "center",
                            position: "relative",
                        }}
                        className="bg-cover max-[750px]:bg-right bg-no-repeat w-full h-full overflow-hidden rounded-lg p-[50px] !flex !flex-col !gap-[15px] !justify-center !items-start max-[750px]:!items-center max-[750px]:!justify-end max-[360px]:!justify-center max-[750px]:!text-center">
                        <div className="hidden max-[750px]:block absolute inset-0 bg-gradient-to-t from-[#ffffffbf] to-transparent"></div>

                        <h1 className="font-bold text-[44px] leading-[112%] text-[#2c333d] relative z-10 max-[575px]:text-[35px] max-[380px]:text-[28px] max-[360px]:text-[25px]">
                            Электроинструмент <br /> для любых нужд
                        </h1>
                        <p className="font-normal text-[17px] leading-[159%] text-[#2c333d] max-[750px]:hidden relative z-10">
                            У нас обновился ассортимент сантехники, мебели для{" "}
                            <br /> ванной комнаты, а так же других сопутствующих
                            товаров.
                        </p>
                        <Button
                            type="primary"
                            className="!flex !justify-center !items-center !gap-[5px] !p-[25px_30px] uppercase !text-[12px] !bg-[#011120] relative z-10 max-[575px]:!p-[20px_25px] max-[360px]:!p-[10px_15px]">
                            перейти к товарам{" "}
                            <MdChevronRight className="text-[18px]" />
                        </Button>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10 max-[500px]:p-2 max-[360px]:hidden max-[500px]:left-1">
                <FaChevronLeft className="text-2xl max-[500px]:text-xl" />
            </button>
            <button
                ref={nextRef}
                className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10 max-[500px]:p-2 max-[360px]:hidden max-[500px]:right-1">
                <FaChevronRight className="text-2xl max-[500px]:text-xl" />
            </button>
        </div>
    )
}

export default ShowcaseSwiper
