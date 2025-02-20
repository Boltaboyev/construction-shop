import React, {useContext} from "react"
import {ShopContext} from "../../context/shopContext"
import TotalPrice from "../../components/total-price"

// icons
import {RiDeleteBin6Line} from "react-icons/ri"

const ShopPage = () => {
    const {dispatch, state} = useContext(ShopContext)

    const handleIncrease = (id) => {
        dispatch({type: "increment", payload: id})
    }

    const handleDecrease = (id) => {
        dispatch({type: "decrement", payload: id})
    }

    const handleRemove = (id) => {
        dispatch({type: "delete", payload: id})
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8 py-6 px-1 ">
            {!state?.shop?.length && (
                <div className="text-center py-[50px]">
                    <h1 className="md:text-3xl text-2xl font-medium mb-1">
                        Корзина пока пуста
                    </h1>
                    <p className="text-gray-500 mb-8 mx-auto w-[30%] max-[1185px]:w-[50%] max-[670px]:w-[70%] max-[475px]:w-[100%] max-[475px]:text-[14px]">
                        Посмотрите каталог чтобы найти товары, или
                        воспользуйтесь поиском
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="border-[2px] text-[14px] border-gray-400 px-[20px] h-[45px] rounded-lg font-medium cursor-pointer active:scale-95">
                        <p>На главную</p>
                    </button>
                </div>
            )}

            {/* Product List */}
            <div className="flex-1 space-y-4">
                {state?.shop?.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-wrap lg:flex-nowrap gap-[9px] items-center justify-between border border-gray-100 rounded-lg p-2 bg-white">
                        {/* Product Image */}
                        <div className="flex justify-center items-center">
                            <img
                                className="w-24 h-24 object-contain"
                                src={item.img}
                                alt={item.title}
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col text-gray-800 space-y-1 text-sm">
                            <p className="text-black text-md mb-2 font-medium">
                                {item.title}
                            </p>
                            <p className="text-gray-500 max-[355px]:hidden">
                                Артикул: XJ89YHGO
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className="flex flex-col items-start text-sm">
                            <h1 className="font-normal leading-[110%] text-[#003b73]">
                                {item.price} ₽
                            </h1>
                            {item.oldPrice && (
                                <p className="font-normal text-[13px] leading-[147%] line-through text-[#8f9296]">
                                    {item.oldPrice} ₽
                                </p>
                            )}
                        </div>

                        {/* Counterer Buttons */}
                        <div className="bg-gray-200 rounded-full p-[4px] flex justify-between items-center w-[120px] overflow-hidden">
                            <button
                                className="border-0 p-1 cursor-pointer bg-white rounded-full h-[30px] w-[30px] shadow flex justify-center items-center active:scale-95"
                                onClick={() => handleDecrease(item.id)}
                                disabled={item.counter <= 1}>
                                -
                            </button>

                            <span className="mx-2 font-medium flex justify-center items-center">
                                {item.counter}
                            </span>

                            <button
                                className="border-0 p-1 cursor-pointer bg-white rounded-full h-[30px] w-[30px] shadow flex justify-center items-center active:scale-95"
                                onClick={() => handleIncrease(item.id)}>
                                +
                            </button>
                        </div>

                        {/* Delete Button */}
                        <button
                            className="text-gray-400 hover:text-red-500 transition"
                            onClick={() => handleRemove(item.id)}>
                            <RiDeleteBin6Line className="text-2xl" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Total Price Section */}
            <div className="w-full lg:w-1/3">
                <TotalPrice />
            </div>
        </div>
    )
}

export default ShopPage
