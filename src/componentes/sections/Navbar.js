import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar() {
    return (
        <div className={styles.navbar} id={styles.container}>
            <ul>
                <li><NavLink href='#Presentation'>Apresentação</NavLink></li>
                <li><NavLink href='#Skills'>Habilidades</NavLink></li>
                <li><NavLink href='#Projects'>Projetos</NavLink></li>
            </ul>
            <ul>
                <a href='https://www.instagram.com/_patricksergio/'><li><FaInstagram size={50}></FaInstagram></li></a>
                <a href='https://www.linkedin.com/in/patrick-moraes-477a7b308/'><li><FaLinkedin size={50}></FaLinkedin></li></a>
               <a href='https://github.com/PatrickSergio'><li><FaGithub size={50}></FaGithub></li></a> 
            </ul>
        </div>
        
    )
}

export default Navbar