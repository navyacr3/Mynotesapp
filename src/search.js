import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
function Search({handleSearchNote}) {
    return (
        <div className='search'>
            <AiOutlineSearch size='1.3em' />
            <input type="text" onChange={(event) => handleSearchNote(event.target.value)} placeholder='Search your Notes.....' />
        </div>
    )
}

export default Search
