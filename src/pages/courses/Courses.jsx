import React from "react";
import { NavBar } from "../../components/NavBar/NavBar"

export const Courses = () => {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] bg-gray-50">
                <NavBar/>
                <div className="grid grid-cols-3 gap-6 px-6 pb-12 mt-16">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-blue-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">&lt;&gt;</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Frontend</h3>
                            <p className="text-gray-600 mb-4">Научитесь создавать современные веб-приложения</p>
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-purple-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">✎</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">UX/UI</h3>
                            <p className="text-gray-600 mb-4">Создавайте удобные и красивые интерфейсы</p>
                            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-pink-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">🖌</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Веб-Дизайн</h3>
                            <p className="text-gray-600 mb-4">Освойте современный веб-дизайн</p>
                            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-green-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">𓂃🖊</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Иллюстрирование</h3>
                            <p className="text-gray-600 mb-4">Создавайте уникальные иллюстрации</p>
                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-orange-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">[◉°]</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Motion-Design</h3>
                            <p className="text-gray-600 mb-4">Создавайте впечатляющую анимацию</p>
                            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 bg-teal-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-white">✎ ⋆⑅˚₊</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Анимация</h3>
                            <p className="text-gray-600 mb-4">Оживляйте персонажей и создавайте истории</p>
                            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-300">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

