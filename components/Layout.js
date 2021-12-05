import Head from 'next/head'
import Navbar from "./Navbar"

const Layout = ({children}) => {

    return (
        <div className = "">
            <Head>
                <title>PORTFOLIO DRAGON2002</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Navbar />
            <div className = "">
                {children}
            </div>
        </div>
    )
}

export default Layout