import { useSelector } from "react-redux";

const TodoList = () => {
  const filterTodos = useSelector((state) => {
    const todos = state.todos;
    const myFilter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.myFilter((todo) => {
      const matchfilter =
        (myFilter === "COMPLETED" && todo.completed) ||
        (myFilter === "INCOMPLETED" && !todo.completed) ||
        myFilter === "ALL";
      const matchSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchfilter && matchSearch;
    });
  });
  console.log("filtered todos are : ", filterTodos);
  return <div>TodoList</div>;
};

export default TodoList;
