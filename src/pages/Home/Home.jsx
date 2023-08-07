import './home.css'
import {Search} from "../../components/Search/Search.jsx";
import {Filter} from "../../components/Filter/Filter.jsx";
import {Country} from "../../components/Country/Country.jsx";

export const Home = () => {
    return (
        <section className="home-page-container">
            <div className="input-container mt-5">
                <Search/>
                <Filter/>
            </div>
            <Country/>
        </section>
    );
}