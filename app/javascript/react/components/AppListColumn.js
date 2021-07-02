import React, { useState, useEffect } from 'react'

import AppList from './AppList'

const AppListColumn = (props) => {
  const [getAppsArray, setAppsArray] = useState(null)
  // const [getAppsArray, setAppsArray] = useState([{name: "Shades' repo", url: "https://github.com/shades4355"}]) // for testing

  let apps

  // fetch for list of apps

  if (getAppsArray === null) {
    return apps = (
      <div>
        Apps Coming Soon!
      </div>
    )
  } else {
    apps = getAppsArray.map((singleApp, index) => {
      return(
        <AppList
          appName={singleApp.name}
          appURL={singleApp.url}
          key={index}
        />
    )
    })
  }
  return apps
}

export default AppListColumn
