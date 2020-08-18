import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"

import AppList from './AppList'
import NewsFeedColumn from './NewsFeedColumn'

const App = (props) => {
  const [getAdmin, setAdmin] = useState({permission: false})
  let appsArray = null
  let apps

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

  if (appsArray === null) {
    apps = (
      <div>
        Apps Coming Soon!
      </div>
    )
  } else {
    apps = appsArray.map((singleApp, index) => {
      return <AppList
        singleApp={singleApp}
        key={index}
      />
    })
  }

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
        <h1>Welcome to Remembery!</h1>
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
