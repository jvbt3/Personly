import React, { useState } from 'react';
import style from './ProjectForm.module.css'
import Input from '../form/Input'

export default function NewProject(handleSubmit, funcionarioData) {

    const [funcionarios, setFuncionarios] = useState(funcionarioData || {})

    const submit = (e) => {
        e.preventDefault()
        console.log(funcionarios)
        // handleSubmit(funcionarios)
    }

    function handleChange(e) {
        setFuncionarios({ ...funcionarios, [e.target.name]: e.target.value })
        console.log(funcionarios)
    }
    
    return (
    <div>
            <form onSubmit={submit} className={style.form}>
            <Input type="text" placeholder="Nome Completo" name="name" handleOnChange={handleChange} />
                <Input type="text" placeholder="E-mail" name="email" handleOnChange={handleChange}  />
                <Input type="number" placeholder="idade" name="idade" handleOnChange={handleChange}  />
                <Input type="number" placeholder="Telefone" name="telefone" handleOnChange={handleChange}  />
                <Input type="text" placeholder="Cargo" name="cargo" handleOnChange={handleChange} />
            <div>
                    <input className={style.btnn} type='submit' value="Registrar"></input>        
            </div>
        </form>
    </div>
    );
}