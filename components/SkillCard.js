import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    initial: coord => ({opacity: 0, x: (coord[0] % 2) ? -200 : 200, y: (coord[1] % 2) ? -200 : 200, scale: 0.8}),
    animate: coord => ({opacity: 1, x: 0, y: 0, scale: 1, transition : {delay: coord[0] * 1}}),
    exit: coord => ({opacity: 0, x: (coord[0] % 2) ? -200 : 200, y: (coord[1] % 2) ? -200 : 200, scale: 0.8})
}

const SkillCard = ({item,row,col}) => {

    const [showTitle,setShowTitle] = useState(false)

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {variants} custom = {[row,col]} onHoverStart = {() => setShowTitle(true)} whileHover = {{scale: 1.2}} onHoverEnd = {() => setShowTitle(false)} className = "flex-grow mx-3 my-3">
            <img src = {item.link} alt = {item.title} className = "h-24 w-24 mx-auto"></img>
            {showTitle && <div className = "z-100">
                <h4>{item.title}</h4>
            </div>}
        </motion.div>
    )
}

export default SkillCard