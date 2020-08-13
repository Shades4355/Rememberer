import React from 'react'

import AppList from './AppList'
import NewsFeedColumn from './NewsFeedColumn'

export const App = (props) => {
  let appsArray = null
  let apps

  if (appsArray === null) {
    apps = (
      <div>
        Apps Coming Soon!
      </div>
    )
  } else {
    apps = appsArray.map(singleApp => {
      return <AppList singleApp={singleApp} />
    })
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

      <div className='small-6'>
        <div className='textbox'>
            <NewsFeedColumn />
        </div>
      </div>
    </div>
  )
}

export default App
