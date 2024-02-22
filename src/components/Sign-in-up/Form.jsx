import React, { useState } from 'react'
import s from './FormStyle.module.sass'
import eyeIcon from '../../hide-passwd.png'
import CustomInput from '../UI/CustomInput'

const Form = () => {
    const [optionActive, setOptionActive] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // fetch('', {
    //     method: 'POST',

    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8',
    //     },

    //     body: {
    //         username: '',
    //         passwd: '',
    //         email: '',
    //     },

    // }).then((response) => {
    //     response.status === 200 ?
    // })

    const logIn = () =>
        fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: {
                username: 'admin',
                password: 'password',
            },
        }).then((response) => console.log(response.json()))

    const userDataLog = {
        username: username,
        password: password,
        email: email,
    }

    return (
        <div className={s.form}>
            <div className={s.wrapper}>
                <div className={s.options}>
                    <div
                        className={optionActive ? s.option : s.optionActive}
                        onClick={() => {
                            setOptionActive(false)
                        }}
                    >
                        SIGN-IN
                    </div>
                    <div
                        className={optionActive ? s.optionActive : s.option}
                        onClick={() => {
                            setOptionActive(true)
                        }}
                    >
                        SIGN-UP
                    </div>
                </div>
                <div className={s.inputBlock}>
                    <CustomInput
                        type='text'
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <CustomInput
                        type={visiblePassword ? 'text' : 'password'}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img
                        src={eyeIcon}
                        alt='show'
                        className={s.showPasswd}
                        onClick={() => {
                            setVisiblePassword(!visiblePassword)
                        }}
                    />
                </div>
                {optionActive ? (
                    <div className={s.addInputBlock}>
                        <CustomInput
                            type={visiblePassword ? 'text' : 'password'}
                            placeholder='Confirm password'
                        />
                        <CustomInput
                            type='text'
                            placeholder='Email@'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                ) : (
                    ''
                )}
                <button
                    type='submit'
                    style={optionActive ? {} : { marginTop: '86px' }}
                    className={s.btn_auth}
                    onClick={logIn}
                >
                    {optionActive ? 'Зарегистрироваться' : 'Войти'}
                </button>
            </div>
        </div>
    )
}

export default Form
