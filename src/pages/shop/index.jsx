import React, {useContext} from "react"
import {ShopContext} from "../../context/shopContext"
import TotalPrice from "../../components/total-price"
import empty from "../../shared/assets/img/empty.png"
import {RiDeleteBin6Line} from "react-icons/ri"
import {useNavigate} from "react-router-dom"
import {Button} from "antd"
import {toast} from "react-toastify"

const ShopPage = () => {
    const {dispatch, state} = useContext(ShopContext)
    const navigate = useNavigate()

    const handleDecrement = (id, counter) => {
        counter !== 1
            ? dispatch({type: "decrement", productId: id})
            : dispatch({type: "delete", deletedId: id})
    }

    const handleIncrement = (id) => {
        dispatch({type: "increment", productId: id})
    }

    const handleDelete = (id) => {
        dispatch({type: "delete", deletedId: id})
        toast.success("Товар удален из корзины!")
    }

    return (
        <div className="flex gap-5 py-5 max-[900px]:flex-col">
            {!state?.shop?.length && (
                <div className="flex flex-col items-center text-center m-auto py-12">
                    <img src={empty} alt="empty" className="h-16 mb-2" />
                    <h1 className="text-lg font-medium text-[#2c333d]">
                        В вашей корзине пусто
                    </h1>
                    <p className="text-sm text-[#383838] my-3">
                        У вас пока нет товаров в корзине.{" "}
                        <br className="max-[480px]:hidden" />
                        На странице <span className="font-bold">
                            "Каталог"
                        </span>{" "}
                        вы найдете много интересных товаров.
                    </p>
                    <Button
                        type="primary"
                        onClick={() => navigate("/product")}
                        className="!h-12 uppercase !font-medium !text-xs">
                        Перейти в каталог
                    </Button>
                </div>
            )}

            {state?.shop?.length ? (
                <>
                    <div className="flex-1 space-y-4">
                        {state.shop.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-wrap lg:flex-nowrap gap-2.5 items-center justify-between border border-gray-100 rounded-lg py-4 px-5 bg-white">
                                <div className="flex justify-center items-center">
                                    <img
                                        className="w-16 h-17 object-contain"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="flex flex-col text-gray-800 space-y-1 text-sm w-[30%] min-w-[200px]">
                                    <p className="text-black text-md mb-2 font-medium">
                                        {item.title}
                                    </p>
                                    <p className="text-gray-500 max-[355px]:hidden">
                                        Артикул: XJ89YHGO
                                    </p>
                                </div>

                                <div className="flex flex-col items-start text-sm">
                                    <h1 className="text-[#003b73] font-normal">
                                        {item.price} ₽
                                    </h1>
                                    {item.oldPrice && (
                                        <p className="text-xs line-through text-[#8f9296]">
                                            {item.oldPrice} ₽
                                        </p>
                                    )}
                                </div>

                                <div className="bg-gray-200 rounded-full p-1 flex justify-between items-center w-28 max-[285px]:w-24">
                                    <button
                                        onClick={() =>
                                            handleDecrement(
                                                item.id,
                                                item.counter
                                            )
                                        }
                                        className="border-0 p-1 cursor-pointer bg-white rounded-full h-8 w-8 shadow flex justify-center items-center active:scale-95">
                                        -
                                    </button>

                                    <span className="mx-2 font-medium">
                                        {item.counter}
                                    </span>

                                    <button
                                        className="border-0 p-1 cursor-pointer bg-white rounded-full h-8 w-8 shadow flex justify-center items-center active:scale-95"
                                        onClick={() =>
                                            handleIncrement(item.id)
                                        }>
                                        +
                                    </button>
                                </div>

                                <button
                                    className="text-gray-400 hover:text-red-500 transition"
                                    onClick={() => handleDelete(item.id)}>
                                    <RiDeleteBin6Line className="text-2xl" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="w-full lg:w-1/3">
                        <TotalPrice total={state.shop} />
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    )
}

export default ShopPage
