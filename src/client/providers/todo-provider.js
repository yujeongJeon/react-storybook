import { useLocalStore } from "mobx-react-lite";
import React, { createContext } from "react";
import {produce} from 'immer';

export const TodoProvider = ({ children }) => {
  let cnt = 0;

  const store = useLocalStore(() => ({
    todos: [],
    todo: {
      title: "",
      content: "",
    },
    error: "",
    setTodo(todo) {
      store.todo = todo;
    },
    setComplete(todoId) {
      const idx = store.todos.findIndex((todo) => todo.id === todoId);
      if(idx > -1) {
        store.todos[idx] = {
          ...store.todos[idx],
          complete: !store.todos[idx].complete
        }
      }
    },
    initTodo() {
      store.todo = {
        title: "",
        content: "",
      }
    },
    get totalTodos() {
      return store.todos.length;
    },
    putTodo() {
      const nextTodo = {
        id: cnt++,
        title: store.todo.title,
        content: store.todo.content,
        complete: false,
      };
      store.todos.push(nextTodo);
    },
    deleteTodo(todoId) {
      const idx = store.todos.findIndex((todo) => todo.id === todoId);
      idx > -1 && store.todos.splice(idx, 1);
    },
    updateTodo(nextTodo) {
      const idx = store.todos.findIndex((todo) => todo.id === nextTodo.id);

      if (idx > -1) {
        store.todos[idx] = nextTodo;
      }
    },
  }));

  return <todoContext.Provider value={store}>{children}</todoContext.Provider>;
};

export const todoContext = createContext();
