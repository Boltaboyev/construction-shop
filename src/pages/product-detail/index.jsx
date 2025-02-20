import React, {useContext, useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import my_axios from "../../hook/useAxios"
import {ShopContext} from "../../context/shopContext"

import {Button, Tabs} from "antd"

// icons
import {BsBoxSeam} from "react-icons/bs"
import {FaListUl, FaCheck} from "react-icons/fa"
import {CiCreditCard1, CiPercent} from "react-icons/ci"

const ProductDetail = () => {
    const {dispatch} = useContext(ShopContext)
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    const [count, setCount] = useState(1)

    const increaseCount = () => setCount((prev) => prev + 1)
    const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - 1 : 1))

    useEffect(() => {
        my_axios
            .get(`/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id])

    const items = [
        {key: "1", label: "Характеристики"},
        {key: "2", label: "О товаре"},
        {key: "3", label: "Доставка и оплата"},
    ]

    const productDetails = [
        {label: "Тип товара", value: "Дрель-шуруповерт"},
        {label: "Бренд", value: "MAKITA"},
        {label: "Назначение", value: "профессиональный"},
        {label: "Мощность (Вт)", value: "18"},
        {label: "Емкость АКБ (А/ч)", value: "1,5"},
        {label: "Крутящий момент макс. (Н/м)", value: "30"},
        {label: "Напряжение аккумулятора (В)", value: "14,4"},
    ]

    const additionalFeatures = [
        {label: "Диаметр патрона макс. (мм)", value: "10"},
        {label: "Скорость вращения I (об/мин)", value: "400"},
        {label: "Скорость вращения II (об/мин)", value: "1400"},
        {label: "Диаметр сверления (мм)", value: "15"},
        {label: "Тип двигателя", value: "щеточный"},
        {label: "Вес (кг)", value: "1,4"},
        {label: "Тип патрона", value: "быстрозажимной"},
    ]

    const featureList = [
        {
            icon: <CiCreditCard1 className="text-[#9ba4ab] text-[18px]" />,
            text: "Оплата любым удобным способом",
        },
        {
            icon: <FaListUl className="text-[#9ba4ab] text-[14px]" />,
            text: "Большой выбор товаров в каталоге",
        },
        {
            icon: <BsBoxSeam className="text-[#9ba4ab] text-[14px]" />,
            text: "Осуществляем быструю доставку",
        },
        {
            icon: <CiPercent className="text-[#9ba4ab] text-[18px]" />,
            text: "Делаем скидки на крупные покупки",
        },
    ]

    const DetailItem = ({label, value}) => (
        <div className="flex justify-between items-baseline text-black text-[15px] leading-[187%]">
            <span className="font-normal text-[13px] text-black opacity-90">
                {label}
            </span>
            <span className="flex-1 border-dotted border-b border-gray-300 mx-2"></span>
            <span className="font-normal text-[13px] leading-[122%] text-[#4d6159]">
                {value}
            </span>
        </div>
    )

    const FeatureItem = ({icon, text}) => (
        <div className="flex justify-start items-center gap-[10px]">
            {icon}
            <p className="font-medium text-[13px] leading-[127%] text-center text-[#3b3c3f] max-[310px]:text-[11px]">
                {text}
            </p>
        </div>
    )

    return (
        <section className="py-[20px] flex flex-col gap-[20px]">
            <h1 className="font-bold text-[28px] leading-[124%] text-[#2c333d] max-[1080px]:text-[22px] max-[510px]:text-[18px] max-[360px]:text-[15px]">
                {product?.title}
            </h1>

            <div className="grid grid-cols-2 gap-[20px] max-[820px]:grid-cols-1">
                {/* img box */}
                <div className="flex justify-start items-start gap-[40px]">
                    {/* mini imgs */}
                    <div className="flex flex-col gap-[10px]">
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center w-[70px] h-[70px] max-[440px]:w-[60px] max-[440px]:h-[60px] border border-[#e0e0e0] p-[5px] rounded-lg cursor-pointer">
                                <img
                                    src={product?.img}
                                    alt={product?.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* main img */}
                    <div className="flex justify-center items-center h-[400px] overflow-hidden max-[600px]:h-[80%] p-[50px]">
                        <img
                            src={product?.img}
                            alt={product?.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* info box */}
                <div className="grid grid-cols-2 gap-[30px]">
                    <div className="flex flex-col gap-[8px] max-[1265px]:hidden">
                        {productDetails.map((detail, index) => (
                            <DetailItem
                                key={index}
                                label={detail.label}
                                value={detail.value}
                            />
                        ))}

                        <div className="flex flex-col gap-[25px] border border-[#e0e0e080] p-[10px] rounded-lg mt-[10px]">
                            {featureList.map((feature, index) => (
                                <FeatureItem
                                    key={index}
                                    icon={feature.icon}
                                    text={feature.text}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="h-fit p-[20px] py-[35px] w-auto shadow-md rounded-md flex flex-col gap-[15px] max-[1265px]:col-span-2">
                        <p className="font-normal text-[12px] leading-[93%] text-[#787c80]">
                            Артикул: XJ89YHGO
                        </p>
                        <p className="font-normal text-[12px] leading-[93%] text-[#3b4048] flex justify-start items-center gap-[8px]">
                            <FaCheck className="text-green-600 text-[10px]" /> В
                            наличии
                        </p>
                        <div className="flex justify-start items-center gap-[10px]">
                            <p className="font-medium text-[#003b73]">
                                {product?.price
                                    .toLocaleString()
                                    .replace(/,/g, " ")}{" "}
                                ₽
                            </p>
                            <p className="font-normal text-[13px] line-through text-[#8f9296]">
                                {product?.oldPrice
                                    .toLocaleString()
                                    .replace(/,/g, " ")}{" "}
                                ₽
                            </p>
                            <span className="bg-[#1b9665] text-white text-[10px] p-[1px_4px] rounded-[4px]">
                                -{product?.discount}%
                            </span>
                        </div>
                        <div className="flex justify-between items-center gap-[10px]">
                            <p className="font-normal text-[15px] leading-[187%] text-[#2c333d]">
                                Количество:
                            </p>
                            <div className="bg-gray-200 rounded-full p-1 flex justify-between items-center w-28 max-[285px]:w-24">
                                <button
                                    onClick={decreaseCount}
                                    className="border-0 p-1 cursor-pointer bg-white rounded-full h-8 w-8 shadow flex justify-center items-center active:scale-95">
                                    -
                                </button>
                                <span className="mx-2 font-medium">
                                    {count}
                                </span>
                                <button
                                    onClick={increaseCount}
                                    className="border-0 p-1 cursor-pointer bg-white rounded-full h-8 w-8 shadow flex justify-center items-center active:scale-95">
                                    +
                                </button>
                            </div>
                        </div>

                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "add",
                                    product: product,
                                })
                            }
                            type="primary"
                            className="!h-[40px] !w-full">
                            Добавить в корзину
                        </Button>
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "add",
                                    product: product,
                                })
                            }
                            color="primary"
                            variant="filled"
                            className="!h-[40px] !w-full">
                            Купить в 1 клик
                        </Button>
                    </div>
                </div>

                <div className="hidden flex-col gap-[25px] border border-[#e0e0e080] p-[10px] rounded-lg mt-[10px] max-[440px]:flex">
                    {featureList.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            text={feature.text}
                        />
                    ))}
                </div>
            </div>

            <Tabs defaultActiveKey="1" items={items} className="!mt-[30px]" />

            <h1 className="font-medium leading-[130%] text-[#2c333d]">
                Характеристики товара «{product?.title}»
            </h1>

            <div className="grid grid-cols-2 gap-[100px] max-[780px]:grid-cols-1 max-[780px]:gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    {productDetails.map((detail, index) => (
                        <DetailItem
                            key={index}
                            label={detail.label}
                            value={detail.value}
                        />
                    ))}
                </div>

                <div className="flex flex-col gap-[10px]">
                    {additionalFeatures.map((feature, index) => (
                        <DetailItem
                            key={index}
                            label={feature.label}
                            value={feature.value}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
