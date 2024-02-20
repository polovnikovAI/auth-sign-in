import React from 'react'
import s from './inputStyle.module.sass'

const CustomInput = (children) => {
    return (
        <input
            type='text'
            className={s.customInput}
            {...children}
        ></input>
    )
}

export default CustomInput
