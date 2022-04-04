import SkillCardList from "../components/SkillCardList"
import { skillItems } from "../data/skills.data"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, x: -200, y: -200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: -200, y: -200, scale: 0.8}
}

const skills = () => {

    const techStackString = ['T', 'E', 'C', 'H', '-', 'S', 'T', 'A', 'C', 'K']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} className = "flex justify-center items-center text-center mx-10">
            <div className = "">
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {techStackString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-5xl md:text-9xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <br />
                <SkillCardList items = {skillItems} row = {1} />
                <br />
                <br />
            </div>
        </motion.div>
    )
}

export default skills