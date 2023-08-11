import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = ({ children }) => {
    return (
        <>
            <div className="main max-w-[1440px] mx-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
