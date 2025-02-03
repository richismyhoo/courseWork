export const loginRequest = async (email, password) => {

    const apiUrl = "https://localhost:44365/api/auth/login"

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    return response.json()
}

export const registrationRequest = async (name, email, password) => {

    const apiUrl = "https://localhost:44365/api/auth/register"

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })

    return response.json()
}

export const verifyRequest = async (userId, code) => {

    const apiUrl = "https://localhost:44365/api/auth/verify"

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            userId: userId,
            code: code,
        })
    })

    return response.json()
}