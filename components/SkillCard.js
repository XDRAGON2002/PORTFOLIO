import styles from "../styles/SkillCard.module.css"

const SkillCard = ({item}) => {

    return (
        <div className = {styles.card}>
            {/* <h1>{item.id}</h1> */}
            <img src = {item.link} alt = {item.title}></img>
            {/* <h3>{item.title}</h3> */}
            {/* <p>{item.body}</p> */}
        </div>
    )
}

export default SkillCard