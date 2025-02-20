import React, {useContext} from "react"

import {ShopContext} from "../../context/shopContext"

// antd
import {Button} from "antd"

// icon
import cartIcon from "../../shared/assets/icons/cart.svg"
import {HiMenuAlt2} from "react-icons/hi"
import {IoMdHeartEmpty} from "react-icons/io"
import {Link} from "react-router-dom"

const CardItem = (props) => {
    const {img, title, oldPrice, price, status, discount, id} = props
    const {dispatch} = useContext(ShopContext)

    return (
        <div className="flex flex-col justify-between gap-[15px] border border-[#edf0f2c4] p-[13px] rounded-xl group cursor-pointer hover:shadow-lg hover:border-[#1870d431]">
            <Link
                to={`/product/2`}
                className="flex flex-col gap-[15px] max-[650px]:gap-[10px] justify-between">
                <div className="flex justify-center items-center relative h-[200px] max-[650px]:h-[160px]">
                    <img
                        src={img}
                        alt={title}
                        className="h-[65%] w-[65%] object-contain group-hover:scale-[1.04] transition-transform duration-[.4s] max-[650px]:w-[45%] max-[650px]:h-[45%]"
                    />

                    <p
                        className={`absolute z-10 top-0 left-0 border rounded-sm p-[4px_7px]  max-[650px]:p-[3px_5px] max-[650px]:text-[10px]
    font-medium text-[13px] leading-[146%] text-center
    ${status === "хит" ? "border-[#f90] text-[#f90]" : ""}
    ${status === "новинка" ? "border-[#1b9665] text-[#1b9665]" : ""}
    ${status === "распродажа" ? "border-[#ee063e] text-[#ee063e]" : ""}`}>
                        {status}
                    </p>
                </div>

                <p className="font-normal text-[12px] leading-none text-[#a8adb2]">
                    Артикул: XJ89YHGO
                </p>

                <p className="font-medium text-[16px] leading-[144%] text-black my-[5px] max-[650px]:text-[15px]">
                    {title}
                </p>

                <div className="flex justify-start items-start gap-[20px]">
                    <div className="flex flex-col">
                        <p className="font-normal text-[13px] leading-[147%] line-through text-[#8f9296]">
                            {oldPrice} ₽
                        </p>
                        <p className="font-medium leading-[110%] text-[#003b73]">
                            {price} ₽
                        </p>
                    </div>
                    <span className="bg-[#1b9665] text-white text-[10px] font-light p-[1px_4px] rounded-[4px]">
                        -{discount}%
                    </span>
                </div>
            </Link>

            <div className="flex justify-between items-center gap-[10px] mt-2">
                <Button
                    onClick={() => {
                        dispatch({type: "add", product: props})
                    }}
                    type="primary"
                    className="!py-[18px] max-[650px]:!p-[14px]">
                    <img src={cartIcon} alt="cart" />
                    Купить
                </Button>

                <div className="flex justify-center items-center gap-[10px] h-full">
                    <button
                        onClick={() => {
                            dispatch({type: "like", product: props})
                        }}
                        className="h-[40px] w-[40px] flex justify-center items-center border border-[#ebecec] rounded-[5px] text-[#212121b9] text-[25px] hover:border-red-600 ownTransition hover:text-red-600">
                        <IoMdHeartEmpty />
                    </button>
                    <button className="h-[40px] w-[40px] flex justify-center items-center border border-[#ebecec] rounded-[5px] text-[#212121b9] text-[22px] hover:border-[#f90] ownTransition hover:text-[#f90]">
                        <HiMenuAlt2 className="rotate-[-90deg]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItem
