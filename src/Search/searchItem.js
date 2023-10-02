import React,{useState} from 'react'

const SearchItem = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <input type='text'
                onChange={(e) => { setSearch(e.target.value) }}
                placeholder='Search text' />
        </div>
    )
}

export default SearchItem