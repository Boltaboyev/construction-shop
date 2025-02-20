import React from "react"

// icons
import {CiCreditCard1, CiPercent} from "react-icons/ci"
import {BsBoxSeam} from "react-icons/bs"
import {FaListUl} from "react-icons/fa"


const ShowcaseInfo = () => {
    return (
        <section className="py-[40px]">
            <div className="grid grid-cols-4 gap-[10px] max-[840px]:grid-cols-2 max-[840px]:gap-[15px] max-[350px]:grid-cols-1">
                <div className="flex justify-center items-center gap-[10px] max-[1215px]:flex-col max-[400px]:border border-[#117de355] max-[400px]:p-[10px] max-[400px]:rounded-lg">
                    <CiCreditCard1 className="text-[#117fe3] text-[22px]" />
                    <p className="font-medium text-[14px] leading-[127%] text-center text-[#3b3c3f] max-[290px]:text-[13px]">
                        Оплата любым удобным способом
                    </p>
                </div>

                <div className="flex justify-center items-center gap-[10px] max-[1215px]:flex-col max-[400px]:border border-[#117de355] max-[400px]:p-[10px] max-[400px]:rounded-lg">
                    <FaListUl className="text-[#117fe3] text-[17px]" />
                    <p className="font-medium text-[14px] leading-[127%] text-center text-[#3b3c3f] max-[290px]:text-[13px]">
                        Большой выбор товаров в каталоге
                    </p>
                </div>

                <div className="flex justify-center items-center gap-[10px] max-[1215px]:flex-col max-[400px]:border border-[#117de355] max-[400px]:p-[10px] max-[400px]:rounded-lg">
                    <BsBoxSeam className="text-[#117fe3] text-[17px]" />
                    <p className="font-medium text-[14px] leading-[127%] text-center text-[#3b3c3f] max-[290px]:text-[13px]">
                        Осуществляем быструю доставку
                    </p>
                </div>

                <div className="flex justify-center items-center gap-[10px] max-[1215px]:flex-col max-[400px]:border border-[#117de355] max-[400px]:p-[10px] max-[400px]:rounded-lg">
                    <CiPercent className="text-[#117fe3] text-[20px]" />
                    <p className="font-medium text-[14px] leading-[127%] text-center text-[#3b3c3f] max-[290px]:text-[13px]">
                        Делаем скидки на крупные покупки
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseInfo
