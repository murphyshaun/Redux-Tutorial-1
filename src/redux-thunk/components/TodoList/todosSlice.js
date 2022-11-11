import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const totosSlice =  createSlice({
    name: 'todoList',
    initialState: {status: 'idle', todos: []},
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
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                //action creator
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'idle';
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                //update state in store
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, {payload}) => {
                //https://stackoverflow.com/questions/65448899/redux-returning-a-proxy-object-instead-of-the-state
                // let currentTodo = current(state).todos.find((todo) => todo.id === payload.id);
                // currentTodo.completed = payload.completed;
                // Object.assign(currentTodo.completed, payload.completed)
                // const data = payload.completed;
                // console.log(currentTodo.completed);
            })
    }
});

//thunk function creator
//createAsyncThunk: create thunk function
//todos/fetchTodos: prefix of action
//createAsyncThunk: create 3 action:
//1. todos/fetchTodos/pending
//2. todos/fetchTodos/fulfilled
//3. todos/fetchTodos/rejected
// status of promise
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json()
    return data.todos;
})

//thunk function creator
export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
    })

    const data = await res.json();

    return data.todos;
})

//thunk function creator
export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
    const res = await fetch('/api/todos', {
        method: "PUT",
        body: JSON.stringify(updatedTodo),
    })

    const data = await res.json();

    return data.todos;
})

export default totosSlice;

//before: action (object) and action creators () => {return action }
//thunk action (function) and thunk action creators () => { return thunk action }

//thunk action creators
// export function addTodos(todo) {

//     // thunk function - thunk action
//     return function addTodosThunk(dispatch, getState) {
//         //edit todo before todo sent to reducer in store
//         todo.name = 'test thunk action'

//         //call reducer
//         dispatch(totosSlice.actions.addTodo(todo));
//     }
// }