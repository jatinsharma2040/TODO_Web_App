import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "", dueDate: "", category: "non-urgent" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const addTodo = () => {
    if (!newTodo.title.trim()) return alert("Title is required!");
    const newEntry = { ...newTodo, id: Date.now() };
    setTodos([...todos, newEntry]);
    resetForm();
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const startEdit = (todo) => {
    setNewTodo(todo);
    setEditingId(todo.id);
  };

  const updateTodo = () => {
    setTodos(todos.map((todo) => (todo.id === editingId ? { ...newTodo, id: editingId } : todo)));
    setEditingId(null);
    resetForm();
  };

  const resetForm = () => {
    setNewTodo({ title: "", description: "", dueDate: "", category: "non-urgent" });
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex flex-col items-center overflow-y-auto">

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 px-6">

        <div className="w-full md:w-2/5">
          <div className="bg-white p-6 rounded-xl shadow w-full">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">{editingId ? "Edit Todo" : "Add Todo"}</h1>
            <input
              className="border p-3 w-full mb-3 rounded-xl text-lg"
              name="title"
              placeholder="Title (required)"
              value={newTodo.title}
              onChange={handleChange}
              required
            />
            <textarea
              className="border p-3 w-full mb-3 rounded-xl text-lg"
              name="description"
              placeholder="Description (optional)"
              value={newTodo.description}
              onChange={handleChange}
            />
            <input
              className="border p-3 w-full mb-3 rounded-xl text-lg"
              type="date"
              name="dueDate"
              value={newTodo.dueDate}
              onChange={handleChange}
            />
            <select
              className="border p-3 w-full mb-3 rounded-xl text-lg"
              name="category"
              value={newTodo.category}
              onChange={handleChange}
            >
              <option value="urgent">Urgent</option>
              <option value="non-urgent">Non-Urgent</option>
            </select>
            <button
              onClick={editingId ? updateTodo : addTodo}
              className="bg-blue-500 text-white p-3 w-full rounded-xl text-lg hover:bg-blue-600 transition"
            >
              {editingId ? "Update Todo" : "Add Todo"}
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">Your Todos</h2>
          <div className="max-h-[70vh] overflow-y-auto pr-2">
            {todos.length === 0 && (
              <p className="text-white text-lg text-center">No tasks yet! Add some todos.</p>
            )}
            {todos.map((todo) => (
              <div key={todo.id} className="bg-gray-100 p-6 rounded-xl shadow mb-4">
                <h2 className="text-xl font-semibold">{todo.title}</h2>
                <p className="text-md text-gray-600">{todo.description}</p>
                <p className="text-sm">Due: {todo.dueDate || "N/A"}</p>
                <p className={`text-sm ${todo.category === "urgent" ? "text-red-500" : "text-green-500"}`}>{todo.category}</p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => startEdit(todo)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
