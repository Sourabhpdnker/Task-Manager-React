import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 px-3 mb-3 py-3 gap-4 bg-sky-400 rounded-lg">
      <div className="flex items-center font-bold ">
        <span className="mr-3 ml-2 text-black"> {index + 1}.</span>
        <span
          className={`mr-4 ${todo.completed ? "line-through text-black" : ""}`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          className="mr-2 text-sm bg-black text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="mr-2 text-sm bg-red-600 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-600 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-700 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
