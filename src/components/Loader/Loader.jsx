import './loader.css'

export const Loader = () => {
    return (
        <div className="lds-facebook m-auto mx-72">
            <div className='bg-black dark:bg-white'></div>
            <div className='bg-black dark:bg-white'></div>
            <div className='bg-black dark:bg-white'></div>
        </div>
    )
}