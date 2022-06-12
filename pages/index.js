import { motion } from "framer-motion"

const pageVariants = {
    initial: {opacity: 0, scale: 0.4},
    animate: {opacity: 1, scale: [0.8,1.2,1], transition: {delay: 0.2}},
    exit: {opacity: 0, scale: 0.4}
}

const Home = () => {

    const nameString = ['D', 'R', 'A', 'G', 'O', 'N']

    return (
        <motion.div initial = "initial" animate = "animate" exit = "exit" variants = {pageVariants} className = "flex justify-center items-center h-screen text-center mx-10">
            <div className = "glass px-10 py-10 my-auto mt-20 md:my-0">
                <div className = "" >
                    <h1 className = "flex justify-center items-center text-center text-6xl md:text-7xl">
                        Hi, I am
                    </h1>
                    <h1 className = "flex justify-center items-center text-center text-6xl md:text-7xl">
                        {nameString.map((char,idx) => {
                            return <motion.strong key = {idx} whileHover = {{y: Math.round(Math.random()) ? -40 : 40}} className = "flex text-5xl md:text-9xl">{char}</motion.strong>
                        })}  !
                    </h1>
                    <br/>
                    <p className = "text-3xl md:text-4xl">
                        <div>
                            I am a software developer and competitive coder currently studying at IIIT Gwalior
                        </div>
                        <br />
                        <div>
                            I am also the Content Head of Google Developers Student Club at my college (GDSC-IIITM)
                        </div>
                        <br />
                        <div>
                            I spend my time programming, binging shows, listening to songs and playing games
                        </div>
                        <br />
                        <br />
                        Welcome to my site ! Have a great time !
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Home