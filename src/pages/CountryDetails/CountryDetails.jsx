import './countrydetails.css'
import {useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {searchByCode} from "../../features/countries/countriesAction.js";
import {initial} from "../../features/countries/countriesSlice.js";
import {Loader} from "../../components/Loader/Loader.jsx";
import {BsArrowLeft} from 'react-icons/bs'

export const CountryDetails = () => {
    const {loading, error, countrySearch} = useSelector((state) => state.country)
    const dispatch = useDispatch();
    const {code} = useParams()

    useEffect(() => {
        if (code) {
            dispatch(searchByCode(code.toLowerCase()))
        }
        if (error) {
            console.log(error)
        }
        return () => {
            dispatch(initial())
        }
    }, [dispatch, code, error]);

    useEffect(() => {
        if (!countrySearch || !countrySearch[0]?.name?.common) return;
        document.title = `Countries App | ${countrySearch[0]?.name?.common}`
        return () => {
            document.title = 'Countries App'
        }
    }, [countrySearch, code]);

    return (
        <section className="country-detail-container pt-10">
            <Link className="back-button bg-white rounded-xl dark:bg-gray-900 hover:border" to="/">
                <span className='mr-2 inline'><BsArrowLeft className='inline'/></span> Back
            </Link>

            <div className="country-detail-content grid sm:grid-cols-1 lg:grid-cols-2 md:gap-28">
                {loading && <Loader/>}
                {countrySearch.length > 0 && !loading && (
                    <>
                        <img src={countrySearch[0].flags.png} alt={countrySearch[0].flags.alt}
                             className="country-detail-image col-span-1 mt-10"/>
                        <div className="mt-6">
                            <h1>{countrySearch[0].name.common}</h1>
                            <div className="details mt-5 grid md:grid-cols-2 md:gap-5">
                                <div className="detail-left">
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Native Name:<span>{countrySearch[0].name.official}</span>
                                    </p>
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Population: <span>{countrySearch[0].population}</span>
                                    </p>
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Region: <span>{countrySearch[0].region}</span>
                                    </p>

                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Sub Region: <span>{countrySearch[0].subregion}</span>
                                    </p>
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Capital: <span>{countrySearch[0].capital}</span>
                                    </p>
                                </div>

                                <div className="detail-right">
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Top Level Domain: <span>{countrySearch[0].tld[0]}</span>
                                    </p>
                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Currencies:
                                        <span>{Object.values(countrySearch[0].currencies).map((item) => {
                                            return item.name
                                        }).join(',')}</span>
                                    </p>

                                    <p className='py-2 dark:bg-gray-900 rounded-md pl-1'>
                                        Languages:
                                        <span>{Object.values(countrySearch[0].languages).map((item) => {
                                            return item
                                        }).join(',')}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 mb-4 flex flex-wrap content-center">
                                <p>Border Countries:</p>
                                {countrySearch[0].borders ? (
                                    countrySearch[0].borders.map((item, index) => {
                                        return (
                                            <Link
                                                className='text-sm py-1 px-1 mx-2 bg-gray-200 dark:bg-gray-900 md:px-4 md:py-2 rounded-md hover:border'
                                                key={index} to={`/${item}`}>
                                                <span>{item}</span>
                                            </Link>
                                        )
                                    })
                                ) : (<span>No borders</span>)}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </section>
    )
}