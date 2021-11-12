import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const onItemDeleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <ul className="todo-list">
      {props.todos.map((thisTask) => {
        return (
          <li key={thisTask.id}>
            <TodoItem item={thisTask} onItemDelete={onItemDeleteHandler} />
          </li>
        );
      })}
      {/* <button onClick={onClickHandler}>hello</button> */}
    </ul>
  );
}

export default TodoList;
