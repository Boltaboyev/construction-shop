import {Outlet} from "react-router-dom"

import Footer from "../../components/footer"
import Header from "../../components/header"

const UserLayout = () => {
    return (
        <div>
            {/* header */}
            <Header />

            <main>
                <div className="container2">
                    <Outlet />
                </div>
            </main>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default UserLayout
