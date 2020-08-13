import React, { useState, useEffect} from 'react'

const NewsFeedColumn = () => {
  const [newsfeed, setNewsfeed] = useState()

  useEffect(() =>{
    fetch('/api/v1/newsfeeds',
    {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        debugger
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

  return (
    <div>
      <h1> Newsfeed </h1>
      <div>
        {newsfeed}
      </div>
    </div>
  )
}

export default NewsFeedColumn
