import SkillCard from "./SkillCard"

const SkillCardList = ({items}) => {

    return (
        <div className = "flex flex-wrap mx-20 glass">
            {items.map(item => (
                <SkillCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default SkillCardList