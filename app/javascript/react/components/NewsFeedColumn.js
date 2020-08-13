import React, { useState, useEffect} from 'react'

import Feed from './Feed'

const NewsFeedColumn = () => {
  const [newsfeed, setNewsfeed] = useState([{story: 'Updates Coming Soon'}])

  useEffect(() =>{
    fetch('/api/v1/newsfeeds',
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
      setNewsfeed(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let feed = newsfeed.map(storyfeed => {
    return (
      <Feed
        story={storyfeed.story}
      />
    )
  })



  return (
    <div>
      <h1> Newsfeed </h1>
      <ul>
        {feed}
      </ul>
    </div>
  )
}

export default NewsFeedColumn
