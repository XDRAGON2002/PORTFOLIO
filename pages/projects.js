import ProjectCardList from "../components/ProjectCardList"
import {items} from "../data/projects.data"

const projects = () => {

    return (
        <div className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <h1 className = "font-bold text-5xl">PROJECTS</h1>
                <ProjectCardList items = {items} />
            </div>
        </div>
    )
}

export default projects