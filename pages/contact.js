import {FaGithub,FaLinkedin} from "react-icons/fa"
import {SiCodeforces,SiCodechef,SiHackerrank,SiHackerearth} from "react-icons/si"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, x: 200, y: 200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: 200, y: 200, scale: 0.8}
}

const blockVariants = {
    initial: side => ({opacity: 0, x: 0, y: (side ? 200 : -200)}),
    animate: side => ({opacity: 1, x: 0, y: 0, transition: {delay: 0.4}}),
    exit: side => ({opacity: 0, x: 0,y : (side ? 200 : -200)})
}

const textVariants = {
    initial: side => ({opacity: 0, x: 0, y: (side ? -200 : 200)}),
    animate: side => ({opacity: 1, x: 0, y: 0, transition: {delay: 0.8}}),
    exit: side => ({opacity: 0, x: 0,y : (side ? -200 : 200)})
}

const iconVariants = {
    initial: {opacity: 0, x: 0, y: 0, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: [0.8,1.2,1], transition: {delay: 1.2}},
    exit: {opacity: 0, x: 0,y : 0, scale: 0.8}
}

const contact = () => {

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} >
            <div className = "text-center">
                <br />
                <br />
                <h1 className = "font-bold text-5xl">CONTACT</h1>
                <br />
                <br />
                <div className = "flex flex-wrap justify-center item-center text-center">
                    <motion.form initial = "initial" animate = "animate" exit = "exit" variants = {blockVariants} custom = {0} className = "order-first md:w-2/5 mx-5 my-10 glass p-4 break-words">
                        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {textVariants} custom = {0}>
                            <input className = "w-full text-2xl font-semibold py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" type = "text" placeholder = "NAME"></input>
                            <br />
                            <input className = "w-full text-2xl font-semibold py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" type = "email" placeholder = "EMAIL"></input>
                            <br />
                            <textarea className = "w-full text-2xl font-semibold overflow-hidden py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" placeholder = "MESSAGE"></textarea>
                            <br />
                            <button className = "font-bold rounded-full border-solid border-2 border-white p-2 hover:bg-whitehue hover:text-blackhue" type = "submit">SEND</button>
                        </motion.div>
                    </motion.form>
                    <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {blockVariants} custom = {1} className = "order-last md:w-2/5 mx-5 my-10 glass p-4 break-words">
                        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {textVariants} custom = {1}>
                            <h4 className = "text-4xl">OTHER MEANS</h4>
                            <br />
                            <p className = "flex flex-col text-2xl">
                                I can be found on most major platforms, simply lookup 
                                <br />
                                <br />
                                <motion.h1 initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants}>
                                    <strong>DRAGON2002</strong>
                                </motion.h1>
                                <br />
                                <br />
                                Direct links to some of my most notable profiles 
                                <br />
                                <br />
                                <div className = "flex flex-wrap justify-center space-x-4">
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://github.com/XDRAGON2002"><FaGithub size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://linkedin.com/in/anant-vijay-37650613a"><FaLinkedin size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://codeforces.com/profile/DRAGON2002"><SiCodeforces size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://www.codechef.com/users/dragon2002"><SiCodechef size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://www.hackerrank.com/DRAGON2002"><SiHackerrank size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} className = "py-2 px-1" href = "https://www.hackerearth.com/@anant422"><SiHackerearth size = {70}/></motion.a>
                                </div>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default contact