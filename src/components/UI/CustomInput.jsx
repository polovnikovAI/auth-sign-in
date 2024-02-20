import React from 'react'
import s from './inputStyle.module.sass'

const CustomInput = (children) => {
    return (
        <input
            className={s.customInput}
            {...children}
        />
    )
}

export default CustomInput
