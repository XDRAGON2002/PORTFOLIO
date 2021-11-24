import {items} from "../../../data/blog.data"
import styles from "../../../styles/BlogPage.module.css"

const BlogPage = ({item}) => {

    return (
        <div className = {styles.container}>
            <h1>{item.title}</h1>
            <h4>{item.brief}</h4>
            <p>{item.body}</p>
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