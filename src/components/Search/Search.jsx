import './search.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {setSearchQuery} from "../../features/countries/countriesSlice.js";

export const Search = () => {
    const {searchQuery} = useSelector(state => state.country)
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value.toLowerCase()))
    }
    return (
        <section className="search-container rounded-2xl bg-white dark:bg-gray-900 px-4 shadow-lg">
            <div className="search-icon">
                <span><AiOutlineSearch/></span>
            </div>

            <input
                type="text"
                placeholder="Search for a country"
                className="search-input dark:bg-gray-900"
                value={searchQuery}
                onChange={handleSearch}
            />
        </section>
    );
}