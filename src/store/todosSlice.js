import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      todo: "gras afrijden",
      checked: true,
    },
    {
      id: nanoid(),
      todo: "tv kijke",
      checked: true,
    },
    {
      id: nanoid(),
      todo: "afwas doen",
      checked: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push({
        id: nanoid(),
        todo: payload,
        checked: false,
      });
    },
    deleteTodo: (state, { payload }) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === payload),
        1
      );
    },
    toggleTodo: (state, { payload }) => {
      state.todos.find((todo) => todo.id === payload).checked =
        !state.todos.find((todo) => todo.id === payload).checked;
    },
  },
});
export default todosSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
