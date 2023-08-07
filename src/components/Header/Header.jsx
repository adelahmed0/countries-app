import './header.css'
import ThemeSwitcher from "../ThemeSwitcher.jsx";
export const Header = () => {
    return (
        <>
            <header className="header dark:bg-gray-900 shadow-lg dark:text-white">
                <div className='container mx-auto flex justify-between'>
                    <h1 className='text-2xl'>Where in the world?</h1>
                    <ThemeSwitcher/>
                </div>

            </header>
        </>
    );
}