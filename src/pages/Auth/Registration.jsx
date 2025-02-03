import { useState, useEffect }from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {registrationRequest, verifyRequest} from "./api";
import { notify } from '../../components/Notify/notify'

export const Registration = () => {

    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate("/login");
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/lc")
        }
    }, [])

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleInput = (event) => {
        if (event.target.id === "email") {
            setEmail(event.target.value);
        }
        if (event.target.id === "password") {
            setPassword(event.target.value);
        }
        if (event.target.id === "name") {
            setName(event.target.value);
        }
    }

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

    const validateName = () => {
        if (name?.length < 8) {
            notify("error", 'Имя пользователя не может быть короче 8 символов')
            return false
        } else {
            return true
        }

    }

    const handleRegistration = () => {

        const STATUSES = [{
            name: "password",
            status: validatePassword(),
        }, {
            name: "email",
            status: validateEmail()
        }, {
            name: "name",
            status: validateName()
        }]

        if (!STATUSES.find(item => item.status === false)) {
            const fetchData = async () => {
                try {
                    const response = await registrationRequest(name, email, password)
                    handleResponse(response)
                } catch (e) {
                    notify("error", 'Произошла неизвестная ошибка')
                }
            }
            fetchData()
        }
    }

    const [userId, setUserId] = useState();

    const handleResponse = (response) => {
        console.log(response)
        if (response.status === 500) {
            notify("error", 'Указаная почта не существует')
        } else if (response.userId) {
            notify("success", response.message)
            setUserId(response.userId);

            handleVerification()

        } else if (response.message === 'Пользователь с таким email уже существует') {
            notify("error", 'Данная почта уже занята')
        }

    }

    const [showModal, setShowModal] = useState(false)
    const [code, setCode] = useState();

    const handleCode = (event) => {
        setCode(event.target.value);
    }

    const handleVerification = () => {
        setShowModal(true)
    }

    const handleSendCode = () => {
        console.log(userId)
        const fetchData = async () => {
            try {
                const response = await verifyRequest(userId, code)
                if (response.message === "Неверный код или срок действия кода истек") {
                    notify("error", response.message)
                } else {
                    notify("success", response.message)
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500)
                }

            } catch (e) {
                notify("error", 'Произошла неизвестная ошибка')
            }
        }
        fetchData()
    }

    return (
        <div id="webcrumbs">
            <ToastContainer />
            <div className="modal-overlay" style={!showModal? {display: "none"} : {position: "absolute", zIndex: "100", top: "0", right: "0", display: "flex", width: "100vw", height: "100vh", alignItems: "center",justifyContent: "center", background: "rgba(255, 255, 255, 0.2", backdropFilter: "blur(2vw)"}} >
                <div className="w-[30vw] h-[30vw] bg-gray-700 rounded-2xl">
                    <div className="mt-44 w-[20vw] ml-28">
                        <label className="block text-[1.5vw] font-bold text-white mb-2">Введите код из сообщения на
                            почте</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Код"
                            value={code}
                            onChange={handleCode}
                            id="code-input"
                        />
                    </div>
                    <div
                        className="w-[16vw] ml-[8vw] mt-[2vw] bg-blue-500 text-white py-3 rounded-lg flex justify-center hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300"
                        onClick={handleSendCode}>
                        Подтвердить
                    </div>
                </div>
            </div>
            <div className="w-[1200px] bg-gray-50">
                <header className="py-8 px-6">
                    <h1 className="text-4xl font-bold mb-4">Регистрация</h1>
                    <p className="text-lg text-gray-600">Создайте свой аккаунт</p>
                </header>

                <div className="max-w-md mx-auto pb-12">
                    <form className="bg-white rounded-xl shadow-lg p-8">
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Имя</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="Введите ваше имя"
                                value={name}
                                onChange={handleInput}
                                id="name"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Почта</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={handleInput}
                                id="email"
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
                                id="password"
                            />
                        </div>

                        <div className="w-full bg-blue-500 text-white py-3 rounded-lg flex justify-center hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300" onClick={handleRegistration}>
                            Зарегистрироваться
                        </div>

                        <p className="mt-6 text-center text-sm text-gray-600">
                            Уже есть аккаунт?
                            <a className="text-blue-500 hover:text-blue-700 ml-1 transition-colors duration-300 cursor-pointer" onClick={handleNavigateToLogin}>
                                Войти
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

