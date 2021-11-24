import ProjectCard from "./ProjectCard"
import styles from "../styles/ProjectCardList.module.css"

const ProjectCardList = ({items}) => {

    return (
        <div>
            {items.map((item,index) => (
                <ProjectCard key = {item.id} item = {item} side = {index % 2}/>
            ))}
        </div>
    )
}

export default ProjectCardList