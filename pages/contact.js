import {FaGithub,FaLinkedin} from "react-icons/fa"
import {SiCodeforces,SiCodechef,SiHackerrank,SiHackerearth} from "react-icons/si"

const contact = () => {

    return (
        <div>
            <div className = "text-center">
                <h1 className = "font-bold text-5xl">CONTACT</h1>
                <br />
                <div className = "flex flex-wrap justify-center item-center text-center">
                    <form className = "order-first w-2/5 mx-5 glass p-4">
                        <input className = "text-2xl font-semibold rounded-md m-5 p-5 px-20 bg-transparent outline-none text-whitehue focus:bg-whitehue focus:text-blackhue" type = "text" placeholder = "NAME"></input>
                        <br />
                        <input className = "text-2xl font-semibold rounded-md m-5 p-5 px-20 bg-transparent outline-none text-whitehue focus:bg-whitehue focus:text-blackhue" type = "email" placeholder = "EMAIL"></input>
                        <br />
                        <textarea className = "text-2xl font-semibold rounded-md overflow-hidden m-5 p-5 px-20 bg-transparent outline-none text-whitehue focus:bg-whitehue focus:text-blackhue" placeholder = "MESSAGE"></textarea>
                        <br />
                        <button className = "font-bold rounded-md border-solid border-2 border-white p-2 hover:bg-whitehue hover:text-blackhue" type = "submit">SEND</button>
                    </form>
                    <div className = "order-last w-2/5 mx-5 glass p-4">
                        <h4 className = "text-4xl">OTHER MEANS</h4>
                        <br />
                        <p className = "text-2xl">
                            I can be found on most major platforms, simply lookup 
                            <br />
                            <br />
                            <strong>DRAGON2002</strong>
                            <br />
                            <br />
                            Direct links to some of my most notable profiles 
                            <br />
                            
                            <br />
                            <div className = "flex justify-center space-x-4">
                                <a href = "https://github.com/XDRAGON2002"><FaGithub size = {70}/></a>
                                <br />
                                <a href = "https://linkedin.com/in/anant-vijay-37650613a"><FaLinkedin size = {70}/></a>
                                <br />
                                <a href = "https://codeforces.com/profile/DRAGON2002"><SiCodeforces size = {70}/></a>
                                <br />
                                <a href = "https://www.codechef.com/users/dragon2002"><SiCodechef size = {70}/></a>
                                <br />
                                <a href = "https://www.hackerrank.com/DRAGON2002"><SiHackerrank size = {70}/></a>
                                <br />
                                <a href = "https://www.hackerearth.com/@anant422"><SiHackerearth size = {70}/></a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact