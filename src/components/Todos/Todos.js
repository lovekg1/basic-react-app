import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todos.scss'

export default function Todos() {
    return (
        <div class="wrapper">
            <header>Todo App</header>
            <div class="inputField">
                <input type="text" placeholder="Add your new todo" />
                <button><FontAwesomeIcon icon="fas fa-plus" /></button>
            </div>
            <ul class="todoList">
                <li>Watching TiVi<span class="icon" onclick="deleteTask({index})"><FontAwesomeIcon icon="fas fa-trash" /></span></li>
            </ul>
            <div class="footer">
                <span>You have <span class="pendingTasks"></span> pending tasks</span>
                <button>Clear All</button>
            </div>
        </div >
    )
}