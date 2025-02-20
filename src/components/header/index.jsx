import React, {useContext, useState} from "react"
import {Link, NavLink, useNavigate} from "react-router-dom"

import {ShopContext} from "../../context/shopContext"

// antd components
import {Button} from "antd"

// img
import logo from "../../shared/assets/img/logo.png"

// icons
import {TbMenu} from "react-icons/tb"
import {FiSearch} from "react-icons/fi"
import {GoGift} from "react-icons/go"
import {TbUserSquareRounded} from "react-icons/tb"
import {HiMenuAlt2} from "react-icons/hi"
import {IoMdHeartEmpty} from "react-icons/io"
import {FiMenu} from "react-icons/fi"
import {MdClose} from "react-icons/md"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const {state} = useContext(ShopContext)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const navigate = useNavigate()

    return (
        <header>
            {/* top navbar */}
            <nav className="py-[7px] bg-white border-b border-[#ebeef0]">
                <nav className="container2 flex justify-between items-center gap-[10px]">
                    <FiMenu
                        onClick={toggleMenu}
                        className="text-[20px] hidden max-[1050px]:block"
                    />
                    <ul
                        className={` flex justify-center items-center gap-[18px] font-normal text-[12px] text-[#6c6f71] max-[1050px]:fixed max-[1050px]:h-screen max-[1050px]:bg-white max-[1050px]:w-[400px] max-[430px]:w-[90%] max-[1050px]:top-0 ${
                            menuOpen
                                ? "max-[1050px]:left-0"
                                : "max-[1050px]:left-[-100%]"
                        }  ownTransition transition ease-out max-[1050px]:flex-col max-[1050px]:items-start max-[1050px]:justify-center max-[1050px]:p-[70px_20px] max-[1050px]:text-[14px] max-[1050px]:z-[999]`}>
                        <h1 className="absolute top-[20px] hidden max-[1050px]:block font-bold">
                            Меню
                        </h1>
                        <MdClose
                            onClick={toggleMenu}
                            className="absolute top-[20px] right-[20px] text-[20px] hidden max-[1050px]:block"
                        />

                        <nav className=" gap-[10px] justify-start items-center cursor-pointer hidden max-[1050px]:flex border-b border-gray-200 w-full pb-[8px]">
                            <GoGift className="text-[22px]" />
                            <p className="font-normal text-[14px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none">
                                Все акции
                            </p>
                        </nav>

                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            О компании
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Оплата
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Доставка
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Возврат
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Отзывы
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Вопрос-ответ
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Новости
                        </li>
                        <li className="cursor-pointer hover:text-[#186fd4] ownTransition max-[1050px]:border-b max-[1050px]:border-gray-200 max-[1050px]:w-full max-[1050px]:pb-[6px]">
                            Контакты
                        </li>

                        <p className="font-normal text-[14px] text-[#6b7076] hidden max-[1050px]:block">
                            Ежедневно, с 8:00 до 18:00
                        </p>
                    </ul>

                    <nav className="flex justify-center items-center gap-[10px]">
                        <p className="font-normal text-[11px] text-[#4e5760] max-[1050px]:hidden">
                            Ежедневно, с 8:00 до 18:00
                        </p>

                        <a
                            href="tel:+8 800 444 00 65"
                            className="font-medium text-[13px] text-black">
                            8 800 444 00 65
                        </a>

                        <Button
                            color="primary"
                            variant="filled"
                            className=" !font-bold !text-[10px] !uppercase !text-[#2a5e8d] !p-[6px_10px] !h-fit">
                            Заказать звонок
                        </Button>
                    </nav>
                </nav>
            </nav>

            {/* bottom navbar */}
            <nav className="py-[20px] bg-white max-[900px]:py-[13px]">
                <nav className="container2 flex justify-between items-center gap-[10px]">
                    <Link to={"/"}>
                        <img
                            src={logo}
                            alt="logo"
                            className="w-[170px] max-[370px]:w-[130px]"
                        />
                    </Link>

                    <Button
                        onClick={() => navigate("/product")}
                        type="primary"
                        className="flex justify-center items-center gap-[10px] !h-[42px] !px-[20px] !bg-[#186fd4] max-[900px]:!hidden">
                        <TbMenu className="text-[17px]" />
                        Каталог
                    </Button>

                    {/* search form */}
                    <form className="flex justify-between items-center h-[42px] p-[2px] bg-[#186fd4] overflow-hidden rounded-[6px] w-[570px] max-[1315px]:w-[500px] max-[1235px]:w-[400px] max-[900px]:!hidden">
                        <input
                            className=" text-[12px] px-[10px] h-full w-full bg-white rounded-[4px] "
                            type="text"
                            placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                        />

                        <button className="text-white h-full px-[14px]">
                            <FiSearch />
                        </button>
                    </form>

                    <nav className="flex justify-center items-center gap-[22px] max-[315px]:gap-[14px]">
                        <nav className="flex flex-col gap-[10px] justify-center items-center cursor-pointer hover:text-[#186fd4] group ownTransition max-[1050px]:hidden">
                            <GoGift className="text-[22px]" />
                            <p className="font-normal text-[12px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none max-[1130px]:hidden">
                                Все акции
                            </p>
                        </nav>

                        <NavLink
                            to={"/login"}
                            className="flex flex-col gap-[10px] justify-center items-center cursor-pointer hover:text-[#186fd4] group ownTransition">
                            <TbUserSquareRounded className="text-[22px]" />
                            <p className="font-normal text-[12px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none max-[1130px]:hidden">
                                Войти
                            </p>
                        </NavLink>

                        <nav className="flex flex-col gap-[10px] justify-center items-center cursor-pointer hover:text-[#186fd4] group ownTransition">
                            <HiMenuAlt2 className="text-[22px] rotate-[-90deg]" />
                            <p className="font-normal text-[12px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none max-[1130px]:hidden">
                                Сравнение
                            </p>
                        </nav>

                        <NavLink
                            to={"/like"}
                            className="relative flex flex-col gap-[10px] justify-center items-center cursor-pointer hover:text-[#186fd4] group ownTransition">
                            <IoMdHeartEmpty className="text-[25px]" />
                            <p className="font-normal text-[12px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none max-[1130px]:hidden">
                                Избранное
                            </p>

                            {state.like.length ? (
                                <div className="w-4 h-4 !text-white flex justify-center items-center absolute p-[2px] text-[10px] rounded-full bg-red-500  -top-1 right-[13px]">
                                    {state.like.length}
                                </div>
                            ) : (
                                ""
                            )}
                        </NavLink>

                        <NavLink
                            to={"/shop"}
                            className="relative flex flex-col gap-[10px] justify-center items-center cursor-pointer hover:text-[#186fd4] group ownTransition">
                            <svg
                                width="25"
                                height="23"
                                viewBox="0 0 29 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:stroke-[#186fd4] stroke-[#16191E] fill-none">
                                <path d="M0.5 1.5H4.06175C4.9082 1.5 5.66299 2.03286 5.94635 2.83047L6.76555 5.13636M6.76555 5.13636L10.5402 15.7612C10.8891 16.7433 11.9337 17.2928 12.9407 17.024L26.016 13.5326C26.8912 13.2989 27.5 12.5062 27.5 11.6003V7.13636C27.5 6.03179 26.6046 5.13636 25.5 5.13636H6.76555Z" />
                                <path d="M6.36667 20.5C6.36667 21.6782 7.32179 22.6333 8.5 22.6333C9.67821 22.6333 10.6333 21.6782 10.6333 20.5C10.6333 19.3218 9.67821 18.3667 8.5 18.3667C7.32179 18.3667 6.36667 19.3218 6.36667 20.5ZM7.5 20.9H8.5V20.1H7.5V20.9Z" />
                                <path d="M19.3667 20.5C19.3667 21.6782 20.3218 22.6333 21.5 22.6333C22.6782 22.6333 23.6333 21.6782 23.6333 20.5C23.6333 19.3218 22.6782 18.3667 21.5 18.3667C20.3218 18.3667 19.3667 19.3218 19.3667 20.5ZM20.5 20.9H21.5V20.1H20.5V20.9Z" />
                            </svg>
                            <p className="font-normal text-[12px] leading-[57%] text-center text-[#6b7076] group-hover:text-[#186fd4] ownTransition select-none max-[1130px]:hidden">
                                Корзина
                            </p>

                            {state.shop.length ? (
                                <div className="w-4 h-4 flex justify-center items-center absolute p-[2px] text-[10px] rounded-full bg-red-500 !text-white -top-1 right-[5px]">
                                    {state.shop.length}
                                </div>
                            ) : (
                                ""
                            )}
                        </NavLink>
                    </nav>
                </nav>
            </nav>

            <nav className="bg-white py-[7px]">
                <nav className="container2 flex justify-between items-center gap-[10px]">
                    <Button
                        onClick={() => navigate("/product")}
                        type="primary"
                        className="!hidden justify-center items-center gap-[10px] !h-[35px] !px-[16px] !bg-[#186fd4] max-[900px]:!flex">
                        <TbMenu className="text-[17px]" />
                        Каталог
                    </Button>
                    {/* search form */}
                    <form className="hidden justify-between items-center h-[35px] p-[2px] bg-[#186fd4] overflow-hidden rounded-[6px] w-[570px] max-[1315px]:w-[500px] max-[1235px]:w-[400px] max-[900px]:!flex max-[550px]:!hidden">
                        <input
                            className=" text-[12px] px-[10px] h-full w-full bg-white rounded-[4px] "
                            type="text"
                            placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                        />

                        <button className="text-white h-full px-[14px]">
                            <FiSearch />
                        </button>
                    </form>

                    <form className="hidden justify-between items-center h-[35px] p-[2px] bg-[#186fd4] overflow-hidden rounded-[6px] w-[570px] max-[1315px]:w-[500px] max-[1235px]:w-[400px] max-[550px]:!flex">
                        <input
                            className=" text-[12px] px-[10px] h-full w-full bg-white rounded-[4px] "
                            type="text"
                            placeholder="Поиск..."
                        />

                        <button className="text-white h-full px-[14px]">
                            <FiSearch />
                        </button>
                    </form>
                </nav>
            </nav>

            {menuOpen ? (
                <div
                    onClick={toggleMenu}
                    className="h-screen w-full bg-[#00000063] backdrop-blur-[4px] z-[888] fixed top-0 left-0"></div>
            ) : (
                ""
            )}
        </header>
    )
}

export default Header
