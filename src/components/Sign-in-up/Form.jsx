import React, { useState } from 'react'
import s from './FormStyle.module.sass'

const Form = () => {
    const [optionActive, setOptionActive] = useState(false)
    return (
        <div className={s.form}>
            <div className={s.wrapper}>
                <div className={s.options}>
                    <div className={s.optionLogin}>SIGN-IN</div>
                    <button className={s.optionRegistration}>SIGN-UP</button>
                </div>
                <div className={s.inputBlock}>
                    <input
                        type='text'
                        className={s.input}
                        placeholder='username'
                    />
                    <input
                        type='text'
                        className={s.input}
                        placeholder='password'
                    />
                </div>
                <button>Зарегистрироваться</button>
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
