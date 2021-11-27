const ExperienceCard = ({item}) => {

    return (
        <div className = "mx-20 my-20 px-10 py-10 glass">
            <h1 className = "text-4xl py-3">{item.title}</h1>
            <h2 className = "text-3xl py-3">{item.location}</h2>
            <p className = "text-2xl py-3">{item.duration}</p>
        </div>
    )
}

export default ExperienceCard