
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

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