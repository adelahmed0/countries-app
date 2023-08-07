import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CountryDetails} from "./pages/CountryDetails/CountryDetails.jsx";
import {Home} from "./pages/Home/Home.jsx";
import {store} from "./app/store.js";
import {Provider} from 'react-redux'

const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {index: true, path: '/', element: <Home/>},
            {path: '/:code', element: <CountryDetails/>}
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    </React.StrictMode>,
)
