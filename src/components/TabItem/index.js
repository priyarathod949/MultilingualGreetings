import './index.css'

const TabItem = props => {
  const {buttonDetails, isActive, activeBtn} = props
  const {id, buttonText} = buttonDetails

  const buttonClassName = isActive ? 'active btn' : 'btn'

  const onClickBtn = () => {
    activeBtn(id)
  }

  return (
    <li className="TabContainer">
      <button type="button" onClick={onClickBtn} className={buttonClassName}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
