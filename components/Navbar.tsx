import { useState, useEffect } from "react"
import Link from "next/link"
import {
    GiHamburgerMenu,
    GiSkills
} from "react-icons/gi"
import {
    RxCross1
} from "react-icons/rx"
import {
    FaHome,
    FaCode,
    FaPenNib,
    FaInfo
} from "react-icons/fa"
import {
    MdWork
} from "react-icons/md"

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", function() {
            if (this.scrollY >= 80) setScroll(true)
            else setScroll(false)   
        })
    }, [])

    return (
        <>
            <header className={`py-10 sticky top-0 z-50 shadow-green-400 ${scroll ? "shadow-sm" : ""}`}>
                <nav className="hidden md:block md:flex md:justify-between md:mx-32 md:items-center">
                    <Link className="font-medium text-2xl" href="/">DRAGON</Link>
                    <div className="">
                        <ul className="flex font-medium">
                            <li className="px-2">
                                <Link href="#home">Home</Link>
                            </li>
                            <li className="px-2">
                                <Link href="#about">About</Link>
                            </li>
                            <li className="px-2">
                                <Link href="#skills">Skills</Link>
                            </li>
                            <li className="px-2">
                                <Link href="#experience">Experience</Link>
                            </li>
                            <li className="px-2">
                                <Link href="#projects">Projects</Link>
                            </li>
                            <li className="px-2">
                                <Link href="#blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="block md:hidden justify-between mx-16">
                    <div className="flex justify-between">
                        <Link className="font-medium text-2xl" href="/">DRAGON</Link>
                        <button onClick={() => setOpen(!open)}>{open ? <RxCross1 size={25} /> : <GiHamburgerMenu size={25} />}</button>
                    </div>
                    {open && <div className="mt-12 top-0 z-50">
                        <ul className="grid grid-cols-3 gap-y-4 font-medium" onClick={() => setOpen(!open)}>
                            <li className="px-2">
                                <Link href="#home">
                                    <div className="flex flex-col justify-center items-center">
                                        <FaHome size={25} />
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="#about">
                                    <div className="flex flex-col justify-center items-center">
                                        <FaInfo size={25} />
                                        About
                                    </div>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="#skills">
                                    <div className="flex flex-col justify-center items-center">
                                        <GiSkills size={25} />
                                        Skills
                                    </div>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="#experience">
                                    <div className="flex flex-col justify-center items-center">
                                        <MdWork size={25} />
                                        Experience
                                    </div>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="#projects">
                                    <div className="flex flex-col justify-center items-center">
                                        <FaCode size={25} />
                                        Projects
                                    </div>
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link href="#blog">
                                    <div className="flex flex-col justify-center items-center">
                                        <FaPenNib size={25} />
                                        Blog
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>}
                </nav>
            </header>
        </>
    )
}

export default Navbar