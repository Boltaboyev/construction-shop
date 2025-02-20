import React, {useContext} from "react"
import {useNavigate} from "react-router-dom"

// antd
import {Button} from "antd"

import {ShopContext} from "../../context/shopContext"
import CardItem from "../../components/card-item"

// img
import empty from "../../shared/assets/icons/empty-like.svg"

const LikePage = () => {
    const {state} = useContext(ShopContext)
    const navigate = useNavigate()

    return (
        <section className="py-12">
            {state.like.length > 0 ? (
                <div className="grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[475px]:grid-cols-1">
                    {state.like.map((value) => (
                        <CardItem key={value.id} {...value} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center text-center m-auto py-5">
                    <img src={empty} alt="empty" className="h-16 mb-2" />
                    <h1 className="text-lg font-medium text-[#2c333d]">
                        Ваш список желаний пуст
                    </h1>
                    <p className="text-sm text-[#383838] my-3">
                        У вас пока нет товаров в списке желаний.{" "}
                        <br className="max-[480px]:hidden" /> На странице
                        <span className="font-bold">"Каталог"</span> вы найдете
                        много интересных товаров.
                    </p>
                    <Button
                        type="primary"
                        onClick={() => navigate("/product")}
                        className="!h-12 uppercase !font-medium !text-xs">
                        Перейти в каталог
                    </Button>
                </div>
            )}
        </section>
    )
}

export default LikePage
