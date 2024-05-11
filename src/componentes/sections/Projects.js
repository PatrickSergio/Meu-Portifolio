import Card from '../elements/Card'
import styles from './Projects.module.css'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.svg'
import ButtonB from '../elements/ButtonB'
import api from '../../image/projects/api.svg'


function Projects() {
    return (
        <div id="Projects" className={styles.projects}>
            <h1>Projetos:</h1>
            <Card
                title='LP - DNC'
                tech='HTML, CSS e JS'
                description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
                repo='https://github.com/PatrickSergio/projeto-landing-page'
                img={lpdnc }
                site='https://projetolp1dnc.netlify.app/'>
                
                </Card>
            <Card 
             title='Portifólio'
                tech='React'
                description='Desenvolvimento de um portifólio todo construido em React.'
                repo='https://github.com/PatrickSergio/projeto-landing-page'
                img={portifolio}
                site='projetolp1dnc.netlify.app'></Card>
            <Card
                title='Consulta de CEP e Pevisão do clima'
                tech='HTML, CSS, JS'
                description='Desenvolvimento de uma página com consumo de API.'
                repo='https://github.com/PatrickSergio/Desafio2dnc'
                img={api}
                site='https://segundodesafiodnc.netlify.app/'
            ></Card>
            <ButtonB text='Acesse meu repositório' link='https://github.com/PatrickSergio'></ButtonB>
            
        </div>
        
    )
}

export default Projects