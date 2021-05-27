import React, {createContext, useState, useEffect} from 'react';
import firebase from './../config/Firebase';

export const TodoContext = createContext({});
const initialTodo = {
  data: [],
  loading: false,
  error: '',
  errorVisible: false,
};
export const Provider = ({children}) => {
  const [items, setItems] = useState(initialTodo);

  const fetchMyAPI = async () => {
    try {
      const data = await firebase.getTodos();
      if (data.length) {
        setItems({...items, data, loading: true});
      } else {
        setItems({...items, loading: true});
      }
    } catch (error) {
      showError(error.message);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const addItem = value => {
    try {
      const item = {
        id: Date.now(),
        name: value,
        completed: false,
      };
      firebase.addNewTodo(item);
      setItems(prevTodo => {
        const data = prevTodo.data;
        const newData = [item, ...data];
        return {...prevTodo, data: newData};
      });
    } catch (error) {
      showError(error.message);
    }
  };

  const deleteItem = id => {
    try {
      firebase.deleteTodo(id);
      setItems(prevTodo => {
        const data = prevTodo.data;
        const newData = data.filter(todo => todo.id != id);
        return {...prevTodo, data: newData};
      });
    } catch (error) {
      showError(error.message);
    }
  };

  const toggleCheck = id => {
    try {
      firebase.updateTodo(id);
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
    } catch (error) {
      showError(error.message);
    }
  };

  const showError = errorMessage => {
    setItems({
      ...items,
      error: errorMessage,
      loading: true,
      errorVisible: true,
    });
  };
  const hideError = () => {
    setItems({...items, error: '', errorVisible: false});
  };
  return (
    <TodoContext.Provider
      value={{
        loading: items.loading,
        items: items.data,
        errorContent: items.error,
        errorVisible: items.errorVisible,
        setItems,
        addItem,
        deleteItem,
        toggleCheck,
        hideError,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
