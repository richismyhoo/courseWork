import "./ModalForm.css"
import { sendForm } from './api'
import { useState, useEffect } from 'react'

export const ModalForm = (props) => {

    const {activeModal} = props

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setName('')
        setPhone('')
        setEmail('')
    },[activeModal])

    const handleInput = (event) => {
        switch (event.target.id) {
            case 'name-input':
                setName(event.target.value)
                break
            case 'phone-input':
                setPhone(event.target.value)
                break
            case 'email-input':
                setEmail(event.target.value)
                break
            default: throw new Error("произошла неизвестная ошибка")
        }
    }

    const closeModal = () => {
        props.closeModal()
    }

    const handleSendForm = () => {
        const fetchData = async () => {
            try {
                await sendForm({name: name, phone: phone, email: email})
            } catch (e) {
                console.error(e)
            } finally {
                closeModal()
            }
        }
        fetchData()
    }

    return (
        <div className="modal">
            <span className="modal-title">Оставьте свои данные для обратной связи!</span>
            <div className="modal-input-container">
                <span>Имя</span>
                <input type="text" value={name} onChange={handleInput} className="modal-input" id="name-input"/>
            </div>
            <div className="modal-input-container">
                <span>Телефон</span>
                <input type="text" value={phone} onChange={handleInput} className="modal-input" id="phone-input"/>
            </div>
            <div className="modal-input-container">
                <span>Почта</span>
                <input type="text" value={email} onChange={handleInput} className="modal-input" id="email-input"/>
            </div>
            <div className="confirm-container">
                <div className="cancel-button button" onClick={closeModal}>Отмена</div>
                <div className="confirm-button button" onClick={handleSendForm}>Отправить</div>
            </div>
        </div>
    )
}