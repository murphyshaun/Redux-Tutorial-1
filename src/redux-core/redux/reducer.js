import { combineReducers  } from "redux";
import filtersReducer from "../components/Filters/FiltersSlice";
import todosReducer from "../components/TodoList/TodosSlice";

//split reducer
// const rootReducer = (state, action) => {
//     console.log(state);
//     return {
//         filters: filtersReducer(state?.filters, action),
//         todoList: todosReducer(state?.todoList, action)
//     }    
// }

//cách hoạt động giống như ở trên
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todosReducer,
})
export default rootReducer;