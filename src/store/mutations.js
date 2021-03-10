const localStorageSetItem = todo => {
    localStorage.setItem(todo.id, JSON.stringify(todo));
};

const add_todo = (state, todo) => {
    localStorageSetItem(todo);
    state.todos.push(todo);
};
const completed_todo = (state, todo) => {
    todo.completed = !todo.completed;
    localStorageSetItem(todo);
};
const edit_todo = (state, todo) => {
    localStorageSetItem(todo);
};
const delete_todo = (state, id) => {
    localStorage.removeItem(id);
    state.todos = state.todos.filter(t => t.id !== id);
};
const clear_all_todo = state => {
    localStorage.clear();
    state.todos = [];
};

export { add_todo, completed_todo, edit_todo, delete_todo, clear_all_todo };
