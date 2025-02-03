import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { loginRequest } from './api'
import { notify } from '../../components/Notify/notify'

export const Login = () => {

    const navigate = useNavigate();

    const handleNavigateToRegistration = () => {
        navigate("/registration");
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/profile")
        }
    }, [])

    const validatePassword = () => {
        if (password?.length < 8) {
                notify("error", 'Пароль не может быть короче 8 символов')
            return false
        } else {
            return true
        }
    }

    const validateEmail = () => {
        if (email?.length < 8 || !email?.includes("@")) {
                notify("error", 'Почта должна быть в корректном формате и не меньше 8 символов')
            return false
        } else {
            return true
        }
    }

    const handleLogin = () => {
        const valPass = validatePassword()
        const valEmail = validateEmail()

        if (valPass && valEmail) {
            console.log("doing fetch")
            const fetchData = async () => {
                try {
                    const token = await loginRequest(email, password)
                    if (token === "Неверные данные") {
                        const toast = notify("error",'Неверные данные')
                    } else {
                        localStorage.setItem("token", token.token)
                        navigate("/profile")
                    }
                } catch (e) {
                    console.error(e)
                    const toast = notify("error",'Произошла неизвестная ошибка')
                }
            }
            fetchData()
        }
    }

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const handleInput = (event) => {
        if (event.target.type === "password") {
            setPassword(event.target.value)
        } else {
            setEmail(event.target.value)
        }
    }

    return (
        <div id="webcrumbs">
            <ToastContainer />
            <div className="w-[1200px] bg-gray-50">
                <header className="py-8 px-6">
                    <h1 className="text-4xl font-bold mb-4">Логин</h1>
                    <p className="text-lg text-gray-600">Войдите в свой аккаунт</p>
                </header>

                <div className="max-w-md mx-auto pb-12">
                    <form className="bg-white rounded-xl shadow-lg p-8">
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Почта</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-2">Пароль</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Минимум 8 символов"
                                value={password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform flex justify-center hover:scale-[1.02] transition-all duration-300" onClick={handleLogin}>
                            Войти
                        </div>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Нет аккаунта?
                            <a className="text-blue-500 hover:text-blue-700 ml-1 transition-colors duration-300 cursor-pointer" onClick={handleNavigateToRegistration} >
                                Зарегистрироваться
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

