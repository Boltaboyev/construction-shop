import React from "react"

// antd
import {Button, Collapse} from "antd"

// img
import logo from "../../shared/assets/img/logo.png"
import payment1 from "../../shared/assets/img/payment/1.png"
import payment2 from "../../shared/assets/img/payment/2.png"
import payment3 from "../../shared/assets/img/payment/3.png"
import payment4 from "../../shared/assets/img/payment/4.png"
import payment5 from "../../shared/assets/img/payment/5.png"
import payment6 from "../../shared/assets/img/payment/6.png"
import footerImg from "../../shared/assets/img/footer.png"

// icons
import {IoSendSharp} from "react-icons/io5"

const Footer = () => {
    return (
        <footer className="bg-[#f3f4f5] py-[40px]">
            <div className="container2 flex flex-col gap-[20px]">
                <div className="flex justify-between items-center gap-[10px] border-b pb-8 border-[#dce1e7] max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:gap-[15px]">
                    <img src={logo} alt="logo" className="w-[150px]" />

                    <p className="font-normal text-[13px] leading-[146%] text-[#35383a] max-[990px]:hidden">
                        ООО «Стройоптторг»{" "}
                    </p>

                    <div className="flex flex-col gap-0 max-[990px]:hidden">
                        <p className="font-normal text-[13px] leading-[146%] text-[#35383a]">
                            ИНН: 0901051787
                        </p>
                        <p className="font-normal text-[13px] leading-[146%] text-[#35383a]">
                            КПП 090101001
                        </p>
                    </div>

                    <div className="flex flex-col gap-0">
                        <p className="font-normal text-[13px] leading-[146%] text-[#35383a]">
                            Email:
                        </p>
                        <a
                            href="mailto:info@stroiopttorg.ru"
                            className="font-medium text-[14px] underline decoration-[#117fe3] decoration-0 text-[#117fe3] max-[300px]:text-[12px]">
                            info@stroiopttorg.ru
                        </a>
                    </div>

                    <div className="flex flex-col gap-0">
                        <a
                            href="tel:8 800 444 00 65 "
                            className="font-medium text-black max-[380px]:text-[14px]">
                            8 800 444 00 65
                        </a>
                        <a
                            href="mailto:info@stroiopttorg.ru"
                            className="font-normal text-[13px] text-[#4e5760] ">
                            <span className="max-[380px]:hidden">
                                Ежедневно,
                            </span>{" "}
                            с 8:00 до 18:00
                        </a>
                    </div>

                    <Button color="danger" variant="outlined">
                        Заказать звонок
                    </Button>
                </div>

                <div className="grid grid-cols-5 gap-[20px] max-[1150px]:grid-cols-3 max-[690px]:grid-cols-2 border-b pb-8 border-[#dce1e7]">
                    <div className="flex flex-col gap-[13px]">
                        <h1 className="font-medium leading-[144%] text-[#333436]">
                            Информация
                        </h1>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            О компании
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Оплата
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Доставка
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Возврат
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Отзывы
                        </p>
                    </div>
                    <div className="flex flex-col gap-[13px]">
                        <h1 className="font-medium leading-[144%] text-[#333436]">
                            <br />
                        </h1>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Вопрос-ответ
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Новости
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Контакты
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Регистрация
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Все акции
                        </p>
                    </div>
                    <div className="flex flex-col gap-[13px] max-[680px]:hidden">
                        <h1 className="font-medium leading-[144%] text-[#333436]">
                            Каталог
                        </h1>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Общестроительные материалы
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Все для сауны и бани
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Инструмент
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Отделочные материалы
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Товары для дома, сада и огорода
                        </p>
                    </div>
                    <div className="flex flex-col gap-[13px] max-[680px]:hidden">
                        <h1 className="font-medium leading-[144%] text-[#333436]">
                            <br />
                        </h1>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Электротовары
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Сантехника
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Столярные изделия
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Спецодежда и средства индивидуальной пожарной защиты
                        </p>
                    </div>
                    <div className="flex flex-col gap-[13px] max-[680px]:hidden">
                        <h1 className="font-medium leading-[144%] text-[#333436]">
                            <br />
                        </h1>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Водо-газоснабжение, отопление, вентиляция
                        </p>

                        <p className="font-normal text-[14px] text-[#404244] hover:text-[#117fe3] cursor-pointer ownTransition">
                            Метизные, такелажные и скобяные изделия
                        </p>
                    </div>
                </div>

                <Collapse
                    className="hidden max-[690px]:block"
                    items={[
                        {
                            key: "1",
                            label: "Каталог",
                            children: (
                                <div className="flex flex-col gap-[10px]">
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Общестроительные материалы
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Все для сауны и бани
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Инструмент
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Отделочные материалы
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Товары для дома, сада и огорода
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Электротовары
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Сантехника
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Столярные изделия
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Спецодежда и средства индивидуальной
                                        пожарной защиты
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Водо-газоснабжение, отопление,
                                        вентиляция
                                    </p>
                                    <p className="font-normal text-[16px] text-[#404244] hover:text-[#117fe3] max-[310px]:!text-[12px]">
                                        Метизные, такелажные и скобяные изделия
                                    </p>
                                </div>
                            ),
                        },
                    ]}
                />

                <div className="flex justify-between items-center gap-[10px] max-[1285px]:flex-col max-[1285px]:gap-[15px] border-b pb-8 border-[#dce1e7]">
                    <p className="font-normal text-[14px] leading-[129%] text-[#979da3] max-[1285px]:hidden">
                        Мы принимаем к оплате:
                    </p>

                    <div className="flex justify-center items-center  gap-[15px] flex-wrap">
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment1}
                            alt="payment1"
                        />
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment2}
                            alt="payment2"
                        />
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment3}
                            alt="payment3"
                        />
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment4}
                            alt="payment4"
                        />
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment5}
                            alt="payment5"
                        />
                        <img
                            className="opacity-60 cursor-pointer hover:opacity-100 ownTransition"
                            src={payment6}
                            alt="payment6"
                        />
                    </div>

                    <p className="font-normal text-[14px] leading-[129%] text-[#979da3] max-[430px]:order-3 max-[430px]:text-[13px]">
                        Подпишитесь на рассылку{" "}
                        <br className="max-[1285px]:hidden" /> и будьте в курсе!
                    </p>

                    <div className="bg-white p-[10px] flex justify-between items-center rounded-lg max-[320px]:w-full">
                        <input
                            type="text"
                            placeholder="Ваш email"
                            className="px-[10px] max-[320px]:px-[0]"
                        />
                        <IoSendSharp className="text-[#3f454a] cursor-pointer" />
                    </div>
                </div>

                <div className="flex justify-between items-center gap-[10px] max-[870px]:flex-col max-[870px]:gap-[15px]">
                    <p className="font-normal text-[12px] leading-[186%] text-[#81868b] max-[870px]:text-center">
                        © 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
                        40702810360000102415{" "}
                        <br className="max-[530px]:hidden" /> в Ставропольское
                        отделение №5230{" "}
                        <span className="max-[330px]:hidden"> ПАО Сбербанк, БИК 040702615</span>
                    </p>

                    <img
                        src={footerImg}
                        alt="img"
                        className="cursor-pointer max-[870px]:order-3"
                    />

                    <a
                        className="font-normal text-[11px] leading-[186%] border-b text-[#444648]"
                        href="#!">
                        Политика конфиденциальности
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
