import "./TodoItem.css";

function TodoItem(props) {
  const onClickHandler = () => {
    return props.onItemDelete(props.item.id);
  };
  return (
    <div onClick={onClickHandler} className="todo-list-item">
      {props.item.title}
    </div>
  );
}

export default TodoItem;
