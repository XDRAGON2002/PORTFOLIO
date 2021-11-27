import ExperienceCard from "./ExperienceCard"

const ExperienceCardList = ({items}) => {

    return (
        <div className = "mx-20">
            {items.map(item => (
                <ExperienceCard key = {item.id} item = {item} />
            ))}
        </div>
    )
}

export default ExperienceCardList