import React from 'react'

import AppList from './AppList'

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
    <div className='textbox'>
      <h1>Welcome to Remembery!</h1>
      <div>
        <ul>
          {apps}
        </ul>
      </div>
    </div>
  )
}

export default App
