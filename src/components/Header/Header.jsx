import './header.css'
import ThemeSwitcher from "../ThemeSwitcher.jsx";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="header dark:bg-gray-900 shadow-lg dark:text-white">
                <div className='container mx-auto flex justify-between'>
                    <Link to='/' className='text-2xl'>Where in the world?</Link>
                    <ThemeSwitcher/>
                </div>

            </header>
        </>
    );
}