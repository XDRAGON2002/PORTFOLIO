import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, scale: 0.4},
    animate: {opacity: 1, scale: [0.8,1.2,1], transition: {delay: 0.2}},
    exit: {opacity: 0, scale: 0.4}
}

const textVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale:[0.8,1.2,0.9,1.1,1], transition: {delay: 0.8}},
    exit: {opacity: 0, scale: 1}
}

const Home = () => {

    const name = ['D', 'R', 'A', 'G', 'O', 'N']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} className = "flex justify-center items-center h-screen text-center mx-10">
            <div className = "glass px-10 py-10 my-auto mt-20 md:my-0">
                <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {textVariants} className = "" >
                    <h1 className = "flex justify-center items-center flex-wrap text-center text-6xl md:text-7xl">
                        Hi, I am  {name.map((char,idx) => {
                            return <motion.strong key = {idx} whileHover = {{y: Math.round(Math.random()) ? -40 : 40}} className = "flex text-5xl md:text-9xl">{char}</motion.strong>
                        })}  !
                    </h1>
                    <br/>
                    <p className = "text-3xl md:text-4xl">
                        I am a software developer and competitive coder currently studying at IIIT Gwalior
                        <br />
                        I am also the Content Head of Google Developers Student Club at my college (GDSC-IIITM)
                        <br />
                        I spend my time programming, binging shows, listening to songs and playing games
                        <br />
                        <br />
                        Welcome to my site ! Have a great time !
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home