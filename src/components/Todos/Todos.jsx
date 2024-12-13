import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [nextId, setNextId] = useState(1);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: nextId, text: newTodo, completed: false }]);
    setNewTodo("");
    setNextId(nextId + 1);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id),
      () => {
        if (todos.length > 0) {
          setNextId(Math.max(...todos.map((todo) => todo.id)) + 1);
        } else {
          setNextId(1);
        }
      }
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            aria-label="Enter your todo"
            placeholder="Add Todo"
          />
          <Button variant="outline-secondary" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </InputGroup>
      </div>

      <div className="mb-3">
        <Button
          variant={filter === "all" ? "primary" : "outline-secondary"} // Highlight "All Todos" when active
          onClick={() => setFilter("all")}
        >
          All Todos
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "outline-secondary"} // Highlight "Completed" when active
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "incomplete" ? "primary" : "outline-secondary"} // Highlight "Incomplete" when active
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </td>
              <td>
                <Button
                  variant={todo.completed ? "success" : "warning"}
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  {todo.completed ? "Completed" : "Incomplete"}
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Todos;
