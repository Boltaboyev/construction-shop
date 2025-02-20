import {Button} from "antd"

const TotalPrice = () => {
    return (
        <div className="flex-[2] flex flex-col gap-[20px] h-fit rounded-[6px] p-[25px] max-[400px]:p-[12px] shadow-[0_4px_19px_0_rgba(23,27,32,0.07)] bg-white sticky top-[20px]">
            <h1 className="text-[18px] font-[500]">Итого</h1>

            <div className="flex justify-between items-baseline text-black text-[15px] leading-[187%]">
                <span className="font-normal text-[14px] text-black">
                    Скидка по промокоду
                </span>
                <span className="flex-1 border-dotted border-b border-gray-300 mx-2"></span>
                <span className="font-normal text-[14px] leading-[122%] text-[#4d6159]">
                    0 ₽
                </span>
            </div>

            <div className="flex justify-between items-baseline text-black text-[15px] leading-[187%]">
                <span className="font-normal text-[14px] text-black">
                    Скидка от суммы заказа
                </span>
                <span className="flex-1 border-dotted border-b border-gray-300 mx-2"></span>
                <span className="font-normal text-[14px] leading-[122%] text-[#4d6159]">
                    0 ₽
                </span>
            </div>

            <div className="flex justify-between items-baseline text-black text-[15px] leading-[187%]">
                <span className="font-medium text-[14px] text-black">
                    Сумма
                </span>
                <span className="flex-1 border-dotted border-b border-gray-300 mx-2"></span>
                <span className="font-medium text-[14px] leading-[122%] text-[#003b73]">
                    36 829 ₽
                </span>
            </div>

            <div className="flex flex-col gap-[10px] w-full">
                <input type="text" placeholder="Промокод"  className="h-[45px] rounded-lg border border-gray-100 p-[10px] text-[14px]"/>

                <Button
                    className="!h-[45px] !text-[14px]"
                    color="primary"
                    variant="filled">
                    Применить промокод
                </Button>
                <Button
                    className="!h-[45px] !text-[11px] uppercase"
                    type="primary">
                    Перейти к оформлению
                </Button>
            </div>
        </div>
    )
}

export default TotalPrice
