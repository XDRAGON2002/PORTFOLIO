import ProjectCard from "./ProjectCard"

const ProjectCardList = ({items}) => {

    return (
        <div className = "mx-0">
            {items.map((item,index) => (
                <ProjectCard key = {item.id} item = {item} side = {index % 2}/>
            ))}
        </div>
    )
}

export default ProjectCardList