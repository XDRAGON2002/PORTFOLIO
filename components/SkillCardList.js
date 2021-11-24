import SkillCard from "./SkillCard"
import styles from "../styles/SkillCardList.module.css"

const SkillCardList = ({items}) => {

    return (
        <div className = {styles.container}>
            {items.map(item => (
                <SkillCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default SkillCardList