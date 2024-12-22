

export const InfoCards = () => {
    const Informations = [{
        title: 'Адаптивный дизайн',
        description: 'Научитесь создавать интерфейсы, которые одинаково хорошо выглядят на любых устройствах'
    },
    {
        title: 'UI/UX дизайн',
        description: 'Разработайте навыки проектирования удобных и понятных интерфейсов',
    },
    {
        title: 'Frontend Разработка',
        description: 'Овладейте современными инструментами и технологиями для создания веб-приложений'
    }]

    return (
        <>
            {Informations.map(item => {
                return (
                <div className="card">
                    <div className="card-title">{item.title}</div>
                    <div className="card-body">{item.description}</div>
                </div>
                )
            })}
        </>
    )
}