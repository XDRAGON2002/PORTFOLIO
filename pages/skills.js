import SkillCardList from "../components/SkillCardList"
import {items} from "../data/skills.data"
import styles from "../styles/Skills.module.css"

const skills = () => {

    return (
        <div className = {styles.container}>
            <h1>TECH STACK</h1>
            <SkillCardList items = {items} />
        </div>
    )
}

export default skills