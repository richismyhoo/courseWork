import "./main.css"
import { InfoCards } from "../../components/InfoCards/InfoCards"
import { ModalForm } from "../../components/ModalForm/ModalForm"
import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export const Main = () => {

    const navigate = useNavigate()

    const scrollToRef = useRef()

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

    const handleGoToAbout = () => {
        scrollToRef.current.scrollIntoView({
            behavior: "smooth",
        })
    }

    const openCourses = () => {
        navigate("/courses")
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
                    <span onClick={handleGoToAbout}>О нас</span>
                    <span onClick={openCourses}>Курсы</span>
                    <span onClick={handleModalForm}>Оставить заявку</span>
                </div>
            </div>
            <div className="main">
                <div className="main-title">Добро пожаловать в мир дизайна</div>
                <div className="main-description">Наш колледж прелагает профессональные курсы по изучению современного
                    веб-дизайна и подготовки IT-специалистов высокого уровня.
                </div>
                <div className="main-content">
                    <InfoCards/>
                </div>
            </div>
            <div className="about" ref={scrollToRef}>
                <div className="about-card">
                    <div className="about-card-title">7 Лет успешного обучения</div>
                    <div className="about-card-content">Успешно обучаем студентов веб-дизайну уже более 7 лет. Подходим к вопросу максимально ответственно, каждый студент для нас важен.</div>
                </div>
                <div className="about-card">
                    <div className="about-card-title">Более 10 тыс. отзывов</div>
                    <div className="about-card-content">Наш колледж имеет хорошо выстроенную репутацию, более 10 тысяч положительных отзывов - тому доказательство</div>
                </div>
                <div className="about-card">
                    <div className="about-card-title">3-12 мес. обучения</div>
                    <div className="about-card-content">За 7 лет обучения, мы выстроили собственную эффективную систему обучения, которая позволяет значительно ускорить процесс обучения</div>
                </div>
                <div className="about-card">
                    <div className="about-card-title">Низкие цены и гарантии</div>
                    <div className="about-card-content">Наши цены ниже конкурентов на 20%, при обучении вы соберете значительное портфолио, также даем гарантию трудоустройства в течении 2 месяцев после окончания обучения! </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-row">WebDes IT College</div>
                <div className="footer-row">2017-2024 Все права защищены ©</div>
            </div>
        </>
    )
}