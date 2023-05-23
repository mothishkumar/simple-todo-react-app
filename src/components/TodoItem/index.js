import './index.css'

const TodoItem = props => {
  const {userDetails, deleteUser} = props
  const {id, title} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="card-container">
        <p className="para">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
