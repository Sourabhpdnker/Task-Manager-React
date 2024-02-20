import { useState } from "react";
import { FaPlus, FaSearchengin } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = () => {
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearchChanges = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTream(value));
  };
  return (
    <div className="max-w-4xl sm:mx-auto mx-3 sm:mt-4 m-2 p-3 bg-gray-200 rounded-md shadow-xl">
      <h1 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        personal todo app
      </h1>
      {/* input text and btn  */}
      <div class="flex items-center">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded"
          name="addtodoInput"
          placeholder="Add Todo.."
        ></input>
        <button
          onClick={handleAddTodoClick}
          className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-green-400 focus:outline-none"
        >
          <FaPlus />
        </button>
      </div>
      {/* filter and search functions  */}
      <div className="flex items-center justify-between mt-3">
        <FilterButton></FilterButton>
        <div className="flex items-center mt-3 mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChanges(e.target.value)}
            type="text"
            className="flex-grow p-2 border-b-2 ml-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded"
            name="addtodoInput"
            placeholder="Search.."
          ></input>
          <button className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-green-400 focus:outline-none">
            <FaSearchengin />
          </button>
        </div>
      </div>
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
