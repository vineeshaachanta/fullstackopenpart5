import React , { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = (props) => {
  const blog = props.blog
  const [blogObject, setBlogObject] = useState(blog)
  const [visible, setVisible] = useState(false)
  const OshowWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const ObuttonLabel = visible ? 'hide' : 'view'

  const increaseLikes = () => {
    const updatedBlog = ({
      ...blog,
      likes: blog.likes + 1
    })
    props.updateBlog(updatedBlog)
    setBlogObject(updatedBlog)
  }

  const removeBlog = () => props.deleteBlog(blog)

  const OblogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={OblogStyle} className='blog'>
      <div>
        <p>{blog.title} - {blog.author} <button onClick={toggleVisibility}>{ObuttonLabel}</button></p>
      </div>
      <div style={OshowWhenVisible}>
        <p>{blog.url}</p>
        <p>{ blogObject.likes } <button id='like-button' onClick={increaseLikes}>like</button></p>
        <button id='remove' onClick={removeBlog}>remove</button>
      </div>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired
}

export default Blog
