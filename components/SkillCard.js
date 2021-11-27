const SkillCard = ({item}) => {

    return (
        <div className = "flex-grow mx-3 my-3 transform hover:scale-125">
            {/* <h1>{item.id}</h1> */}
            <img src = {item.link} alt = {item.title} className = "h-24 w-24 mx-auto"></img>
            {/* <h3>{item.title}</h3> */}
            {/* <p>{item.body}</p> */}
        </div>
    )
}

export default SkillCard