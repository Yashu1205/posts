import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PostsList from './PostsList'
import Header from './Header'
 
const PostsContainer = (props) => {
    const [posts, setPosts] = useState([])
    const [limitedPosts, setLimitedPosts] = useState([])
    const [index, setIndex] = useState(0)
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then((response) => {
             const result = response.data.map(ele => {
                 return {...ele, likes: 0, dislikes: 0}
             })
             setPosts(result)
             setLimitedPosts(result.slice(index, index  + 10))
         }) 
         .catch((err) => {
             alert(err.message)
         })
    },[])
    
    useEffect(() => {
        const getNewPosts = limitedPosts.concat(posts.slice(index, index + 10))
        console.log('new posts', getNewPosts)
        setLimitedPosts(getNewPosts)
    },[index])

    const getMorePosts = () => {
        setIndex(index + 10)
    }
    
    const handleLikesDislikes = (id, type) => {
        const result = limitedPosts.map(ele => {
            if(ele.id === id && type === 'likes'){
                return {...ele, likes: ele.likes + 1}
            }
            else if(ele.id === id && type === 'dislikes'){
                return {...ele, dislikes: ele.dislikes + 1}
            }
            else{
                return {...ele}
            }
        })
        setLimitedPosts(result)
    }

    const handleSearch = (e) => {
        const searchInput = e.target.value 
        setSearch(searchInput)
        getSearchResult()
    }

    const handleSelect = (e) => {
        const selectInput = e.target.value
        setSelect(selectInput)
        getSearchResult()
    }

    const getSearchResult = () => {
        const searchQuery = (search || select).toLowerCase()
        let result = []
        if(searchQuery === 'liked'){
            result = limitedPosts.filter(post => {
                return post.likes > 0
            })
        }
        else if(searchQuery === 'disliked'){
            result = limitedPosts.filter(post => {
                return post.dislikes > 0
            })
        }
        else if(searchQuery){
            result = limitedPosts.filter(post => {
                if(post.title.includes(searchQuery) || post.body.includes(searchQuery)){
                    return post
                }
            })
        }
        else{
            result = [...limitedPosts]
        }
        return result
    }

    return (
        <div>
            <Header select={select} 
                    search={search} 
                    handleSelect={handleSelect} 
                    handleSearch={handleSearch}
            />

            {getSearchResult().length > 0 ? (
                <PostsList limitedPosts={getSearchResult()} 
                           getMorePosts={getMorePosts}
                           handleLikesDislikes={handleLikesDislikes}
                /> ) : (
                    <h3>No posts found</h3>
                )}
        </div>
    )
}

export default PostsContainer