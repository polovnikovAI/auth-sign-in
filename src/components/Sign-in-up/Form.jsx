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
                        onClick={(e) => {
                            setVisiblePassword(!visiblePassword)
                        }}
                    />
                </div>
                <button>Зарегистрироваться</button>
                <CustomInput placeholder='test' />
            </div>
        </div>
    )
}

export default Form

// display: inline
// position: relative
// font-size: 16px
// color: #000
// text-decoration: none
// margin-left: 20px
// cursor: pointer
// &::before
//     content: ''
//     position: absolute
//     top: 100%
//     left: 0
//     width: 0
//     height: 2px
//     background: #0400ff
//     transition: 0.4s
// &:hover::before
//     width: 100%
