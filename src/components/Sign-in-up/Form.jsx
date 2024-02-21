import React, { useState } from 'react'
import s from './FormStyle.module.sass'
import eyeIcon from '../../hide-passwd.png'
import CustomInput from '../UI/CustomInput'

const Form = () => {
    const [optionActive, setOptionActive] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
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
                    />
                    <CustomInput
                        type={visiblePassword ? 'text' : 'password'}
                        placeholder='Password'
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
                        />
                    </div>
                ) : (
                    ''
                )}
                <button
                    type='submit'
                    style={optionActive ? {} : { marginTop: '86px' }}
                    className={s.btn_auth}
                >
                    {optionActive ? 'Зарегистрироваться' : 'Войти'}
                </button>
            </div>
        </div>
    )
}

export default Form
