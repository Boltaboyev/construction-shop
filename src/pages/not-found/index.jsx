import React from "react"
import {useNavigate} from "react-router-dom"

// img
import img from "../../shared/assets/img/404.png"
import {Button} from "antd"

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <section className="py-[50px] w-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 text-center gap-4">
            <img
                src={img}
                alt="404"
                className="w-2/6 max-w-md md:max-w-lg lg:max-w-xl "
            />

            <p className="text-sm md:text-base text-[#535557]">
                Запрашиваемая страница не найдена. Возможно, она была удалена,
                либо её адрес <br /> был изменён. Попробуйте воспользоваться
                поиском.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-sm pt-[20px]">
                <Button
                    onClick={() => navigate(-1)}
                    className="!h-[43px] !w-full sm:!w-[170px]"
                    color="primary"
                    variant="filled">
                    Вернуться назад
                </Button>
                <Button
                    onClick={() => navigate("/")}
                    className="!h-[43px] !w-full sm:!w-[170px]"
                    type="primary">
                    На главную
                </Button>
            </div>
        </section>
    )
}

export default NotFoundPage
