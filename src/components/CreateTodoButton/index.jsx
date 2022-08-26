import React from 'react';
import './CreateTodoButton.css';
function CreateTodoButton(props) {

    const onClickButton = () => {
        alert("Abrimos el modal")
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export default CreateTodoButton;