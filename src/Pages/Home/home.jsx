import HomePage from "../../Components/HomePage/homePage";
import SideNAvBAr from "../../Components/SideNAvBar/sideNavBAr";
import "./home.css"

function Home({ sideNavBar }) {


    return (
        <div className="home">
            <SideNAvBAr sideNavBar={sideNavBar} />
            <HomePage />
        </div>
    )

}

export default Home;