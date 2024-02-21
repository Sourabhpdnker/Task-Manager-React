// Todo.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
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

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <>
      <div className="max-w-4xl sm:mx-auto sm:mt-8 mt-4 mb-2 p-2 mx-5 bg-indigo-600 rounded-xl">
        <h2 className="mt-3 mb-3 text-4xl font-bold font-mono text-center uppercase">
          Personal Task Manager
        </h2>
      </div>
      <div className="max-w-4xl sm:mx-auto sm:mt-8 mx-3 p-4 bg-orange-100 rounded-lg">
        <div className="flex items-center mb-4">
          <input
            id="addTodoInput"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={20} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <FilterButtons />
          <div className="flex items-center mb-4">
            <input
              className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-xl"
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="ml-4 p-2 bg-blue-800 text-white rounded hover:bg-sky-600 focus:outline-none">
              <BsSearch size={20} />
            </button>
          </div>
        </div>

        <TodoList />
      </div>
    </>
  );
};

export default Todo;
