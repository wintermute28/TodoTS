import { ITodo } from "../../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          display: "inline",
          margin: "0 5px",
          textTransform: "capitalize",
        }}
      >
        {title}
      </span>
      <button
        onClick={() => removeTodo(id)}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "red",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
