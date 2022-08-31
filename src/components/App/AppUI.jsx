import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import {TodoContext} from "../TodoContext";
import {useContext} from "react";
import Modal from "../Modal";
import CreateTodoButton from "../CreateTodoButton";
import TodoForm from "../TodoForm";

function AppUI() {

    const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = useContext(TodoContext);

    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {loading && <p>Cargando...</p>}
                {error && <p>Hubo un error...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
            <CreateTodoButton/>
        </>

    );
}

export default AppUI;