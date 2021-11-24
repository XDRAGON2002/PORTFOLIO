import BlogCardList from "../../components/BlogCardList"
import {items} from "../../data/blog.data"
import styles from "../../styles/Blog.module.css"

const blog = () => {

    return (
        <div className = {styles.container}>
            <h1>BLOG</h1>
            <h4>Stay Tuned In For The Upcoming Blogs !</h4>
            <BlogCardList items = {items} />
        </div>
    )
}

export default blog