import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import css from '../../image/skills/css.svg'
import html from '../../image/skills/html.svg'
import ts from '../../image/skills/ts.svg'
import react from '../../image/skills/react.svg'



function Skills() {
    return (
        <div className={styles.skills} id="Skills">
            <h1>Habilidades</h1>
                <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} alt='error'></img>
                <img src={html} alt='error'></img>
                <img src={css} alt='error'></img>
                <img src={react} alt='error'></img>
                <img src={ts} alt='error'></img>             
            </div>
            
        </div>
        
    )
}

export default Skills