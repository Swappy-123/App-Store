// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="container">
        <img src={imageUrl} className="img" alt={appName} />
        <p className="para">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
