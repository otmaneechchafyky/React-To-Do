import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const saveTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(saveTodos());

  const delItem = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  const updateTask = (updatedTask, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTask;
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleClear = () => {
    setTodos([
      ...todos.filter((todo) => todo.completed === false),
    ]);
  };

  return (
    <div>
      <InputTodo addTask={addTask} />
      <TodosList todosProps={todos} setTodos={setTodos} delItem={delItem} updateTask={updateTask} />
      <button className="clearBtn" type="button" onClick={handleClear}>Clear</button>
    </div>
  );
};
export default TodosLogic;
