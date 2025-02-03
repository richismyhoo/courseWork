import React from "react";
import { useNavigate } from "react-router-dom";


export const NavBar = () => {

    const navigate = useNavigate();

    const PAGES = [{
        name: "О нас",
        link: "/about"
    },
        {
            name: "WebDesign College",
            link: "/",
            isFromAuthorizable: false,
        },{
            name: "Курсы",
            link: "/courses",
            isFromAuthorizable: false,
        }, {
            name: "Задания",
            link: "/tasks",
            isFromAuthorizable: true,
        }, {
            name: "Личный кабинет",
            link: "/profile",
            isFromAuthorizable: true,
        }]

    const handleNavigate = (event) => {
        const address = PAGES.find(p => p.name === event.target.innerHTML)
        if (address.isFromAuthorizable && !localStorage.getItem("token")) {
            navigate("/login")
        } else {
            navigate(address.link)
        }
    }

    return (
        <header className="bg-white shadow-lg">
            <nav className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-4">
                    <span className="material-symbols-outlined text-3xl text-blue-600"></span>
                    <h1 className="text-2xl font-bold hover:text-blue-600 transition-colors cursor-pointer" onClick={handleNavigate}>WebDesign College</h1>
                </div>
                <div className="flex items-center space-x-8">
                    <a href="#" className="hover:text-blue-600 transition-colors" onClick={handleNavigate}>О нас</a>
                    <a href="#" className="hover:text-blue-600 transition-colors" onClick={handleNavigate}>Курсы</a>
                    <a href="#" className="hover:text-blue-600 transition-colors" onClick={handleNavigate}>Задания</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Контакты</a>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all" onClick={handleNavigate}>Личный
                        кабинет
                    </button>
                </div>
            </nav>
        </header>
    )
}