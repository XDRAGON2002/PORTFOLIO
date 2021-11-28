import { DivEvent } from "tsparticles/Options/Classes/Interactivity/Events/DivEvent"

const Home = () => {

    return (
        <div className = "flex justify-center items-center h-screen text-center mx-10">
            <div className = "glass px-10 py-10 my-auto mt-20 md:my-0">
                <h1 className = "text-5xl">Hi, I am <strong>DRAGON</strong> !</h1>
                <br/>
                <p className = "text-2xl">
                    I am a software developer and competitive coder currently studying at IIIT Gwalior
                    <br />
                    I am also the Content Head of Google Developers Student Club at my college (GDSC-IIITM)
                    <br />
                    I spend my time programming, binging shows, listening to songs and playing games
                    <br />
                    <br />
                    Welcome to my site ! Have a great time !
                </p>
            </div>
        </div>
    )
}

export default Home