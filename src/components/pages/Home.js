import personly from '../../img/personly.png'
import BtnFuncionario from '../latouys/BtnFuncionario'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Personly</span></h1>
            <h3>O seu gerenciador de funcionários!</h3>

            <BtnFuncionario />
            <img src={personly} alt="Personly" />
        </section>
    )
}

export default Home