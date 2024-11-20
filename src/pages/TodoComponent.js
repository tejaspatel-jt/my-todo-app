// src/components/TodoComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTodosRequest,
    createTodoRequest,
    updateTodoRequest,
    deleteTodoRequest,
} from '../redux/reducers/todo.actions';

const TodoComponent = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.data.todos); // Access the todos from the Redux store
    const error = useSelector(state => state.data.error); // Access any error messages from the Redux store
    const [newTodo, setNewTodo] = useState(''); // State for the new todo input

    useEffect(() => {
        dispatch(fetchTodosRequest()); // Dispatch action to fetch todos on component mount
    }, [dispatch]);

    const handleCreateTodo = () => {
        if (newTodo.trim()) {
            dispatch(createTodoRequest({ title: newTodo })); // Dispatch action to create a new todo
            setNewTodo(''); // Clear the input field
        }
    };

    const handleUpdateTodo = (id) => {
        const updatedTodo = prompt('Update todo:', todos.find(todo => todo.id === id)?.title);
        if (updatedTodo) {
            dispatch(updateTodoRequest(id, { title: updatedTodo })); // Dispatch action to update the todo
        }
    };

    const handleDeleteTodo = (id) => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            dispatch(deleteTodoRequest(id)); // Dispatch action to delete the todo
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error if exists */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} // Update state with the input value
                placeholder="Add a new todo"
            />
            <button onClick={handleCreateTodo}>Add Todo</button> {/* Button to add a new todo */}
            <ul>
                {todos?.map(todo => (
                    <li key={todo.id}>
                        {todo.title} {/* Display todo title */}
                        <button onClick={() => handleUpdateTodo(todo.id)}>Edit</button> {/* Button to edit todo */}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button> {/* Button to delete todo */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoComponent;