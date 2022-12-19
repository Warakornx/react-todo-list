const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, 
    updateTodoItem }) => {
    return (
    <div className="todo-list">
    <li style={{textDecoration: item.complete ? "line-through" : ""}}>
    {item.todo}</li>
    <div className="btns">
    <button onClick={() => completeTodoItem(index)} className="success">เสร็จสิ้น</button>
    <button onClick={() => updateTodoItem(index)}className="update">แก้ไข</button>
    <button onClick={() => deleteTodoItem(index)}className="delete">ลบ</button>
    </div>
    </div>)
    };
export default TodoItem