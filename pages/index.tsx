import Head from 'next/head'
import { 
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaNodeJs,
 } from "react-icons/fa"
 import { 
	SiHashnode,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiGnubash,
	SiC,
	SiCplusplus,
	SiReact,
	SiNextdotjs,
	SiGatsby,
	SiStreamlit,
	SiRedux,
	SiFramer,
	SiTailwindcss,
	SiMaterialui,
	SiChakraui,
	SiBootstrap,
	SiExpress,
	SiDjango,
	SiFlask,
	SiApollographql,
	SiGraphql,
	SiFastapi,
	SiFirebase,
	SiSupabase,
	SiPostgresql,
	SiMysql,
	SiSqlite,
	SiMongodb,
	SiRedis,
	SiPrisma,
	SiTensorflow,
	SiPytorch,
	SiKeras,
	SiScikitlearn,
	SiOpencv,
	SiDocker,
	SiKubernetes,
	SiJenkins,
	SiTerraform,
	SiAnsible,
	SiGithubactions,
	SiGooglecloud,
	SiAmazonaws,
	SiLatex,
	SiUbuntu,
	SiLinux,
	SiKalilinux,
	SiNumpy,
	SiPandas,
	SiScipy,
	SiJest,
	SiPytest,
	SiHeroku,
	SiNetlify,
	SiVercel,
	SiBabel,
	SiFigma,
	SiCanva,
	SiPostman,
	SiGit,
	SiDigitalocean,
	SiGithub,
	SiGoland,
	SiGmail,
 } from "react-icons/si"
import {
	BsChevronDoubleDown
} from "react-icons/bs"
import {
	SlCalender
} from "react-icons/sl"

const Home = () => {

	return (
		<div>
			<Head>
				<title>Anant Vijay Portfolio</title>
				<meta name="description" content="Portfolio for Anant Vijay" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<a id="home"></a>
			<div>
				<div className="pt-16 md:mx-32 md:pt-44">
					<div className="md:flex md:justify-between">
						<div>
							<div className="flex space-x-4 justify-center mb-16 md:flex md:flex-col md:space-y-4 md:items-center md:my-16 md:mx-5">
								<a className="ml-4" href="https://github.com/XDRAGON2002">
									<FaGithub size={25} />
								</a>
								<a href="https://twitter.com/dragox2002">
									<FaTwitter size={25} />
								</a>
								<a href="https://www.linkedin.com/in/anantvijay2002/">
									<FaLinkedin size={25} />
								</a>
								<a href="https://hashnode.com/@DRAGON2002">
									<SiHashnode size={25} />
								</a>
								<a href="mailto:anantvijay3@gmail.com">
									<SiGmail size={25} />
								</a>
							</div>
						</div>
						<div className="items-center mx-12 grow flex flex-col md:items-start">
							<h1 className="text-6xl flex items-center font-bold mb-4">
								Anant Vijay
							</h1>
							<h1 className="text-2xl mb-4 text-green-400">
								Software Developer
							</h1>
							<p className="mb-12">
								I'm Anant Vijay, a software developer that likes to be referred to by my moniker "DRAGON"
								<br />
								I am a Full Stack Web Developer that loves tinkering with Artificial Intelligence and Machine Learning and am also a DevOps enthusiast
								<br />
								I'm also an avid Open Source contributor, write Technical Blogs and give talks at various events about my journey and mentor newcomers
							</p>
							<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold" href="mailto:anantvijay3@gmail.com">
								Say Hello
							</a>
						</div>
					</div>
					<div className="">
						<a className="flex justify-center mt-20 space-x-4 items-center" href="#about">
							<BsChevronDoubleDown />
							<div>Scroll down</div>
							<BsChevronDoubleDown />
						</a>
					</div>
				</div>
			</div>


			<a id="about"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">About Me</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Introduction</h1>
					<div className="flex flex-col space-y-12 md:space-x-32 justify-center items-center md:items-start md:flex-row">
						<img className="h-72 w-72 rounded-xl" src="DP.jfif" />
						<div className="flex flex-col space-y-20 justify-center items-center grow mx-12 md:items-start">
							<p>
								I'm well versed in the technical domains of AI/ML, Web Development and DevOps.
								<br />
								I'm willing to collaborate together on Open Source projects, am also interested in mentoring people that need help in tech and also like to give technical talks at various tech events, communities and conferences.
								<br />
								Feel free to reach out to me in case of any internship or job opportunites as well. Would also be willing to work as a freelancer too.
							</p>
							<a className="bg-green-500 text-white p-4 flex w-44 text-1xl rounded-xl justify-around font-semibold" download href="https://drive.google.com/file/d/1wvpjHkoZ0OizXjyO4gIg50rVbZZYRR5G/view?usp=share_link">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>


			<a id="skills"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Skills</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Technical Skills</h1>
					<div className="grid grid-cols-4 md:grid-cols-12 gap-x-8 gap-y-8">
						<SiPython size={50} />
						<SiJavascript size={50} />
						<SiTypescript size={50} />
						<SiGoland size={50} />
						<SiC size={50} />
						<SiCplusplus size={50} />
						<SiGnubash size={50} />
						<SiReact size={50} />
						<SiNextdotjs size={50} />
						<SiGatsby size={50} />
						<SiStreamlit size={50} />
						<SiRedux size={50} />
						<SiFramer size={50} />
						<SiTailwindcss size={50} />
						<SiMaterialui size={50} />
						<SiChakraui size={50} />
						<SiBootstrap size={50} />
						<SiExpress size={50} />
						<SiDjango size={50} />
						<SiFlask size={50} />
						<SiApollographql size={50} />
						<SiGraphql size={50} />
						<FaNodeJs size={50} />
						<SiFastapi size={50} />
						<SiFirebase size={50} />
						<SiSupabase size={50} />
						<SiPostgresql size={50} />
						<SiMysql size={50} />
						<SiSqlite size={50} />
						<SiMongodb size={50} />
						<SiRedis size={50} />
						<SiPrisma size={50} />
						<SiTensorflow size={50} />
						<SiPytorch size={50} />
						<SiKeras size={50} />
						<SiScikitlearn size={50} />
						<SiOpencv size={50} />
						<SiDocker size={50} />
						<SiKubernetes size={50} />
						<SiJenkins size={50} />
						<SiTerraform size={50} />
						<SiAnsible size={50} />
						<SiGithubactions size={50} />	
						<SiGooglecloud size={50} />
						<SiAmazonaws size={50} />
						<SiLatex size={50} />
						<SiUbuntu size={50} />
						<SiLinux size={50} />
						<SiKalilinux size={50} />
						<SiNumpy size={50} />
						<SiPandas size={50} />
						<SiScipy size={50} />
						<SiJest size={50} />
						<SiPytest size={50} />
						<SiHeroku size={50} />
						<SiNetlify size={50} />
						<SiVercel size={50} />
						<SiBabel size={50} />
						<SiFigma size={50} />
						<SiCanva size={50} />
						<SiPostman size={50} />
						<SiGit size={50} />
						<SiDigitalocean size={50} />
						<SiGithub size={50} />
					</div>
				</div>
			</div>


			<a id="experience"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Experience</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Work So Far</h1>
					<div className="flex flex-col ml-6">
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="GSOC.png" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">GSoC Contributor</h1>
								<h1 className="text-2xl mb-4 text-green-400">Intel, Python Software Foundation</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>May 2022 - September 2022</div></h1>
								</div>
							</div>
						</div>	
						<div className="flex space-x-8 md:space-x-32 my-8">
							<div className="">
								<div className="inline-block h-16 w-16 rounded-full">
									<img className="h-16 w-16 rounded-full" src="DIGIPPLUS.jfif" />
								</div>
								<div className="block w-1 h-full bg-green-400 ml-7"></div>
							</div>
							<div>
								<h1 className="text-2xl mb-4">SDE Intern</h1>
								<h1 className="text-2xl mb-4 text-green-400">Digipplus</h1>
								<div>
									<h1 className="flex space-x-4 items-center"><SlCalender /><div>October 2021 - November 2021</div></h1>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>


			<a id="projects"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Projects</h1>
					<h1 className="text-2xl mb-4 text-green-400">Things I've Created</h1>
					<div className="grid grid-cols-1 gap-y-8">
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Quote Voter</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Application created using the T3 tech stack which uses the tRPC protocol to develope type safe APIs using TypeScript. The application allows multiple users to log into and vote amongst themselves to determine what the best quote is.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/quote-voter-t3">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Gray Image Colorizer</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Created a Deep Learning model that can convert grayscale images to their colored counterparts. Utilized Deep Convolutional Conditional Generative Adversarial Networks (DC-GAN) in order to achieve this. Applied various GAN optimizations to improve model efficiency, training time and required data by over 80%.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/coloring-GAN">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Fake News Predictor</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Application to predict if the provided news is true or false Utilizes BERT transformer model with accuracy of 98% to identify fake news headings Consists of an user friendly UI which is also efficient at the same time.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/Fake-News-Predictor">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Never Waste</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								The proposed solution for the GDSC Solution Challenge 2022, which aims to end world hunger by allowing easy sharing of food that can be consumed by others. Utilizes a CNN model with accuracy of 90% to identify food items. Consists of an attractive UI which is aimed at improving user access.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/never-waste">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Game Recommendation System</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								A basic game recommendation system based on non modeling approach. Used basic concept of NLP in order to implement the entire system from scratch. Highly efficient and accurate.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/game-recommendation-system">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Augmented Reality Sudoku Solver</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Augmented Reality sudoku solver that provides realtime solving of sudoku. Trained a Convolutional Neural Network with 99 percent accuracy to interpret digits. Used OpenCV for image processing. Implemented sudoku solver using backtracking.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/sudoku-solver-AR">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Internship Tracker</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Gathers all the internships from numerous sites at a single location for ease of access. Used scheduled web scraping and automation. Handled and maintained database for making API calls.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/InternTracker">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Shadow Gym App</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Application to predict if the provided news is true or false UtilizesGym exercise log for users to track their activities. Created front end using React, styled using Bootstrap, MongoDB for database and Express for backend and API, hosted on netlify.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/SHADOW-GYM-FRONTEND">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Clothing Recommender</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Provides suggestions to user based on the image provided by the user. Trained a K Nearest Neighbour Model with 86 percent accuracy as well a Convolutional Neural Network with 88 percent accuracy in order to achieve this.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/CLOTHING-IDENTIFIER">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Entertainment Center</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Maze solver, Maze/Level creator, Drawing and colouring board, Colour matcher game, Snake game, Top down shooter game, Sudoku solver, Guessing game, Hangman game, Pong game, Rock paper scissor game Created using algorithms such as A Star Path Finding Algorithm and Backtracking.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/ENTERTAINMENT-CENTER">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Portfolio Website</h1>
							{/* <div className="flex space-x-2 items-center justify-center">
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
								<img className="h-8 w-8 rounded-full" src="DP.jfif" />
							</div> */}
							<p className="">
								Personal portfolio website. Created using NextJS and hosted on Vercel.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/XDRAGON2002/PORTFOLIO">View</a>
							</div>
						</div>
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://github.com/XDRAGON2002">View All</a>
				</div>
			</div>


			<a id="blog"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Blog</h1>
					<h1 className="text-2xl mb-4 text-green-400">Blogs I've Written</h1>
					<div className="mx-12">
						I am also an active Technical Blog writer, I try to post blogs every week
						<br />
						I aim to write blogs covering all technical concepts that I know in an extremely beginner friendly manner that even experienced developers could learn somethings from
						<br />
						Feel free to checkout my blog page linked below
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://dragon2002.hashnode.dev">Read Here</a>
				</div>
			</div>

			<footer>
				<div className="pt-28 md:mx-32 mb-16 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Anant Vijay</h1>
					<h1 className="text-2xl mb-4 text-green-400">Reach Out</h1>
					<div className="flex space-x-4 items-center my-16 mx-5">
						<a href="https://github.com/XDRAGON2002">
							<FaGithub size={25} />
						</a>
						<a href="https://twitter.com/dragox2002">
							<FaTwitter size={25} />
						</a>
						<a href="https://www.linkedin.com/in/anantvijay2002/">
							<FaLinkedin size={25} />
						</a>
						<a href="https://hashnode.com/@DRAGON2002">
							<SiHashnode size={25} />
						</a>
						<a href="mailto:anantvijay3@gmail.com">
							<SiGmail size={25} />
						</a>
					</div>
					<h1>All rights reserved</h1>
				</div>
			</footer>
		</div>
	)
}

export default Home
