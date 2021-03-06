import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const [show,setShow] = useState(false)

    const handleShow = () => {

        setShow(!show)
    }

    return (
        <div className = "sticky top-0 glass relative z-10">
            <nav className = "hidden my-4 mx-4 text-lg font-semibold md:block">
                <ul className = "flex justify-end">
                    <li className = "mx-2">
                        <Link href = "/">
                            <div className = "flex cursor-pointer">
                                ABOUT &#160;
                                <img src="icons/home.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/skills">
                            <div className = "flex cursor-pointer">
                                SKILLS &#160;
                                <img src="icons/resume.png"/>
                            </div>
                        </Link>
                    </li >
                    <li className = "mx-2">
                        <Link href = "/experience">
                            <div className = "flex cursor-pointer">
                                EXPERIENCE &#160;
                                <img src="icons/internship.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/projects">
                            <div className = "flex cursor-pointer">
                                PROJECTS &#160;
                                <img src="icons/group-of-projects.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/contact">
                            <div className = "flex cursor-pointer">
                                CONTACT &#160;
                                <img src="icons/contact-card.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/blog">
                            <div className = "flex cursor-pointer">
                                BLOG &#160;
                                <img src="icons/blog.png"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className = "block flex justify-end md:hidden">
                {!show && <button className = "my-4 mx-6 text-lg font-semibold" onClick = {handleShow}><img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"/></button>}
                {show && <nav className = "my-4 mx-6 text-lg font-semibold">
                <ul className = "flex flex-col items-end justify-end" onClick = {handleShow}>
                    <button className = "mx-2 text-lg font-semibold"><img src="icons/close-window.png"/></button>
                    <li className = "mx-2 my-1">
                        <Link href = "/">
                            <div className = "flex">
                                ABOUT &#160;
                                <img src="icons/home.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/skills">
                            <div className = "flex">
                                SKILLS &#160;
                                <img src="icons/resume.png"/>
                            </div>
                        </Link>
                    </li >
                    <li className = "mx-2 my-1">
                        <Link href = "/experience">
                            <div className = "flex">
                                EXPERIENCE &#160;
                                <img src="icons/internship.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/projects">
                            <div className = "flex">
                                PROJECTS &#160;
                                <img src="icons/group-of-projects.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/contact">
                            <div className = "flex">
                                CONTACT &#160;
                                <img src="icons/contact-card.png"/>
                            </div>
                        </Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/blog">
                            <div className = "flex">
                                BLOG &#160;
                                <img src="icons/blog.png"/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>}
            </div>
        </div>
    )
}

export default Navbar