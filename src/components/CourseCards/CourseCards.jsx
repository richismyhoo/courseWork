export const CourseCards = () => {

    const courses = [
        {
            title: "Веб-Дизайн",
            body: "Обучение всем стандартным практикам веб-дизайна, созданию макетов, работа с векторной графикой и т.д.",
            duration: 3,
            price: 20000
        },
        {
            title: "Базовый Frontend",
            body: "Обучим HTML, CSS, базовому JavaScript, верстке форм и анимациям, покажем лучшие практики во Frontend",
            duration: 6,
            price: 30000
        },
        {
            title: "3D иллюстрирование",
            body: "Обучение работы в Blender, созданию текстур, работы с шейдерами, анимирование моделей, на выходе - портфолио из 10 крупных работ, все что нужно для современного работодателя",
            duration: 12,
            price: 60000
        },
        {
            title: "Продвинутый Frontend с нуля",
            body: "HTML, CSS, Полный JavaScript, React, TypeScript, Next.js. Все что нужно для успешного старта карьеры в крупной компании!",
            duration: 12,
            price: 60000
        },
        {
            title: "Продвинутый Frontend с базой",
            body: "Добавление к базовым знаниям: React, TypeScript, Next.js",
            duration: 6,
            price: 30000
        },
        {
            title: "Моушн-Дизайн",
            body: "Современный моушн-дизайн, работа с Premier Pro, After Effects, Adobe Auditor, в конце курса вы сможете делать такие же видео, как в рекламах Apple!",
            duration: 10,
            price: 40000
        },
        {
            title: "Иллюстрирование",
            body: "Работа в Photoshop, Abode Illustrator. Вы будете разрабатывать логотипы, анимировать их, рисовать маскотов и т.п.",
            duration: 6,
            price: 30000
        }]

    return (
        <div className="courses-container">
            {courses.map(course => {
                return (
                    <div className="course-card">
                        <div className="course-card-title">{course.title}</div>
                        <div className="course-card-body">{course.body}</div>
                        <div className="course-card-duration">{course.duration} мес.</div>
                        <div className="course-card-price">{course.price.toLocaleString()} ₽</div>
                    </div>
                )
            } )}
        </div>
    )
}