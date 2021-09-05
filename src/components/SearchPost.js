import React  from 'react'

const SearchPost = (props) => {
    const {search, handleSearch} = props
    // const [search, setSearch] = useState('')

    

    return (
        <input type="text" 
               className="form-control sm-2"
               value={search} 
               onChange={handleSearch} 
               placeholder="Search" 
               aria-label="Search"
        />
    )
} 

export default SearchPost