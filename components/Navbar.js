import Link from "next/link"

const Navbar = () => {

    return (
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
            </ul>
        </nav>
    )
}

export default Navbar