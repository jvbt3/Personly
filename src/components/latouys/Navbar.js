import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                    <Link to = "/">
                    <img class={styles.img} src={logo} alt='costs_logo'></img>
                    </Link>
                <ul>
                    <ul class={styles.list}>
                        <li className={styles.item}><Link to="/">Home</Link></li>
                        <li className={styles.item}><Link to="/pessoa">Cadastrar</Link></li>
                        <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    </ul>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar