import {items} from "../../../data/blog.data"

const BlogPage = ({item}) => {

    return (
        <div className = "justify-center items-center text-center mx-5">
            <h1 className = "text-5xl">{item.title}</h1>
            <br />
            <h4 className = "text-4xl">{item.brief}</h4>
            <br />
            <p className = "text-2xl">{item.body}</p>
        </div>
    )
}

const getStaticProps = (context) => {

    const item = items[context.params.id - 1]
    return {
        props : {
            item
        }
    }
}

const getStaticPaths = () => {

    const ids = items.map(article => article.id)
    const paths = ids.map(id => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback : false
    }
}

export default BlogPage
export {getStaticProps}
export {getStaticPaths}