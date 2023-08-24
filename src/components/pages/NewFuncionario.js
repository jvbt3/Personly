import NewProject from '../project/ProjectForm'
import styles from './NewFuncionario.module.css'
import { useNavigate } from 'react-router-dom'

function NewFuncionario() {

    const history = useNavigate()

    function createPost(funcionarios) {

        funcionarios.funcionario = []

        fetch('http://localhost:5000/funcionarios', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(funcionarios)
        }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    history.push('/newfuncionarios', {message: 'Funcionário criado com sucesso!'})
                    //redirect


            }).catch((err) => console.log(err))

    }

    return (
        <h1 className={styles.newfuncionario_container}>
            <h1>Registrar novo funcionário</h1>
            <p>Registre seu mais novo funcionário aqui!</p>
            <NewProject handleSubmit={createPost} />
        </h1>
    )
}

export default NewFuncionario