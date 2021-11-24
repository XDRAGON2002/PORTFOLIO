import styles from "../styles/ExperienceCard.module.css"

const ExperienceCard = ({item}) => {

    return (
        <div className = {styles.card}>
            <h1>{item.title}</h1>
            <h2>{item.location}</h2>
            <p className = {styles.para}>{item.duration}</p>
        </div>
    )
}

export default ExperienceCard