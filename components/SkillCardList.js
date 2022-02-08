import SkillCard from "./SkillCard"
import { motion } from "framer-motion"

const variants = {
    initial: row => ({opacity: 0, x: (row % 2) ? -200 : 200, y: 0, scale: 0.8}),
    animate: row => ({opacity: 1, x: 0, y: 0, scale: 1, transition : {delay: row * 0.6}}),
    exit: row => ({opacity: 0, x: (row % 2) ? -200 : 200, y: 0, scale: 0.8})
}

const SkillCardList = ({items,row}) => {

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {variants} custom = {row} className = "flex flex-wrap glass md:mx-20">
            {items.map((item,idx) => (
                <SkillCard key = {item.id} item = {item} row = {row} col = {idx} />
            ))}
        </motion.div>
    )
}

export default SkillCardList