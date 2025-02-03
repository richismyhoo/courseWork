import React from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";

export const Main = () => {

    const navigate = useNavigate();

    const handleGoToAbout = () => {
        navigate("/about");
    }

    return (
        <div id="webcrumbs">
            <div className="w-[1200px] bg-gray-50">
                <NavBar/>
                <main className="mt-8 px-8">
                    <section className="relative h-[500px] rounded-2xl overflow-hidden mb-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
                        <div className="relative z-10 flex items-center h-full px-12">
                            <div className="w-1/2">
                                <h2 className="text-5xl font-bold text-white mb-6">Стань профессионалом в веб-дизайне</h2>
                                <p className="text-xl text-white mb-8">Получите востребованную профессию и начните карьеру в digital-индустрии</p>
                                <button className="bg-white px-8 py-3 rounded-full text-blue-600 font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all">Узнать больше</button>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-blue-600 mb-4"></span>
                            <h3 className="text-xl font-bold mb-4">Современные технологии</h3>
                            <p>Изучайте актуальные инструменты и технологии веб-дизайна</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-blue-600 mb-4"></span>
                            <h3 className="text-xl font-bold mb-4">Опытные преподаватели</h3>
                            <p>Обучайтесь у практикующих специалистов индустрии</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <span className="material-symbols-outlined text-4xl text-blue-600 mb-4"></span>
                            <h3 className="text-xl font-bold mb-4">Помощь в трудоустройстве</h3>
                            <p>Получите поддержку в поиске работы после обучения</p>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-12 mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Наши программы обучения</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                                <h3 className="text-xl font-bold mb-4">UI/UX Дизайн</h3>
                                <p className="mb-4">Научитесь создавать удобные и красивые интерфейсы</p>
                                <button className="text-blue-600 font-semibold hover:text-blue-700">Подробнее →</button>
                            </div>
                            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                                <h3 className="text-xl font-bold mb-4">Web-разработка</h3>
                                <p className="mb-4">Освойте frontend и backend разработку</p>
                                <button className="text-blue-600 font-semibold hover:text-blue-700">Подробнее →</button>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-white py-8 px-8">
                    <div className="flex justify-between items-center">
                        <p>© 2024 WebCollegeItDesign. Все права защищены</p>
                        <div className="flex space-x-4">
                            <i className="fa-brands fa-facebook text-xl hover:text-blue-600 transition-colors" />
                            <i className="fa-brands fa-instagram text-xl hover:text-blue-600 transition-colors" />
                            <i className="fa-brands fa-telegram text-xl hover:text-blue-600 transition-colors" />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

