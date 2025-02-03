import React from "react";
import { useNavigate } from "react-router-dom";
import {NavBar} from "../../components/NavBar/NavBar";

export const About = () => {

    const navigate = useNavigate();

    const handleGoToMain = () => {
        navigate("/");
    }

    return (
        <div id="webcrumbs">
            <div className="w-[1200px] bg-gray-50">
                <NavBar />
                <main className="mt-8 px-8">
                    <section className="relative h-[400px] rounded-2xl overflow-hidden mb-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
                        <div className="relative z-10 flex items-center h-full px-12">
                            <div className="w-2/3">
                                <h2 className="text-4xl font-bold text-white mb-6">История нашего колледжа</h2>
                                <p className="text-xl text-white leading-relaxed">Основанный в 2015 году, WebDesign College стал ведущим образовательным учреждением в сфере веб-дизайна и разработки. Мы гордимся тем, что подготовили более 1000 специалистов, успешно работающих в крупнейших IT-компаниях.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-12 mb-16">
                        <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-center mb-2">Александр Петров</h3>
                                <p className="text-center text-gray-600 mb-4">Директор колледжа</p>
                                <p className="text-center">15+ лет опыта в IT-образовании</p>
                            </div>
                            <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-center mb-2">Елена Соколова</h3>
                                <p className="text-center text-gray-600 mb-4">Руководитель программы UI/UX</p>
                                <p className="text-center">Senior Designer в Яндексе</p>
                            </div>
                            <div className="p-6 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-center mb-2">Дмитрий Волков</h3>
                                <p className="text-center text-gray-600 mb-4">Руководитель веб-разработки</p>
                                <p className="text-center">Tech Lead в Mail.ru Group</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl shadow-lg p-12 mb-16">
                        <h2 className="text-3xl font-bold mb-12 text-center">Отзывы выпускников</h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold">Мария Иванова</h4>
                                        <p className="text-gray-600">UI/UX дизайнер в Сбере</p>
                                    </div>
                                </div>
                                <p className="italic">"Благодаря колледжу я смогла освоить новую профессию и найти работу мечты. Преподаватели дают актуальные знания и делятся реальным опытом."</p>
                            </div>
                            <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold">Павел Сидоров</h4>
                                        <p className="text-gray-600">Frontend-разработчик в VK</p>
                                    </div>
                                </div>
                                <p className="italic">"Отличная программа обучения, сильные преподаватели и постоянная практика. После выпуска сразу нашел работу в крупной компании."</p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-white py-8 px-8">
                    <div className="flex justify-between items-center">
                        <p>© 2024 WebDesign College. Все права защищены</p>
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

