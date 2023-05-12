import {useState} from 'react';
import './App.css';
import {Task} from "./Task"

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const completeTask = (taskid) => {
       setTodoList(todoList.map((task) => {
            if(task.id === taskid){
                return {...task, completed:true}
            } else {
                return task;
            }
       })
       );   
    };

    const addTask = () => {
        const nt =  {
          id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
          taskName : newTask,
          completed : false
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
                        completed= {task.completed}
                        deleteTask= {deleteTask}
                        completeTask = {completeTask}
                        />;                        
                    })}
            </div>

        </div>
    );
}

    export default App;
