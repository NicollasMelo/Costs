import ProjectForm from '../project/ProjectForm'
import styles from './Project.module.css'

function Projects({btnText}) {
    return (
       <div className={styles.newproject_container}>
          <h1>Criar Projeto</h1>
           <p>Crie seu projeto para depois adicionar os serviços</p>
           <ProjectForm btnText="Criar Projeto"/>
       </div>
    )
}
export default Projects