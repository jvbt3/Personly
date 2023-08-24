import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/personly2.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                    <Link to = "/">
                    <img className={styles.img} src={logo} alt='costs_logo'></img>
                    </Link>
                <ul>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to="/">Home</Link></li>
                        <li className={styles.item}><Link to="/funcionarios">Funcionários</Link></li>
                        <li className={styles.item}><Link to="/contato">Contato</Link></li>
                    </ul>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar