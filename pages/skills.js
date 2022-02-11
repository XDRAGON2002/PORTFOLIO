import SkillCardList from "../components/SkillCardList"
import {languages,web_dev,database_systems,machine_learning,devops_cloud,tools} from "../data/skills.data"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, x: -200, y: -200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: -200, y: -200, scale: 0.8}
}

const skills = () => {

    const techStackString = ['T', 'E', 'C', 'H', '-', 'S', 'T', 'A', 'C', 'K']
    const languagesString = ['L', 'A', 'N', 'G', 'U', 'A', 'G', 'E', 'S']
    const webDevelopmentString = ['W', 'E', 'B', '-', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'M', 'E', 'N', 'T']
    const databaseSystemsString = ['D', 'A', 'T', 'A', 'B', 'A', 'S', 'E', '-', 'S', 'Y', 'S', 'T', 'E', 'M', 'S']
    const machineLearningString = ['M', 'A', 'C', 'H', 'I', 'N', 'E', '-', 'L', 'E', 'A', 'R', 'N', 'I', 'N', 'G']
    const devopsCloudString = ['D', 'E', 'V', 'O', 'P', 'S', '/', 'C', 'L', 'O', 'U', 'D']
    const technologiesString = ['T', 'E', 'C', 'H', 'N', 'O', 'L', 'O', 'G', 'I', 'E', 'S']

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
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {languagesString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {languages} row = {1} />
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {webDevelopmentString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {web_dev} row = {2} />
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {databaseSystemsString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {database_systems} row = {3} />
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {machineLearningString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {machine_learning} row = {4} />
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {devopsCloudString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {devops_cloud} row = {5} />
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {technologiesString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <SkillCardList items = {tools} row = {6} />
                <br />
                <br />
            </div>
        </motion.div>
    )
}

export default skills