import React, {createContext, useState, useEffect, useCallback} from 'react';
import firebase from './../config/Firebase';

export const TodoContext = createContext({});
const initialTodo = {
  data: [],
  loading: false,
  error: '',
};
export const Provider = ({children}) => {
  const [items, setItems] = useState(initialTodo);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const data = await firebase.getTodos();
      if (data.length) {
        setItems({...initialTodo, data, loading: true});
      } else {
        setItems({...initialTodo, loading: true});
      }
    };
    fetchMyAPI();
  }, []);

  const addItem = value => {
    const item = {
      id: Date.now(),
      name: value,
      completed: false,
    };
    setItems(prevTodo => {
      const data = prevTodo.data;
      const newData = [item, ...data];
      return {...prevTodo, data: newData};
    });
    firebase.addNewTodo(item);
  };

  const deleteItem = id => {
    setItems(prevTodo => {
      const data = prevTodo.data;
      const newData = data.filter(todo => todo.id != id);
      return {...prevTodo, data: newData};
    });
    firebase.deleteTodo(id);
  };

  const toggleCheck = id => {
    setItems(prevTodo => {
      const data = prevTodo.data;
      const newData = data.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {...prevTodo, data: newData};
    });
    firebase.updateTodo(id);
  };

  return (
    <TodoContext.Provider
      value={{
        loading: items.loading,
        items: items.data,
        setItems,
        addItem,
        deleteItem,
        toggleCheck,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
