import ExperienceCardList from "../components/ExperienceCardList"
import {items} from "../data/experience.data"
import styles from "../styles/Experience.module.css"

const experience = () => {

    return (
        <div className = {styles.container}>
            <h1>EXPERIENCE</h1>
            <ExperienceCardList items = {items} />
        </div>
    )
}

export default experience