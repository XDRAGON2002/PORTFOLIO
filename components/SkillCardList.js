import SkillCard from "./SkillCard"

const SkillCardList = ({items}) => {

    return (
        <div className = "flex flex-wrap glass md:mx-20">
            {items.map(item => (
                <SkillCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default SkillCardList