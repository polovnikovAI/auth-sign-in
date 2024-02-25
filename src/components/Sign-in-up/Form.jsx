import React, { useState } from 'react'
import s from './FormStyle.module.sass'
import eyeIcon from '../../hide-passwd.png'
import CustomInput from '../UI/CustomInput'
import { logIn, registration, secureData } from '../requests/requests'

const Form = () => {
    const [optionActive, setOptionActive] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const [email, setEmail] = useState('')

    // const userDataLog = {
    //     username: username,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //     email: email,
    // }
    
// нашел как не создавать много состояний useEffect, а справиться 1 и создать функцию для изменения
    const [userDataLog, setUserDataLog] =useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    })

    const userDataLogChanger = (e) => {
        const {name , value} = e.target
        setUserDataLog({...userDataLog , [name]:value})
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
                        name = 'username'
                        onChange={(e) => userDataLogChanger(e)}
                    />
                    <CustomInput
                        type={visiblePassword ? 'text' : 'password'}
                        placeholder='Password'
                        name = 'password'
                        onChange={(e) => userDataLogChanger(e)}
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
                            onChange ={(e) => userDataLogChanger(e)}
                            name = 'confirmPassword'
                        />
                        <CustomInput
                            type='text'
                            placeholder='Email@'
                            name = 'email'
                            onChange={(e) => userDataLogChanger(e)}
                        />
                    </div>
                ) : (
                    ''
                )}
                <button
                    type='submit'
                    style={optionActive ? {} : { marginTop: '86px' }}
                    className={s.btn_auth}
                    onClick={(optionActive) ? (() => registration(userDataLog)) : 
                        ((userDataLog.username === '') ? console.log('поле username не может быь пустым')
                            : () => logIn(userDataLog)) }
                >
                    {optionActive ? 'Зарегистрироваться' : 'Войти'}
                </button>

                {/* ниже строка для теста запросов */}
                {/* <button onClick={() => {console.log(localStorage); secureData(); localStorage.clear()}}>12312312312313</button> */}
            
            </div>
        </div>
    )
}

export default Form
