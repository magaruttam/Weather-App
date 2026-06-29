import search_icon from '../assets/images/icon-search.svg';
const SearchBar = () => {
    return (
        <div className='flex flex-col justify-between items-center px-2.5'>
            <div className='mb-16'>
                <h1 className='text-3xl font-bold tracking-wide'>How's the Sky looking today?</h1>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex gap-2 bg-[#25253F] px-4 py-2 rounded-md'>
                    <img src={search_icon} alt="Search Icon" />
                    <input type="text" placeholder="Search..." className='focus:outline-none focus:ring-0 w-md' />
                </div>

                <button className='bg-[#4657D9] p-2 rounded-md '>Search</button>

            </div>
        </div>
    )
}

export default SearchBar