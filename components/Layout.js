import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {

    return (
        <div>
            <Head>
                <title>SITE</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout