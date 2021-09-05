import React from 'react'
import SelectPosts from './SelectPosts'
import SearchPost from './SearchPost'

const Header = (props) => {
    const {select, handleSelect, search, handleSearch} = props

    return (
        <div className="row mt-3">
            <div className="col-md-6">
                <SelectPosts select={select} handleSelect={handleSelect} />
            </div>
            <div className="col-md-6">
                <SearchPost search={search} handleSearch={handleSearch} />
            </div>           
            
        </div>
    )
}

export default Header