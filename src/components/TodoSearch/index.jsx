
import './TodoSearch.css';
import {useContext} from "react";
import {TodoContext} from "../TodoContext/index.jsx";

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <input
            placeholder="Buscar tarea"
            className="TodoSearch"
            onChange={(e) => onSearchValueChange(e)}
        />
    );
}

export default TodoSearch;