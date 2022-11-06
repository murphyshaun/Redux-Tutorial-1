import { createSelector } from 'reselect';

// export const todoListSelector = (state) => state.todoList.filter(todo => todo.name.includes(searchTextSelector(state)))

// export const searchTextSelector = (state) => state.filters.search;

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;

export const statusFilterSelector = (state) => state.filters.status

export const priorityFilterTextSelector = (state) => state.filters.priorities

//todoListSelector => return todoList
//searchTextSelector => return searchText
export const todosRemainingSelector = createSelector(
    todoListSelector, 
    searchTextSelector, 
    statusFilterSelector,
    priorityFilterTextSelector,
    (todoList, searchText, status, priorities) => {

        let resultFilter = todoList.filter(todo => todo.name.includes(searchText))

        if (status !== 'All'){
            resultFilter =  resultFilter.filter(todo => status === 'Completed' ? todo.completed : !todo.completed)
        }
        
        if (priorities.length > 0)
            resultFilter = resultFilter.filter(todo => priorities.includes(todo.priority))
            
        return resultFilter
})