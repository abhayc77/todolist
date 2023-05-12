import {useState} from 'react';
import './App.css';
import {Task} from "./Task"

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const nt =  {
          id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
          taskName : newTask
        }
        setTodoList([...todoList, nt]);
    };
    
    const deleteTask = (taskid) => {
        const newTaskList = todoList.filter((task) => task.id !== taskid);
        setTodoList(newTaskList); 
    };

    return (
        <div className="App">
            <div className='addTask'>
                <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='list'>
                {
                    todoList.map((task) => {
                        return <Task 
                        taskName={task.taskName} 
                        id={task.id}
                        deleteTask= {deleteTask}
                        />;                        
                    })}
            </div>

        </div>
    );
}

    export default App;
