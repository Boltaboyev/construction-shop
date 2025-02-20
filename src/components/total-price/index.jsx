import {useState} from "react"
import {toast} from "react-toastify"
import {Button} from "antd"

const TotalPrice = ({total}) => {
    const [promoCode, setPromoCode] = useState("")
    const [discount, setDiscount] = useState(0)
    const [isValid, setIsValid] = useState(null)

    let totalPrice = total.reduce(
        (acc, value) => acc + value.price * value.counter,
        0
    )

    const applyPromoCode = () => {
        if (promoCode.trim().toUpperCase() === "PROMO") {
            setDiscount(1500)
            setIsValid(true)
            toast.success("Промокод успешно применен!")
        } else {
            setDiscount(0)
            setIsValid(false)
            toast.error("Неверный промокод!")
        }
    }

    return (
        <div className="flex-[2] flex flex-col gap-[20px] h-fit rounded-[6px] p-[25px] max-[400px]:p-[12px] shadow-[0_4px_19px_0_rgba(23,27,32,0.07)] bg-white sticky top-[20px]">
            <h1 className="text-[18px] font-[500]">Итого</h1>

            <div className="flex justify-between items-baseline text-black text-[15px] leading-[187%]">
                <span className="font-normal text-[14px] text-black">
                    Скидка по промокоду
                </span>
                <span className="flex-1 border-dotted border-b border-gray-300 mx-2"></span>
                <span className="font-normal text-[14px] leading-[122%] text-[#4d6159]">
                    {discount.toLocaleString("uz-UZ").replace(/,/g, " ")} ₽
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
                    {(totalPrice - discount)
                        .toLocaleString("uz-UZ")
                        .replace(/,/g, " ")}{" "}
                    ₽
                </span>
            </div>

            <div className="flex flex-col gap-[10px] w-full">
                <input
                    type="text"
                    placeholder="Промокод"
                    className={`h-[45px] rounded-lg border p-[10px] text-[14px] transition-all ${
                        isValid === null
                            ? "border-gray-300"
                            : isValid
                            ? "border-green-500"
                            : "border-red-500"
                    }`}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                />

                <Button
                    className="!h-[45px] !text-[14px]"
                    color="primary"
                    variant="filled"
                    onClick={applyPromoCode}>
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
