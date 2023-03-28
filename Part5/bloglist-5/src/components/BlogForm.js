import React, { useState } from 'react'
import PropTypes from 'prop-types'

const OBlogForm = ({ createBlog }) => {
  const [newOTitle, setNewOTitle ] = useState('')
  const [OnewAuthor, setONewAuthor ] = useState('')
  const [OnewUrl, setONewUrl ] = useState('')

  const handleOTitleChange = (event) => {
    setNewOTitle(event.target.value)
  }

  const handleOAuthorChange = (event) => {
    setONewAuthor(event.target.value)
  }

  const handleOUrlChange = (event) => {
    setONewUrl(event.target.value)
  }

  const OaddBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newOTitle,
      author: OnewAuthor,
      url: OnewUrl
    })
    setNewOTitle('')
    setONewAuthor('')
    setONewUrl('')
  }

  return (
    <form onSubmit={OaddBlog}>
      <div>
        Title: <input id='title' value={newOTitle} onChange={handleOTitleChange} />
      </div>
      <div>
        Author: <input id='author' value={OnewAuthor} onChange={handleOAuthorChange} />
      </div>
      <div>
        Url: <input id='url' value={OnewUrl} onChange={handleOUrlChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

OBlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired
}

export default OBlogForm
