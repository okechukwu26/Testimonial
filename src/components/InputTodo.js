import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescripttion] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const Todo = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const response = await Todo.json();

      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <form className='d-flex mt-5' onSubmit={onSubmit}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescripttion(e.target.value)}
        />
        <button className='btn btn-success'>ADD</button>
      </form>
    </>
  );
};
export default InputTodo;
