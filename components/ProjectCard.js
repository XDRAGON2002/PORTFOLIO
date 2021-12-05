const ProjectCard = ({item,side}) => {

    return (
        <div className = "flex flex-wrap justify-center items-center text-center mx-2 my-20">
            <div className = {side ? "lg:order-first mx-10" : "lg:order-last mx-10"}>
                <div className = "glass p-5">
                    <h1 className = "text-4xl py-4">{item.title}</h1>
                    <div className = "flex justify-center items-center text-center">
                    {item.tech.map((tech,index) => (
                        <img className = "w-12 h-12 px-2 py-2 transform hover:scale-125" key = {index} src = {tech} alt = ""></img>
                    ))}
                    </div>
                    <br />
                    <a href = {item.link}>
                        <button className = "font-bold rounded-full border-solid border-2 border-white p-2 hover:bg-whitehue hover:text-blackhue">
                            CODE
                        </button>
                    </a>
                </div>
                <br />
                <br />
            </div>
            <div className = {side ? "w-1/2" : "w-1/2"}>
                <p className = "text-2xl">{item.body}</p>
                <br />
                <br />
            </div>
        </div>
    )
}

export default ProjectCard