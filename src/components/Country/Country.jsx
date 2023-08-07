import './country.css'
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {filterByRegion, showAllCountries} from "../../features/countries/countriesAction.js";
import {initial} from '../../features/countries/countriesSlice.js'
import {Link} from 'react-router-dom'
import {Loader} from "../Loader/Loader.jsx";

export const Country = () => {
    const {countriesData, loading, success, error, region, searchQuery} = useSelector(state => state.country)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showAllCountries())

        if (error) {
            console.log(error)
        }
        if (region) {
            dispatch(filterByRegion(region))
        }
        return () => {
            dispatch(initial)
        }
    }, [dispatch, error, success, region]);

    const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchQuery))

    return (
        <section className="country-container mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-7">
            {loading ? <Loader/> : (
                data.length > 0 ? data.map((item, index) => {
                    return (
                        <Link to={`${item.cca2}`}
                              className="country-card rounded bg-white dark:bg-gray-900 pb-2 shadow-lg"
                              key={index}>
                            <img src={item?.flags?.png} alt={item.flags.alt} className="country-image"/>
                            <div className="country-content p-3 pb-0">
                                <h3 className='border-b text-2xl pb-3'>{item.name.common}</h3>
                                <p className='border-b pb-1'>
                                    Population: <span>{item.population}</span>
                                </p>
                                <p className='border-b pb-1'>
                                    Region: <span>{item.region}</span>
                                </p>
                                <p>
                                    Capital: <span>{item.capital}</span>
                                </p>
                            </div>
                        </Link>
                    )
                }) : <div>No Data</div>
            )}
        </section>
    );
}