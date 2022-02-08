import BlogCardList from "../../components/BlogCardList"
import {items} from "../../data/blog.data"
import { motion } from "framer-motion"

const variants = {
    initial: {opacity: 0, x: -200},
    animate: {opacity: 1, x: 0},
    exit: {}
}

const blog = () => {

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {variants} className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <h1 className = "font-bold text-5xl">BLOG</h1>
                <br />
                <h4 className = "text-3xl">Stay Tuned In For The Upcoming Blogs !</h4>
                <BlogCardList items = {items} />
            </div>
        </motion.div>
    )
}

export default blog