import ProjectCardList from "../components/ProjectCardList"
import {items} from "../data/projects.data"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, x: -200, y: 200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: -200,y: 200, scale: 0.8}
}

const projects = () => {

    const projectsString = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {projectsString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-5xl md:text-9xl">{char}</motion.span>
                    })}
                </div>
                <ProjectCardList items = {items} />
            </div>
        </motion.div>
    )
}

export default projects