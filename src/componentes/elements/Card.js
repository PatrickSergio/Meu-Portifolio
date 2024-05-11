import styles from './Card.module.css'

import ButtonB from './ButtonB'




function Card({title, tech, description, repo, img, site}) {
    return (
        <div className={styles.card}>
            <a href={site} target='blank'>
                <img src={img} alt='ERROR' /></a>
            
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}></ButtonB>
            </section>
            


        </div>

    )
}

export default Card