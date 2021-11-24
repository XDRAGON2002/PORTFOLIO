import BlogCard from "./BlogCard"

const BlogCardList = ({items}) => {

    return (
        <div>
            {items.map(item => (
                <BlogCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default BlogCardList