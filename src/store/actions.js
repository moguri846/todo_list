import { ADD_TODO, COMPLETED_TODO, EDIT_TODO, DELETE_TODO, CLEAR_ALL_TODO } from './type';

const addTodo = ({ commit }, todo) => {
    commit(ADD_TODO, todo);
};
const completedTodo = ({ commit }, todo) => {
    commit(COMPLETED_TODO, todo);
};
const editTodo = ({ commit }, todo) => {
    commit(EDIT_TODO, todo);
};
const deleteTodo = ({ commit }, id) => {
    commit(DELETE_TODO, id);
};
const clearAllTodo = ({ commit }) => {
    commit(CLEAR_ALL_TODO);
};

export { addTodo, completedTodo, editTodo, deleteTodo, clearAllTodo };
