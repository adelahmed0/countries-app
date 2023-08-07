import './filter.css'
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {initial, setRegion} from "../../features/countries/countriesSlice.js";

export const Filter = () => {
    const region = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (filter !== '') {
            dispatch(setRegion(filter.toLowerCase()))
        }
        return () => {
            dispatch(initial())
        }
    }, [dispatch, filter]);
    return (
        <section className="filter-container shadow-lg" onChange={(e) => setFilter(e.target.value)}>
            <select className="filter dark:bg-gray-900 rounded-xl focus:outline-none p-4">
                <option value='all'>All</option>
                {region.map((item, index) => {
                    return (<option value={`region/${item}`}
                                    key={index}>{item}</option>)
                })}

            </select>
        </section>
    );
}