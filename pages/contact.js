import {FaGithub,FaLinkedin,FaKaggle,FaStackOverflow,FaMedium} from "react-icons/fa"
import {SiCodeforces,SiCodechef,SiHackerrank,SiHackerearth,SiLeetcode} from "react-icons/si"
import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, x: 200, y: 200, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: 1},
    exit: {opacity: 0, x: 200, y: 200, scale: 0.8}
}

const blockVariants = {
    initial: side => ({opacity: 0, x: 0, y: (side ? 200 : -200)}),
    animate: side => ({opacity: 1, x: 0, y: 0, transition: {delay: 0.6}}),
    exit: side => ({opacity: 0, x: 0,y : (side ? 200 : -200)})
}

const textVariants = {
    initial: side => ({opacity: 0, x: 0, y: (side ? -200 : 200)}),
    animate: side => ({opacity: 1, x: 0, y: 0, transition: {delay: 1.2}}),
    exit: side => ({opacity: 0, x: 0,y : (side ? -200 : 200)})
}

const iconVariants = {
    initial: {opacity: 0, x: 0, y: 0, scale: 0.8},
    animate: {opacity: 1, x: 0, y: 0, scale: [0.8,1.2,1], transition: {delay: 1.6}},
    exit: {opacity: 0, x: 0,y : 0, scale: 0.8}
}

const inputVariants = {
    initial: {opacity: 0, x: 200, y: 0},
    animate: {opacity: 1, x: 0, y: 0, scale: [0.8,1.2,1], backgroundColor: "#f5f5f5"},
    exit: {opacity: 0, x: 200,y : 0}
}

const contact = () => {

    const contactString = ['C', 'O', 'N', 'T', 'A', 'C', 'T']
    const nameString = ['D', 'R', 'A', 'G', 'O', 'N', '2', '0', '0', '2']
    const reachOutString = ['R', 'E', 'A', 'C', 'H', '-', 'O', 'U', 'T']
    const otherMeansString = ['O', 'T', 'H', 'E', 'R', '-', 'M', 'E', 'A', 'N', 'S']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} >
            <div className = "text-center">
                <br />
                <br />
                <div className = "flex flex-wrap justify-center items-center text-center">
                    {contactString.map((char,idx) => {
                        return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-5xl md:text-9xl">{char}</motion.span>
                    })}
                </div>
                <br />
                <br />
                <div className = "flex flex-wrap justify-center item-center text-center">
                    <motion.form initial = "initial" animate = "animate" exit = "exit" variants = {blockVariants} custom = {0} className = "order-first md:w-2/5 mx-5 my-10 glass p-4 break-words">
                        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {textVariants} custom = {0}>
                            <div className = "flex flex-wrap justify-center items-center text-center">
                                {reachOutString.map((char,idx) => {
                                    return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                                })}
                            </div>
                            <br />
                            <motion.input whileHover = {{backgroundColor: "#f5f5f5", color: "#0f0e17", borderRadius: "20px"}} className = "w-full text-2xl font-semibold py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" type = "text" placeholder = "NAME"></motion.input>
                            <br />
                            <motion.input whileHover = {{backgroundColor: "#f5f5f5", color: "#0f0e17", borderRadius: "20px"}} className = "w-full text-2xl font-semibold py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" type = "email" placeholder = "EMAIL"></motion.input>
                            <br />
                            <motion.textarea whileHover = {{backgroundColor: "#f5f5f5", color: "#0f0e17", borderRadius: "20px"}} className = "w-full text-2xl font-semibold overflow-hidden py-5 px-2 my-5 bg-transparent outline-none text-whitehue border-r-2 border-whitehue focus:bg-whitehue focus:text-blackhue" placeholder = "MESSAGE"></motion.textarea>
                            <br />
                            <button className = "font-bold rounded-full border-solid border-2 border-white p-2 hover:bg-whitehue hover:text-blackhue" type = "submit">SEND</button>
                        </motion.div>
                    </motion.form>
                    <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {blockVariants} custom = {1} className = "order-last md:w-2/5 mx-5 my-10 glass p-4 break-words">
                        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {textVariants} custom = {1}>
                            <div className = "flex flex-wrap justify-center items-center text-center">
                                {otherMeansString.map((char,idx) => {
                                    return <motion.span key = {idx} whileHover = {{scale: 1.5}} className = "flex font-bold text-4xl md:text-6xl">{char}</motion.span>
                                })}
                            </div>
                            <br />
                            <p className = "flex flex-col text-3xl md:text-4xl">
                                I can be found on most major platforms, simply lookup 
                                <br />
                                <br />
                                <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants}>
                                    <motion.h1 className = "flex justify-center items-center flex-wrap text-center text-4xl md:text-5xl">
                                        {nameString.map((char,idx) => {
                                            return <motion.strong key = {idx} whileHover = {{y: Math.round(Math.random()) ? -40 : 40}} className = "flex text-4xl md:text-5xl">{char}</motion.strong>
                                        })}
                                    </motion.h1>
                                </motion.div>
                                <br />
                                Direct links to some of my most notable profiles 
                                <br />
                                <br />
                                <div className = "flex flex-wrap justify-center space-x-4">
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.3}}} className = "py-2 px-1" href = "https://github.com/XDRAGON2002"><FaGithub size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.3}}} className = "py-2 px-1" href = "https://linkedin.com/in/anant-vijay-37650613a"><FaLinkedin size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.3}}} className = "py-2 px-1" href = "https://codeforces.com/profile/DRAGON2002"><SiCodeforces size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.3}}} className = "py-2 px-1" href = "https://www.codechef.com/users/dragon2002"><SiCodechef size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.3}}} className = "py-2 px-1" href = "https://www.hackerrank.com/DRAGON2002"><SiHackerrank size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.1}}} className = "py-2 px-1" href = "https://www.hackerearth.com/@anant422"><SiHackerearth size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.1}}} className = "py-2 px-1" href = "https://leetcode.com/DRAGON2002"><SiLeetcode size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.1}}} className = "py-2 px-1" href = "https://www.kaggle.com/dragon2002"><FaKaggle size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.1}}} className = "py-2 px-1" href = "https://stackoverflow.com/users/18444978/dragon2002"><FaStackOverflow size = {70}/></motion.a>
                                    <br />
                                    <motion.a initial = "initial" animate = "animate" exit = "exit" variants = {iconVariants} whileHover = {{scale: 1.2, transition: {duration: 0.1}}} className = "py-2 px-1" href = "https://medium.com/@anantvijay3"><FaMedium size = {70}/></motion.a>
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