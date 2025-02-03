import { useState, useEffect } from 'react'
import {notify} from "../../components/Notify/notify";

export const ActiveCourses = (props) => {

    let {courses, removeCourse} = props?.props

    const callBack = (event) => {
        if (event.currentTarget.id === "Базовый вступительный курс") {
            notify("error", "Невозможно убрать базовый курс")
            console.log("unreal")
        } else {
            removeCourse(event.currentTarget.id)
        }
    }
    console.log(props, '_)____________')
    return courses?.courses?.map((course) => {
        return (
            <div
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors duration-300 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold mb-1">{course}</h3>
                    </div>
                    <div className="w-12 bg-gray-100 rounded-full h-8 flex justify-center align-middle text-gray-800" id={course} onClick={callBack}> <span className="mt-[0.3vw]">➖</span> </div>
                </div>
            </div>
        )
    })
}

export const AvailableCourses = (props) => {

    const courses = ["Базовый Frontend", "UI/UX Дизайн", "Базовый Web-Design", "Иллюстрирование", "Motion-Design", "Анимация"]
    console.log(props)
    let {takenCourses, addCourse} = props?.props
    takenCourses = takenCourses?.courses

    const makeCallBack = (event) => {
        addCourse(event.currentTarget.id)
    }

    const filterCourses = (courses, takenCourses) => {
        return courses?.filter(course => !takenCourses?.includes(course))
    }

    const availableCourses = filterCourses(courses, takenCourses)

    return availableCourses.map((course) => {
        return (
            <div
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors duration-300 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold mb-1">{course}</h3>
                    </div>
                    <div className="w-12 bg-gray-100 rounded-full h-8 flex justify-center align-middle text-gray-800" id={course} onClick={makeCallBack}> <span className="mt-[0.3vw]">➕</span> </div>
                </div>
            </div>
        )
    })
}