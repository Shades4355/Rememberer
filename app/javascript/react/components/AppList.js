import React from 'react'

const AppList = (props) => {
  let name = props.appName
  let url = props.appURL

  return (
    <div>
      <li>
        <a href={url}>{name}</a>
      </li>
    </div>
  )
}

export default AppList
