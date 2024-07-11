import {ChildProps} from "../../../types";
import Navbar from "../../(root)/_components/navbar";
import Footer from "../../(root)/_components/footer";

function Layout({children}: ChildProps) {
    return (
        <main>
            <Navbar/>
            <div className={'container'}>{children}</div>
            <Footer/>
        </main>
    )
}

export default Layout