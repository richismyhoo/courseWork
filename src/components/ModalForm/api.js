export const sendForm = async (props) => {
    const apiURL = ''

    const {name, phone, email } = props

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
        })
    })
}