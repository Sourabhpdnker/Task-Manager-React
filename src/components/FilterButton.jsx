import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };
  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-2 py-2 flex-auto rounded border border-gray-300 focus:outline-none"
      >
        <option value="All">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>

      <button
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-2 bg-purple-500 ml-3 rounded"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
