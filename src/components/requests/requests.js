// запрос для авторизации

export const logIn = (data) =>
    fetch(`http://localhost:8080/auth`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => (response.token ? localStorage.setItem('jwtToken', response.token) : console.log(response)))

// запрос для регистрации

export const registration = (data) =>
    fetch('http://localhost:8080/registration', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => (response.token ? localStorage.setItem('jwtToken', response.token) : console.log(response)))

// защищиенный запрос
export const secureData = () =>
    fetch('http://localhost:8080/info', {
        method: 'POST',

        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
    })
        .then((response) => response.text())
        .then((response) => console.log(response))
