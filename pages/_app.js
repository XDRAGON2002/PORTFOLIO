import Layout from '../components/Layout'
import Particles from 'react-particles-js'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <Particles id="particles-js" params={{
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#00FF00'
                        // value: '#FFF'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    move: {
                        speed: 0.2,
                        bounce : false
                    },
                    line_linked: {
                        enable: true,
                        distance: 50,
                        color: "#127205",
                        // color: "#FFF",
                        opacity: 1,
                        width: 1
                    },
                }    
            }} />
        </div>
    )
}

export default MyApp
