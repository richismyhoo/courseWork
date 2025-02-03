import { useState, useEffect } from 'react'
import {addCourseToUser, getSelfUserData, getUserCourses, removeCourseFromUser} from "./api";
import {notify} from '../../components/Notify/notify'
import {ActiveCourses, AvailableCourses} from "./courses";
import {ToastContainer} from "react-toastify";
import {NavBar} from "../../components/NavBar/NavBar";

export const Profile = () => {

    const [user, setUser] = useState()
    const [userCourses, setUserCourses] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUser = async () => {
        try {
            const userData = await getSelfUserData()
            setUser(userData)
        } catch (e) {
            notify("error", e.message)
        }
    }

    const fetchUserCourses = async () => {
        try {
            const userCourses = await getUserCourses()
            setUserCourses(userCourses)
        } catch (e) {
            notify("error", e.message)
        }
    }

    useEffect(() => {
        if (typeof user === 'object') {
            setLoading(false)
        }
    }, [user])

    const addCourse = async (courseName) => {
        const fetchData = async () => {
            try {
                await addCourseToUser(courseName)
            } catch (e) {
                notify("error", e.message)
            }
        }
            await fetchData()
            window.location.reload()
    }

    const removeCourse = async (courseName) => {
        const fetchData = async () => {
            try {
               await removeCourseFromUser(courseName)
            } catch (e) {
                notify("error", e.message)
            }
        }
        await fetchData()
        window.location.reload()
    }


    useEffect(() => {
        fetchUser()
        fetchUserCourses()
    }, [])

    if (loading) {
        return (
            <div class="flex-col gap-4 w-full flex items-center justify-center">
                <div
                    class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                >
                    <div
                        class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                    ></div>
                </div>
            </div>
        )
    } else

        return (
            <div id="webcrumbs">
                <NavBar />
                <ToastContainer />
                <div className="w-[100vw] bg-gray-50">
                    <header className="py-8 px-6 bg-white shadow-sm mb-6">
                        <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
                        <p className="text-lg text-gray-600">Добро пожаловать, {user.name}</p>
                    </header>

                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <span className="material-symbols-outlined text-3xl mb-3 ">👤</span>
                                <h3 className="text-xl font-semibold mb-2">Почта</h3>
                                <p className="text-gray-600 mb-4">{user.email}</p>
                            </div>

                            <div
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <span className="material-symbols-outlined text-3xl mb-3 text-purple-900">★</span>
                                <h3 className="text-xl font-semibold mb-2">Очки</h3>
                                <p className="text-gray-600 mb-4">{user.points}</p>
                            </div>

                            <div
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <span className="material-symbols-outlined text-3xl mb-3">🎓</span>
                                <h3 className="text-xl font-semibold mb-2">Прогресс</h3>
                                <p className="text-gray-600 mb-4">{userCourses?.courses?.length} {userCourses?.courses?.length === 1 ? "Активный курс" : userCourses?.courses?.length > 1 && userCourses?.courses?.length < 5 ? "Активных курса" : "Активных курсов"}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-6">Мои курсы</h2>
                            <div className="space-y-4">
                                <ActiveCourses props = {{courses: userCourses, removeCourse}}/>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-300 flex items-center mx-auto">
                                <span className="material-symbols-outlined mr-2">📑</span>
                                Перейти к заданиям
                            </button>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-6">Доступные курсы</h2>
                            <div className="space-y-4">
                                <AvailableCourses props = {{takenCourses: userCourses, addCourse}} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
}