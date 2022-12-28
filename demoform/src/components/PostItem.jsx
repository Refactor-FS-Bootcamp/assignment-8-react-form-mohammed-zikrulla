import React from 'react'
import "./Postitem.css"

const PostItem = ({post}) => {
  return (
    <div className='container'>
        <h1>ID:{post.id}</h1>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
    </div>
  )
}

export default PostItem