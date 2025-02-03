export const getSelfUserData = async () => {
    const apiUrl = "https://localhost:44365/api/user/self"

    const response = await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.json()
}

export const getUserCourses = async () => {
    const apiUrl = "https://localhost:44365/api/users/courses"

    const response = await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.json()
}

export const addCourseToUser = async (courseName) => {
    const apiUrl = "https://localhost:44365/api/users/courses/add"

    const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            courseName: courseName,
        })
    })

    return response.json()
}

export const removeCourseFromUser = async (courseName) => {
    const apiUrl = "https://localhost:44365/api/users/courses/remove"

    const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            courseName: courseName,
        })
    })

    return response.json()
}