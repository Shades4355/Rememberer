import React, { useState, useEffect } from 'react'

import AppListColumn from './AppListColumn'
import NewsFeedColumn from './NewsFeedColumn'

const App = (props) => {
  const [getAdmin, setAdmin] = useState({permission: false})

  useEffect(() =>{
    fetch('/admin',
    {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      setAdmin(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let apps = <AppListColumn/>


  let handleButtonClick = () => {
    return window.location.href='/admin/newsfeeds/new'
  }

  let newPost;
  if (getAdmin.permission === true) {
      newPost = (
        <div
          className='button'
          onClick={handleButtonClick}>
          New Newsfeed Post
        </div>
      )
  } else {
    newPost = ''
  }

  return (
    <div className='grid-x margin-grid-x'>
      <div className='textbox small-6'>
        <h1>Welcome to Rememberer!</h1>
        <div>
          <ul>
            {apps}
          </ul>
        </div>
      </div>
      <div className='small-1'>
      </div>
      <div className='small-5'>
        <div className='textbox'>
            <NewsFeedColumn />
        </div>
      </div>
      <div className='small-7'>
      </div>
      <div>
        {newPost}
      </div>
    </div>
  )
}

export default App
