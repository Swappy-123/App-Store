// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, clickChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const onMode = () => {
    clickChange(tabId)
  }

  const activeMode = isActive ? 'btnChange' : ''
  return (
    <li>
      <button className={`btn ${activeMode}`} type="button" onClick={onMode}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
