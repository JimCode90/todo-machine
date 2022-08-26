
import {useState} from "react";
import AppUI from "./AppUI.jsx";

const defaultTodos = [
    {text: "tarea1", completed: true},
    {text: "tarea2", completed: false},
    {text: "tarea3", completed: false},
    {text: "tarea4", completed: false},
    {text: "tarea5", completed: false},
    {text: "tarea6", completed: false},
    {text: "tarea7", completed: false},
]

function App() {

    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos);
    }

    return (
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchVue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}

export default App
