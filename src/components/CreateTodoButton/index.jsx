import React, {useContext} from 'react';
import './CreateTodoButton.css';
import {TodoContext} from "../TodoContext/index.jsx";
function CreateTodoButton() {
    const {setOpenModal} = useContext(TodoContext)
    const onClickButton = () => {
        setOpenModal(prevState => !prevState)
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export default CreateTodoButton;