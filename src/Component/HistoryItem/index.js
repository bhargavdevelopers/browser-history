import './index.css'

const HistoryItem = props => {
  const {historyList, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <p className="time"> {timeAccessed} </p>
      <div className="site-details">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title"> {title} </p>
        <p className="url"> {domainUrl} </p>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default HistoryItem
