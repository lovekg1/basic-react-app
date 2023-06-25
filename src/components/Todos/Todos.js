import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todos.scss'
import logo from '../../assets/image/logo.svg'
import { useState, useEffect } from 'react'

export default function Todos() {
    const [todoList, setTodoList] = useState([])
    const [title, setTitle] = useState('')
    const [editingTodo, setEditingTodo] = useState({})

    useEffect(() => {
        const addBtn = document.querySelector('.inputField button')
        const clearAllBtn = document.querySelector('.footer button')

        if (title) {
            addBtn.classList.add('active')
        } else {
            addBtn.classList.remove('active')
        }

        todoList.forEach(item => {
            if (item.title === title) {
                addBtn.classList.remove('active')
            }
        })

        if (todoList.length > 0) {
            clearAllBtn.classList.add('active')
        } else {
            clearAllBtn.classList.remove('active')
        }
    }, [title, todoList])

    const handleAddTodo = () => {
        let todoAdded = { id: Math.floor(Math.random() * 10000) + 1, title: title }
        setTodoList([...todoList, todoAdded])
        setTitle('')
    }

    const handleDeleteTodo = (item) => {
        let todoListCopy = [...todoList]
        let newTodoList = todoListCopy.filter(todo => todo !== item)
        setTodoList(newTodoList)
        setEditingTodo({})
    }

    const handleEditTodo = (item) => {
        setEditingTodo({ id: item.id, title: item.title })
    }

    const handleChangeEditingValue = (e) => {
        let editingTodoCopy = { ...editingTodo }
        editingTodoCopy.title = e.target.value
        setEditingTodo(editingTodoCopy)
    }

    const handleSaveEditingValue = (item) => {
        let todoListCopy = [...todoList]
        let index = todoListCopy.findIndex(todo => todo.id === item.id)
        todoListCopy[index].title = editingTodo.title
        setTodoList(todoListCopy)
        setEditingTodo({})
    }


    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Explore React Application... <br /> With HoangAnh ^^</div>
            <header>Todo App</header>
            <div className="wrapper">
                <div className="inputField">
                    <input type="text" placeholder="Add your new todo" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button onClick={() => handleAddTodo()}><FontAwesomeIcon icon="fas fa-plus" /></button>
                </div>
                <ul className="todoList">
                    {todoList.map((item, index) => {
                        let isEmptyObj = Object.keys(editingTodo).length === 0

                        return (
                            <li key={item.id}>
                                {
                                    !isEmptyObj && editingTodo.id === item.id ?
                                        <>
                                            <input type="text" value={editingTodo.title} onChange={(e) => handleChangeEditingValue(e)} />
                                            <button className='btn-save' onClick={() => handleSaveEditingValue(item)}>
                                                <FontAwesomeIcon icon="fa-solid fa-check" />
                                            </button>
                                        </>
                                        :
                                        <>
                                            <div className='todo-name'>
                                                {index + 1}. {item.title}
                                                <button onClick={() => handleEditTodo(item)}>Edit</button>
                                            </div>
                                            <div className="icon" onClick={() => handleDeleteTodo(item)}><FontAwesomeIcon icon="fas fa-trash" /></div>
                                        </>
                                }
                            </li>
                        )
                    })}

                </ul>
                <div className="footer">
                    <span>You have <span className="pendingTasks">{todoList.length}</span> pending tasks</span>
                    <button onClick={() => setTodoList([])}>Clear All</button>
                </div>
            </div >
        </>
    )
}