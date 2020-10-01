import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const Todos = await fetch('http://localhost:3000/todos');
      const response = await Todos.json();

      setTodos(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onDelete = async (id) => {
    console.log(id);
    try {
      const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {' '}
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>description</th>
            <th>Edit </th>
            <th>Delete </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                {' '}
                <button
                  className='btn btn-danger'
                  onClick={() => onDelete(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListTodo;
