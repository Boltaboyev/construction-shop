import React from "react"
import {Link} from "react-router-dom"
import {FaChevronRight} from "react-icons/fa6"

// Images
import card1 from "../../shared/assets/img/categories/1.png"
import card2 from "../../shared/assets/img/categories/2.png"
import card3 from "../../shared/assets/img/categories/3.png"
import card4 from "../../shared/assets/img/categories/4.png"
import card5 from "../../shared/assets/img/categories/5.png"
import card6 from "../../shared/assets/img/categories/6.png"
import card7 from "../../shared/assets/img/categories/7.png"

const categories = [
    {img: card1, title: "Сантехника"},
    {img: card2, title: "Отделочные материалы"},
    {img: card3, title: "Электротовары"},
    {img: card4, title: "Инструменты"},
    {img: card5, title: "Столярные изделия"},
    {img: card6, title: "Общестроительные материалы"},
    {img: card7, title: "Все для сауны и бани"},
]

const CategoryCard = () => {
    return (
        <section className="py-1">
            <div className="grid grid-cols-8 gap-3 max-[1285px]:grid-cols-4 max-[660px]:grid-cols-3 max-[490px]:grid-cols-2">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        to="/product"
                        className="flex flex-col justify-center items-center gap-2.5 py-6 px-[10px] rounded-xl bg-gray-100 h-[170px] max-[490px]:h-[150px] border border-transparent hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 ownTransition">
                        <img
                            src={category.img}
                            alt={category.title}
                            className="w-[80px] h-[80px] object-contain"
                        />
                        <p className="font-medium text-sm leading-[127%] text-center text-gray-700 max-[300px]:text-[12px]">
                            {category.title}
                        </p>
                    </Link>
                ))}
                <Link
                    to="/product"
                    className="flex flex-col justify-center items-center group gap-8 p-6 rounded-xl border-gray-200 h-[170px]  max-[490px]:h-[150px] border  hover:border-blue-500 hover:shadow-xl hover:scale-105 transition-transform">
                    <div className="h-11 w-11 border border-transparent group-hover:bg-blue-500 bg-[#f6f7f9] rounded-full flex justify-center items-center">
                        <FaChevronRight className="text-[#7e8289] group-hover:!text-white" />
                    </div>
                    <p className="font-medium text-sm leading-[127%] text-center text-gray-700">
                        Перейти в каталог
                    </p>
                </Link>
            </div>
        </section>
    )
}

export default CategoryCard
