import SkillCardList from "../components/SkillCardList"
import {items} from "../data/skills.data"

const skills = () => {

    return (
        <div className = "flex justify-center items-center text-center mx-10">
            <div>
                <h1 className = "font-bold text-5xl">TECH STACK</h1>
                <br />
                <SkillCardList items = {items} />
            </div>
        </div>
    )
}

export default skills