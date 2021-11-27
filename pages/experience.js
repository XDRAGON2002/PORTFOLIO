import ExperienceCardList from "../components/ExperienceCardList"
import {items} from "../data/experience.data"

const experience = () => {

    return (
        <div className = "flex justify-center items-center text-center mx-10">
            <div>
                <h1 className = "font-bold text-5xl">EXPERIENCE</h1>
                <ExperienceCardList items = {items} />
            </div>
        </div>
    )
}

export default experience