import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

import my_axios from "../../hook/useAxios"

// antd
import {Button, Checkbox, Form, Input, message} from "antd"

// icons
import {TbUserPlus} from "react-icons/tb"
import {MdChevronRight} from "react-icons/md"

// react-hook-form
import {useForm, Controller} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"

const schema = z.object({
    email: z.string().email("Введите корректный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
    remember: z.boolean().optional(),
})

const LoginPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const {
        control,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {remember: false},
    })

    const onSubmit = async (formData) => {
        setLoading(true)
        try {
            const {data} = await my_axios.get("/users", {
                params: {
                    email: formData.email,
                    password: formData.password,
                },
            })

            if (data.length > 0) {
                toast.success("Вы успешно авторизованы")
                localStorage.setItem("user", JSON.stringify(data[0]))
                reset()
                navigate("/dashboard")
            }
        } catch (error) {
            toast.error("Неверный логин или пароль")
            message.error(
                error.response?.data?.message || "Ошибка авторизации!"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="pb-[50px]">
            <h1 className="section-title">Авторизация</h1>
            <div className="grid grid-cols-2 w-[85%] m-auto border border-[#edf0f2] p-[35px] rounded-lg max-[900px]:grid-cols-1 max-[530px]:border-0 max-[530px]:p-0">
                <Form
                    layout="vertical"
                    autoComplete="on"
                    className="flex flex-col justify-center !pr-[30px] max-[900px]:!p-0"
                    onFinish={handleSubmit(onSubmit)}>
                    <Form.Item
                        label="Email или логин"
                        validateStatus={errors.email ? "error" : ""}
                        help={errors.email?.message}>
                        <Controller
                            name="email"
                            control={control}
                            render={({field}) => (
                                <Input
                                    {...field}
                                    placeholder="Введите email"
                                    className="!py-[10px]"
                                />
                            )}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        validateStatus={errors.password ? "error" : ""}
                        help={errors.password?.message}>
                        <Controller
                            name="password"
                            control={control}
                            render={({field}) => (
                                <Input.Password
                                    {...field}
                                    placeholder="Введите пароль"
                                    className="!py-[10px]"
                                />
                            )}
                        />
                    </Form.Item>

                    <Form.Item className="self-center">
                        <Controller
                            name="remember"
                            control={control}
                            render={({field}) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }>
                                    Запомнить меня
                                </Checkbox>
                            )}
                        />
                    </Form.Item>

                    <Button
                        className="!h-[43px] !mb-3"
                        type="primary"
                        htmlType="submit"
                        loading={loading}>
                        Авторизоваться
                    </Button>

                    <Button className="!h-[43px] !mb-3">
                        Восстановить пароль
                    </Button>
                </Form>

                <div className="flex justify-center items-start p-[20px] border-l border-[#edf0f2] max-[900px]:border-0 max-[900px]:p-0">
                    <div className="flex justify-center items-start gap-[15px]">
                        <TbUserPlus className="text-[#e52b0e] text-[65px] max-[430px]:hidden" />

                        <div className="flex flex-col gap-[8px] max-[900px]:gap-[10px]">
                            <h1 className="font-medium text-[24px] text-[#2c333d] flex items-center gap-[10px] max-[310px]:text-[20px]">
                                <TbUserPlus className="text-[#e52b0e] text-[25px] hidden max-[430px]:block" />
                                Еще нет аккаунта?
                            </h1>

                            <p className="text-[14px] leading-[175%] text-[#515151]">
                                <span className="font-bold">
                                    Регистрация на сайте
                                </span>{" "}
                                позволяет получить доступ к статусу и истории
                                вашего заказа.
                            </p>

                            <p className="text-[14px] leading-[175%] text-[#515151]">
                                Мы запрашиваем у вас только информацию,
                                необходимую для того, чтобы сделать процесс
                                покупки более быстрым и легким.
                            </p>

                            <Button
                                type="primary"
                                className="!flex items-center gap-[5px] self-start !p-[25px_30px] uppercase !text-[12px] !bg-[#011120] relative z-10 max-[575px]:!p-[20px_25px] max-[530px]:w-full">
                                Зарегистрироваться
                                <MdChevronRight className="text-[18px]" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
