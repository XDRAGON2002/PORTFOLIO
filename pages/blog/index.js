import BlogCardList from "../../components/BlogCardList"
import {items} from "../../data/blog.data"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, scale: 0.4},
    animate: {opacity: 1, scale: [1.2,0.8,1], transition: {delay: 0.2}},
    exit: {opacity: 0, scale: 0.4}
}

const blog = () => {

    const blogString = ['B', 'L', 'O', 'G']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {blogString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-5xl md:text-9xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <br />
                <h4 className = "text-4xl md:text-6xl">Stay Tuned In For The Upcoming Blogs !</h4>
                <BlogCardList items = {items} />
            </div>
        </motion.div>
    )
}

export default blog