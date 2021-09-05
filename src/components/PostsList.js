import React from 'react'

const PostsList = (props) => {
    const {limitedPosts, getMorePosts, handleLikesDislikes} = props

    const handleCount = (id, type) => {
        handleLikesDislikes(id, type)
    }

    return (
        <div className="mt-2">
            <h3>Posts - {limitedPosts.length}</h3>
            <table className="table table-striped mt-3" border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Likes</th>
                        <th>Dislikes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        limitedPosts.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.likes}<button onClick={() => handleCount(post.id, 'likes')}>Like</button></td>
                                    <td>{post.dislikes}<button onClick={() => handleCount(post.id, 'dislikes')}>Dislike</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={getMorePosts}>See More</button>
            </div>
    )
}

export default PostsList