import React, {useContext} from 'react';
import './TodoCounter.css';
import {TodoContext} from "../TodoContext/index.jsx";

function TodoCounter() {

    const {totalTodos, completedTodos} = useContext(TodoContext);

    return(
        <h2 className="TodoCounter"> Has complentado {completedTodos} de {totalTodos} Tareas</h2>
    )
}

export default TodoCounter;