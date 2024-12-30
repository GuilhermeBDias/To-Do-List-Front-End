import React from "react";
//import "../styles/taskTable.css";
import { FaTrash } from "react-icons/fa";

const TaskTable = ({ tasks, onDeleteTask, onEditTask }) => {
    return (
        <div className="task-table-container">
            <table className="task-table">
                <thead>
                    <tr className="Header">
                        <th>Tarefa</th>
                        <th>Descrição</th>
                        <th>Criado em</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.created_at}</td>
                            <td>
                                <select
                                    value={task.status}
                                    onChange={(e) =>{
                                        onEditTask(task.id, {
                                            ...task,
                                            status: e.target.value,
                                        })
                                    }}
                                >
                                    <option value="pendente">Pendente</option>
                                    <option value="em_andamento">Em andamento</option>
                                    <option value="concluído">Concluído</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => onDeleteTask(task.id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
