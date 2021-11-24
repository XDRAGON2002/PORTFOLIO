import styles from "../styles/Contact.module.css"

const contact = () => {

    return (
        <div>
            <div className = {styles.container}>
            <h1>CONTACT</h1>
                <div>
                    <form className = {styles.card_left}>
                        <input type = "text" placeholder = "NAME"></input>
                        <br />
                        <input type = "email" placeholder = "EMAIL"></input>
                        <br />
                        <textarea placeholder = "MESSAGE"></textarea>
                        <br />
                        <button className = {styles.btn} type = "submit">SEND</button>
                    </form>
                    <div className = {styles.card_right}>
                        <h4>OTHER MEANS</h4>
                        <p>
                            I can be found on most major platforms, simply lookup 
                            <br />
                            <br />
                            <strong>DRAGON2002</strong>
                            <br />
                            <br />
                            Direct links to some of my most notable profiles 
                            <br />
                            <br />
                            {/* <a href = "mailto: anantvijay3@gmail.com">Email</a>
                            <br /> */}
                            <a href = "https://github.com/XDRAGON2002">GitHub</a>
                            <br />
                            <a href = "https://linkedin.com/in/anant-vijay-37650613a">LinkedIn</a>
                            <br />
                            <a href = "https://codeforces.com/profile/DRAGON2002">CodeForces</a>
                            <br />
                            <a href = "https://www.codechef.com/users/dragon2002">CodeChef</a>
                            <br />
                            <a href = "https://www.hackerrank.com/DRAGON2002">HackerRank</a>
                            <br />
                            <a href = "https://www.hackerearth.com/@anant422">HackerEarth</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact