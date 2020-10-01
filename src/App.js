import React, { Component } from 'react';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

export default class App extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <InputTodo />
          <ListTodo />
        </div>
      </>
    );
  }
}
