import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'learn redux',
            completed: false,
            priority: 'Medium',
        },
        {
            id: 2,
            name: 'learn nestjs',
            completed: true,
            priority: 'High',
        },
        {
            id: 3,
            name: 'learn redis',
            completed: false,
            priority: 'High',
        },
    ],

    reducers: {
        //auto create action creators
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            
            if (currentTodo)
                currentTodo.completed = !currentTodo.completed;
        }
    }
})