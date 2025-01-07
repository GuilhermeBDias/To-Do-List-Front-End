import React,{ useState } from "react";
//import "../styles/taskForm.css";

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="task-form-container">
            <h1>Minhas tarefas</h1>
        <form onSubmit={handleSubmit} className="task-form">
            
            <input
                className="Title-input" 
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)} required 
            />

            <input 
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)} required
            />
            <button type="submit">+</button>
        </form>
        </div>
    );
};

export default TaskForm;