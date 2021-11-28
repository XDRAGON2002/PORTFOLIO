import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const [show,setShow] = useState(false)

    const handleShow = () => {

        setShow(!show)
    }

    return (
        <div className = "sticky top-0 glass relative z-10">
            <nav className = "hidden my-4 mx-4 text-1xl md:block">
                <ul className = "flex justify-end">
                    <li className = "mx-2">
                        <Link href = "/">ABOUT</Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/skills">SKILLS</Link>
                    </li >
                    <li className = "mx-2">
                        <Link href = "/experience">EXPERIENCE</Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/projects">PROJECTS</Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/contact">CONTACT</Link>
                    </li>
                    <li className = "mx-2">
                        <Link href = "/blog">BLOG</Link>
                    </li>
                    {/* <button className = "mx-2" onClick = {handleHamburger}>HAMBURGER</button> */}
                </ul>
            </nav>
            <div className = "block flex justify-end md:hidden">
                {!show && <button className = "my-4 mx-6 text-1xl" onClick = {handleShow}><img src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"/></button>}
                {show && <nav className = "my-4 mx-6 text-1xl">
                <ul className = "flex flex-col items-end justify-end">
                    <button className = "mx-2 text-1xl" onClick = {handleShow}><img src="https://img.icons8.com/material-rounded/24/ffffff/close-window.png"/></button>
                    <li className = "mx-2 my-1">
                        <Link href = "/">ABOUT</Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/skills">SKILLS</Link>
                    </li >
                    <li className = "mx-2 my-1">
                        <Link href = "/experience">EXPERIENCE</Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/projects">PROJECTS</Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/contact">CONTACT</Link>
                    </li>
                    <li className = "mx-2 my-1">
                        <Link href = "/blog">BLOG</Link>
                    </li>
                </ul>
            </nav>}
            </div>
        </div>
    )
}

export default Navbar