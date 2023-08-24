import React from 'react';
import style from './ProjectForm.module.css'
import Input from '../form/Input'

export default function NewProject() {
    return (
    <div>
        <form className={style.form}>
            <Input type="text" placeholder="Nome Completo" name="name" />
            <Input type="text" placeholder="E-mail" name="email"/>
            <Input type="number" placeholder="idade" name="idade"/>
            <Input type="number" placeholder="Telefone" name="telefone"/>
            <Input type="text" placeholder="Cargo" name="cargo"/>
            <div>
                    <input className={style.btnn} type='submit' value="Registrar"></input>        
            </div>
        </form>
    </div>
    );
}