import Link from "next/link"
import styles from "../styles/BlogCard.module.css"

const BlogCard = ({item}) => {

    return (
        <div className = {styles.card}>
            <Link href = {`/blog/${item.id}`}>
                <div>
                    <h1>{item.title}</h1>
                    <h4>{item.brief}</h4>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard