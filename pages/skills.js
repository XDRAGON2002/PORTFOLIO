import SkillCardList from "../components/SkillCardList"
import {languages,web_dev,database_systems,machine_learning,devops_cloud,tools} from "../data/skills.data"

const skills = () => {

    return (
        <div className = "flex justify-center items-center text-center mx-10">
            <div className = "">
                <br />
                <br />
                <h1 className = "font-bold text-5xl">TECH STACK</h1>
                <br />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">LANGUAGES</h1>
                <br />
                <SkillCardList items = {languages} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">WEB DEVELOPMENT</h1>
                <br />
                <SkillCardList items = {web_dev} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">DATABASE SYSTEMS</h1>
                <br />
                <SkillCardList items = {database_systems} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">MACHINE LEARNING</h1>
                <br />
                <SkillCardList items = {machine_learning} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">DEVOPS / CLOUD</h1>
                <br />
                <SkillCardList items = {devops_cloud} />
                <br />
                <br />
                <h1 className = "font-bold text-4xl">TECHNOLOGIES</h1>
                <br />
                <SkillCardList items = {tools} />
                <br />
                <br />
            </div>
        </div>
    )
}

export default skills