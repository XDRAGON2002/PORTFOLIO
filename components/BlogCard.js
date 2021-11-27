import Link from "next/link"

const BlogCard = ({item}) => {

    return (
        <div className = "mx-20 my-20 px-10 py-10 glass cursor-pointer">
            <Link href = {`/blog/${item.id}`}>
                <div>
                    <h1 className = "text-4xl">{item.title}</h1>
                    <br />
                    <h4 className = "text-2xl">{item.brief}</h4>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard