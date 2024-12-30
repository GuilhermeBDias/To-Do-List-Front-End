import React, {useState, useEffect} from 'react';
import TaskForm from './components/taskForm';
import TaskTable from './components/taskTable';
import api from './services/api';

const App = () =>{
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        fetchTasks();
    }, []);

    // Function to fetch tasks from the API
    const fetchTasks = async () => {
        const tasks = await api.get('/tasks');
        setTasks(tasks.data);
    };

    // Function to add a new task
    const addTask = async (task) => {
        const response = await api.post('/tasks', task);
        setTasks([...tasks, response.data]);
    };

    // Function to delete a task
    const deleteTask = async (id) => {
        await api.delete('/tasks/' + id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Function to edit a task
    const editTask = async (id, updatedTask) => {

        const previuousTask = [...tasks];
        setTasks((prevTasks) =>
            prevTasks.map((task) => 
                task.id === id ? {...task, ...updatedTask} : task));
        
        
            const response = await api.put(`/tasks/${id}`, updatedTask);
            
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, ...response.data } : task));
        
        
        
        
    };

    return (
        <div className="app">
            <TaskForm onAddTask={addTask} />
            <TaskTable tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />
        </div>
    );
}


export default App;