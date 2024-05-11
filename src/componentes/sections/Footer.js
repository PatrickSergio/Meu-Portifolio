import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css'




function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <a href='https://www.instagram.com/_patricksergio/' target="_blank" rel='noreferrer'><li><FaInstagram size={50}></FaInstagram></li></a>
                <li><FaLinkedin size={50}></FaLinkedin></li>
                <a href='https://github.com/PatrickSergio' target="_blank" rel='noreferrer'><li><FaGithub size={50}></FaGithub></li></a>
            </ul>
            <p> Patrick Sérgio © 2024</p>
            <p>sicck3@hotmail.com</p>
           
        </div>
        
    )
}

export default Footer