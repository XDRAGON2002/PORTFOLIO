import BlogCardList from "../../components/BlogCardList"
import {items} from "../../data/blog.data"

const blog = () => {

    return (
        <div className = "flex justify-center items-center text-center mx-5">
            <div>
                <br />
                <br />
                <h1 className = "font-bold text-5xl">BLOG</h1>
                <br />
                <h4 className = "text-3xl">Stay Tuned In For The Upcoming Blogs !</h4>
                <BlogCardList items = {items} />
            </div>
        </div>
    )
}

export default blog