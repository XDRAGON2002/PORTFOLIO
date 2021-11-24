import styles from "../styles/ProjectCard.module.css"

const ProjectCard = ({item,side}) => {


    return (
        <div className = {styles.card}>
            <div className = {side ? styles.card_left : styles.card_right}>
                <h1>{item.title}</h1>
                {item.tech.map((tech,index) => (
                    <img className = {styles.image} key = {index} src = {tech} alt = ""></img>
                ))}
                <br />
                <a href = {item.link}>
                    <button className = {styles.btn}>
                        View Code
                    </button>
                </a>
            </div>
            <div className = {side ? styles.card_right : styles.card_left}>
                <p className = {styles.para}>{item.body}</p>
            </div>
        </div>
    )
}

export default ProjectCard