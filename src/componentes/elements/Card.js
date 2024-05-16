import styles from './Card.module.css'

import ButtonB from './ButtonB'
import {useState} from 'react'



function Card({ title, tech, description, repo, img, site }) {
    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }

    function infoOff() {
        setInfo(false)
    }

    return (
        <div className={styles.card}  onMouseLeave={infoOff}>
            <a onMouseEnter={infoOn} href={site} target='blank'>
                <img src={img} alt='ERROR' /></a>
            
            {info === true && (
                  <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}></ButtonB>
            </section>
                
            )}

          
            


        </div>

    )
}

export default Card
