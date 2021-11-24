import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {

    return (
        <nav className = {styles.nav}>
            <ul>
                <li>
                    <Link href = "/">ABOUT</Link>
                </li>
                <li>
                    <Link href = "/skills">SKILLS</Link>
                </li>
                <li>
                    <Link href = "/experience">EXPERIENCE</Link>
                </li>
                <li>
                    <Link href = "/projects">PROJECTS</Link>
                </li>
                <li>
                    <Link href = "/contact">CONTACT</Link>
                </li>
                <li>
                    <Link href = "/blog">BLOG</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar