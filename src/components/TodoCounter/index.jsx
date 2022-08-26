import React from 'react';
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return(
        <h2 className="TodoCounter"> Has complentado {completed} de {total} Tareas</h2>
    )
}

export default TodoCounter;