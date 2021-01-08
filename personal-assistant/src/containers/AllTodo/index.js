import React, { useState } from 'react';
import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import TodoSearch from '../TodoSearch';
import {
    Container, Row, Header, NoTodos,
  } from './styles'

const AllTodo = () => {
  
  const [ toDoList, setToDoList ] = useState([])
  const [ userInput, setUserInput ] = useState('');

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
        return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    let filtered = mapped.filter(task => {
        return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleFilter = () => {
    setToDoList([]);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }



  return (
    <Container>
        <Row>
            <Header>My Todo List</Header>
        </Row>
        <Row>
            <TodoForm addTask={addTask}/>
        </Row>
        <Row>
            <TodoSearch userInput={userInput} setUserInput={setUserInput}/>
        </Row>
        <Row>
            {toDoList.length ? <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} userInput={userInput}/>
            : <NoTodos>No Todos. Enjoy your day!</NoTodos>}
        </Row>
    </Container>
  );
}

export default AllTodo;
