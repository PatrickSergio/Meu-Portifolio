import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'




function Footer() {
    return (
        <div className={styles.footer} id={styles.container}>
            <ul>
                <a href='https://www.instagram.com/_patricksergio/' target="_blank" rel='noreferrer'><li><FaInstagram size={50}></FaInstagram></li></a>
                <a href='https://www.linkedin.com/in/patrick-moraes-477a7b308/'><li><FaLinkedin size={50}></FaLinkedin></li></a>
                <a href='https://github.com/PatrickSergio' target="_blank" rel='noreferrer'><li><FaGithub size={50}></FaGithub></li></a>
            </ul>
            <p> Patrick Sérgio © 2024</p>
            <a href='mailto:sicck3@hotmail.com'><p>sicck3@hotmail.com</p></a>
           
        </div>
        
    )
}

export default Footer