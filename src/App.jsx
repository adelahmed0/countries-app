import './App.css'
import {Header} from "./components/Header/Header.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return <>
        <Header/>
        <div className='dark:bg-gray-800 dark:text-white h-full mx-5'>
            <main className="container mx-auto">
                <Outlet/>
            </main>
        </div>
    </>
        ;
}

export default App
