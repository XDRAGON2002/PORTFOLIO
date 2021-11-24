import ExperienceCard from "./ExperienceCard"
import styles from "../styles/ExperienceCardList.module.css"

const ExperienceCardList = ({items}) => {

    return (
        <div className = {styles.container}>
            {items.map(item => (
                <ExperienceCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default ExperienceCardList