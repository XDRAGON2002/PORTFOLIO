import ProjectCardList from "../components/ProjectCardList"
import {items} from "../data/projects.data"
import styles from "../styles/Projects.module.css"

const projects = () => {

    return (
        <div className = {styles.container}>
            <h1>PROJECTS</h1>
            <ProjectCardList items = {items} />
        </div>
    )
}

export default projects