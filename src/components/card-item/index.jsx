import React, {useContext} from "react"
import {ShopContext} from "../../context/shopContext"

// Ant Design
import {Button} from "antd"

// Icons
import cartIcon from "../../shared/assets/icons/cart.svg"
import {HiMenuAlt2} from "react-icons/hi"
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"

const CardItem = ({id, img, title, oldPrice, price, status, discount}) => {
    const {state, dispatch} = useContext(ShopContext)

    const isLiked = state.like.some((item) => item.id === id)

    const handleLike = () => {
        dispatch({type: "like", product: {id, img, title, price}})
        toast.success(
            isLiked
                ? "Товар удален из избранного"
                : "Товар добавлен в избранное"
        )
    }

    const handleAddToCart = () => {
        dispatch({type: "add", product: {id, img, title, price}})
        toast.success("Товар добавлен в корзину")
    }

    return (
        <div className="flex flex-col justify-between gap-[15px] border border-[#edf0f2c4] p-[13px] rounded-xl group cursor-pointer hover:shadow-lg hover:border-[#1870d431]">
            <Link
                to={`/product/${id}`}
                className="flex flex-col gap-[15px] justify-between">
                <div className="flex justify-center items-center relative h-[200px]">
                    <img
                        src={img}
                        alt={title}
                        className="h-[65%] w-[65%] object-contain group-hover:scale-[1.04] transition-transform duration-[.4s]"
                    />

                    {status && (
                        <p
                            className={`absolute z-10 top-0 left-0 border rounded-sm p-[4px_7px] text-[13px] font-medium
                            ${
                                status === "хит"
                                    ? "border-[#f90] text-[#f90]"
                                    : ""
                            }
                            ${
                                status === "новинка"
                                    ? "border-[#1b9665] text-[#1b9665]"
                                    : ""
                            }
                            ${
                                status === "распродажа"
                                    ? "border-[#ee063e] text-[#ee063e]"
                                    : ""
                            }`}>
                            {status}
                        </p>
                    )}
                </div>

                <p className="font-medium text-[16px] text-black my-[5px]">
                    {title}
                </p>

                <div className="flex justify-start items-center gap-[10px]">
                    {oldPrice && (
                        <p className="font-normal text-[13px] line-through text-[#8f9296]">
                            {oldPrice} ₽
                        </p>
                    )}
                    <p className="font-medium text-[#003b73]">{price} ₽</p>
                    {discount > 0 && (
                        <span className="bg-[#1b9665] text-white text-[10px] p-[1px_4px] rounded-[4px]">
                            -{discount}%
                        </span>
                    )}
                </div>
            </Link>

            <div className="flex justify-between items-center mt-2">
                <Button
                    onClick={handleAddToCart}
                    type="primary"
                    className="!py-[18px]">
                    <img src={cartIcon} alt="cart" />
                    Купить
                </Button>

                <div className="flex gap-[10px]">
                    <button
                        onClick={handleLike}
                        className={`h-[40px] w-[40px] flex justify-center items-center border rounded-[5px] text-[25px] hover:border-red-600 hover:text-red-600
                        ${
                            isLiked
                                ? "text-red-600 border-red-600"
                                : "border-[#ebecec] text-[#212121b9]"
                        }`}>
                        {isLiked ? <IoMdHeart /> : <IoMdHeartEmpty />}
                    </button>

                    <button className="h-[40px] w-[40px] flex justify-center items-center border border-[#ebecec] rounded-[5px] text-[#212121b9] text-[22px] hover:border-[#f90] hover:text-[#f90]">
                        <HiMenuAlt2 className="rotate-[-90deg]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem
