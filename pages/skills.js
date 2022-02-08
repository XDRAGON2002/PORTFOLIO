import SkillCardList from "../components/SkillCardList"
import {languages,web_dev,database_systems,machine_learning,devops_cloud,tools} from "../data/skills.data"
import { motion } from "framer-motion"

const variants = {
    initial: {opacity: 0, x: -200, y: -200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: -200, y: -200, scale: 0.8}
}

const skills = () => {

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {variants} className = "flex justify-center items-center text-center mx-10">
            <div className = "">
                <br />
                <br />
                <h1 className = "font-bold text-5xl">TECH STACK</h1>
                <br />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">LANGUAGES</h1>
                <br />
                <SkillCardList items = {languages} row = {1} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">WEB DEVELOPMENT</h1>
                <br />
                <SkillCardList items = {web_dev} row = {2} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">DATABASE SYSTEMS</h1>
                <br />
                <SkillCardList items = {database_systems} row = {3} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">MACHINE LEARNING</h1>
                <br />
                <SkillCardList items = {machine_learning} row = {4} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">DEVOPS / CLOUD</h1>
                <br />
                <SkillCardList items = {devops_cloud} row = {5} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">TECHNOLOGIES</h1>
                <br />
                <SkillCardList items = {tools} row = {6} />
                <br />
                <br />
            </div>
        </motion.div>
    )
}

export default skills