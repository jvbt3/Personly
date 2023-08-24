import React from 'react';
import style from './Input.module.css'

export default function Input({ type, name, placeholder, handleOnChange, value }) {
    return (
        <div className={style.input}>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    );
}