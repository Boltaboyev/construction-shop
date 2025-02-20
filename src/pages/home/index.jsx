import React from "react"

// components
import ShowcaseSwiper from "../../components/showcase"
import ShowcaseInfo from "../../components/showcase-info"
import CategoryCard from "../../components/category-cards"
import Banner from "../../components/banner"
import Brand from "../../components/brand"
import News from "../../components/news"
import HomeCardSwiper from "../../components/home-card-swiper"
import BestProducts from "../../components/best-products"

const HomePage = () => {
    return (
        <>
            <ShowcaseSwiper />
            <ShowcaseInfo />
            <CategoryCard />
            <Banner />
            <HomeCardSwiper />
            <Brand />
            <BestProducts />
            <News />
        </>
    )
}

export default HomePage
