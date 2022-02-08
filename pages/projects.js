import ProjectCardList from "../components/ProjectCardList"
import {items} from "../data/projects.data"
import { motion } from "framer-motion"

const variants = {
    initial: {opacity: 0, x: -200, y: 200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: -200,y: 200, scale: 0.8}
}

const projects = () => {

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {variants} className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <h1 className = "font-bold text-5xl">PROJECTS</h1>
                <ProjectCardList items = {items} />
            </div>
        </motion.div>
    )
}

export default projects