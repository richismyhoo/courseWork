import { useState } from 'react'
import {ModalForm} from "../../components/ModalForm/ModalForm"
import { useNavigate } from 'react-router-dom'
import "./Courses.css"
import { CourseCards } from "../../components/CourseCards/CourseCards"

export const Courses = () => {

    const navigate = useNavigate()

    const [activeModal, setActiveModal] = useState(false)

    const handleModalForm = () => {
        setActiveModal(true)
    }

    const callBackCloseModal = () => {
        setActiveModal(false)
    }

    const closeModal = (event) => {
        if (event.target.className === 'modal-overlay') {
            setActiveModal(false)
        }
    }

    const openMain = () => {
        navigate('/')
    }

    return (
        <>
            <div className="modal-overlay" onClick={closeModal}
                 style={activeModal ? {display: "flex", visibility: "visible"} : {
                     display: "none",
                     visibility: "hidden"
                 }}>
                <ModalForm activeModal={activeModal} closeModal={callBackCloseModal}/>
            </div>
            <div className="header">
                <span className="header-title">WebDes IT College</span>
                <div className="contact-block">
                    <span onClick={openMain}>Главная</span>
                    <span onClick={handleModalForm}>Оставить заявку</span>
                </div>
            </div>
            <span className="courses-title">Наши курсы</span>
            <CourseCards/>
            <div className="footer">
                <div className="footer-row">WebDes IT College</div>
                <div className="footer-row">2017-2024 Все права защищены ©</div>
            </div>
        </>
    )
}