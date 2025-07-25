// src/components/TodoComponent.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchTodosRequest,
    createTodoRequest,
    updateTodoRequest,
    deleteTodoRequest,
    updateTodoRequest_Fully,
} from '../redux/reducers/todo.actions';
import { useHeader } from '../contexts/HeaderContext';

const TodoComponent = () => {

    const { showHeader, hideHeader } = useHeader();

    const dispatch = useDispatch();
    // const todos = useSelector(state => state.todo) || []; // Access the todos from the Redux store
    const todos = useSelector(state => state.todo.todos); // Access the todos from the Redux store
    console.log('tj_ tc todos = ', todos);
    const error = useSelector(state => state.data.error); // Access any error messages from the Redux store
    const [newTodo, setNewTodo] = useState(''); // State for the new todo input

    useEffect(() => {
        dispatch(fetchTodosRequest()); // Dispatch action to fetch todos on component mount
    }, [dispatch]);

    // CREATE TODO
    const handleCreateTodo = () => {
        if (newTodo.trim()) {
            dispatch(createTodoRequest({ 
                title: newTodo,
                completed : false,
                created_at : new Date().toDateString(),
                created_at2 : new Date().toUTCString()
                
             })); // Dispatch action to create a new todo
            setNewTodo(''); // Clear the input field
        }
    };

    // UPDATE TODO - partially with patch
    const handleUpdateTodo = (id) => {
        hideHeader(); // Hide the header when updating a todo, and it will be kept hidden until the todo is updated succesfully.

        const updatedTodo = prompt('Update todo:', todos.find(todo => todo.id === id)?.title)
        if (updatedTodo) {
            dispatch(updateTodoRequest(id, { title: updatedTodo })); // Dispatch action to update the todo
            showHeader(); // Show the header again after updating a todo
        }
    };

    // UPDATE TODO Fully - full with put
    const handleUpdateTodo_Fully = (id) => {

        const currentTodo = todos.find(todo => todo.id === id);

        if (currentTodo) {
            const updatedTitle = prompt('Update title:', currentTodo.title) || currentTodo.title;
            const updatedCompleted = window.confirm('Mark as completed?') ? true : currentTodo.completed;
            const updatedCreatedAt = new Date().toDateString(); // Optional: Update the created_at field if needed
    
            const updatedTodo = {
                ...currentTodo, // Keep all existing fields
                title: updatedTitle,
                completed: updatedCompleted,
                created_at: updatedCreatedAt, // Update other fields if necessary
            };
    
            dispatch(updateTodoRequest_Fully(updatedTodo)); // Dispatch the full updated object
        }

    };

    // DELETE TODO
    const handleDeleteTodo = (id) => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            dispatch(deleteTodoRequest(id)); // Dispatch action to delete the todo
        }
    };

    return (
        <div style={{padding : 20}}>
            <h1>Todo List</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error if exists */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} // Update state with the input value
                placeholder="Add a new todo"
            />
            <button onClick={handleCreateTodo}>Add Todo</button> {/* Button to add a new todo */}

            <ul style={{ border: '1px solid black',padding : 10,width : '50vw' }}>

                {todos.map(todo => (
                    <li key={todo.id} style={{display : 'flex' , justifyContent : 'flex-start' , gap : 10, border : '1px solid red' , padding : 10,}}>

                        <div style={{flex : 0.5}}>{todo.title}</div> {/* Display todo title */}

                        <button onClick={() => handleUpdateTodo(todo.id)}>Edit</button> {/* Button to edit todo */}

                        <button onClick={() => handleUpdateTodo_Fully(todo.id)}>Edit Fully</button> {/* Button to edit todo's full details */}

                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button> {/* Button to delete todo */}

                    </li>
                ))}

            </ul>
        </div>
    );
};

export default TodoComponent;