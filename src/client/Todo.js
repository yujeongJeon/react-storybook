import React, { useState, useContext } from "react";
import "./App.css";
import { useRootData } from "./helpers/useRootData";
import { todoContext } from "./providers/todo-provider";
import { useObserver } from "mobx-react-lite";

const TodoItem = ({
  todo: { id, title, content, complete },
  handleChange,
  deleteTodo,
  updateTodo,
}) => {
  const [editable, setEditable] = useState(false);
  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);

  const _handleChange = () => {
    handleChange(id);
  };

  const _deleteTodo = () => deleteTodo(id);

  const editTodo = () => {
    editable &&
      updateTodo({
        id: id,
        title: _title,
        content: _content,
        complete: complete,
      });

    setEditable(!editable);
  };

  return (
    <div>
      <h3>
        <input
          name="complete"
          type="checkbox"
          checked={complete}
          onChange={_handleChange}
        />
        {editable ? (
          <input
            type="text"
            name="title"
            value={_title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        ) : (
          <span className={complete ? "complete" : ""}>{title}</span>
        )}
      </h3>
      <div className={complete ? "complete" : ""}>
        {editable ? (
          <input
            type="text"
            name="content"
            value={_content}
            onChange={({ target: { value } }) => setContent(value)}
          />
        ) : (
          content
        )}
        <div>
          <button onClick={_deleteTodo}>삭제</button>
          <button onClick={editTodo}>{editable ? "완료" : "수정"}</button>
        </div>
      </div>
    </div>
  );
};

const TodoEditor = () => {
  // const { todo, setTodo, initTodo, putTodo } = useRootData((store) => ({
  //   todo: store.todo,
  //   setTodo: store.setTodo,
  //   initTodo: store.initTodo,
  //   putTodo: store.putTodo,
  // }));
  const todoStore = useContext(todoContext);

  const handleChange = ({ target: { value, name } }) => {
    let nextTodo = {
      ...todoStore.todo,
    };
    nextTodo[name] = value;
    todoStore.setTodo(nextTodo);
  };

  const handleClick = () => {
    todoStore.putTodo();
    todoStore.initTodo();
  };

  return useObserver(() => (
    <div>
      <input
        name="title"
        placeholder="title"
        type="text"
        value={todoStore.todo.title}
        onChange={handleChange}
      />
      <input
        name="content"
        placeholder="content"
        type="text"
        value={todoStore.todo.content}
        onChange={handleChange}
      />
      <button onClick={handleClick}>등록</button>
    </div>
  ));
};

export const TodoList = () => {
  // const {
  //   todos,
  //   setComplete,
  //   deleteTodo,
  //   updateTodo,
  //   totalTodos,
  // } = useRootData((store) => ({
  //   todos: store.todos,
  //   setComplete: store.setComplete,
  //   deleteTodo: store.deleteTodo,
  //   updateTodo: store.updateTodo,
  //   totalTodos: store.totalTodos,
  // }));

  const todoStore = useContext(todoContext);

  const handleChange = (todoId) => {
    todoStore.setComplete(todoId);
  };

  const _deleteTodo = (todoId) => {
    todoStore.deleteTodo(todoId);
  };

  const _updateTodo = (nextTodo) => {
    todoStore.updateTodo(nextTodo);
  };

  return useObserver(() => (
    <>
      <TodoEditor />
      {todoStore.totalTodos > 0
        ? todoStore.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                handleChange={handleChange}
                deleteTodo={_deleteTodo}
                updateTodo={_updateTodo}
                todo={todo}
              />
            );
          })
        : "없음"}
    </>
  ));
};
