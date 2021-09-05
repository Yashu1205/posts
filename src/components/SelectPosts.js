import React from 'react'

const SelectPosts = (props) => {
    const {select, handleSelect} = props
    return (
        <div className="form-group">
            <select className="form-control" value={select} onChange={handleSelect} >
                <option value="" >Select Liked or Disliked Posts</option>
                <option value="liked" >Liked Posts</option>
                <option value="disliked" >Disliked Posts</option>
            </select>
        </div>
        // <select className="form-control" value={select} onChange={handleSelect} >
        //     <option value="" >Select Liked or Disliked Posts</option>
        //     <option value="liked" >Liked Posts</option>
        //     <option value="disliked" >Disliked Posts</option>
        // </select>
    )
}

export default SelectPosts