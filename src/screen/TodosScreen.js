import React, {useState, useEffect, useContext, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AddInput from './../components/AddInput';
import Empty from './../components/Empty';
import TodoList from './../components/TodoList';
import Button from './../components/Button';
import {COLORS, todoStatus} from './../constants';
import styles from './../components/styles';
import {TodoContext} from './../provider/createAppContext';

const TodosScreen = () => {
  const {items, loading, deleteItem, toggleCheck} = useContext(TodoContext);
  const [data, setData] = useState(items);
  const [status, setStatus] = useState(todoStatus.ALL);
  const [toggleShowStatus, setToggleShowStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData(items);
    setIsLoading(loading);
  }, [items]);

  const toggleAll = () => {
    setToggleShowStatus(!toggleShowStatus);
  };

  const filterTodosData = status => {
    setStatus(status);
    switch (status) {
      case todoStatus.ALL:
        return setData(items);
      case todoStatus.ACTIVE:
        return setData(items.filter(todo => !todo.completed));
      case todoStatus.COMPLETED:
        return setData(items.filter(todo => todo.completed));
    }

    return data;
  };

  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Todo App</Text>
          <AddInput
            submitHandler={() =>
              status !== todoStatus.ALL && setStatus(todoStatus.ALL)
            }
          />
        </View>
      </View>
    );
  }

  function renderTodos() {
    return (
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={() => <Empty />}
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <TodoList
            item={item}
            deleteItem={deleteItem}
            toggleCheck={toggleCheck}
            showStatus={toggleShowStatus}
          />
        )}
      />
    );
  }

  function renderBottom() {
    return (
      <View style={styles.bottomContainer}>
        <Button
          pressHandler={() => setToggleShowStatus(!toggleShowStatus)}
          style={[
            styles.buttonContainer,
            {backgroundColor: COLORS.blue, width: 120},
          ]}>
          <Text style={[styles.buttonText, {color: COLORS.white}]}>
            Toggle All
          </Text>
        </Button>
        <View style={styles.buttonSection}>
          <Text style={styles.filterText}>Filter</Text>
          <Button
            status={todoStatus.ALL}
            pressHandler={filterTodosData}
            style={[
              styles.buttonContainer,
              status === todoStatus.ALL && {backgroundColor: COLORS.green},
            ]}>
            <Text style={styles.buttonText}>All</Text>
          </Button>
          <Button
            status={todoStatus.COMPLETED}
            pressHandler={filterTodosData}
            style={[
              styles.buttonContainer,
              status === todoStatus.COMPLETED && {
                backgroundColor: COLORS.green,
              },
            ]}>
            <Text style={styles.buttonText}>Done</Text>
          </Button>
          <Button
            status={todoStatus.ACTIVE}
            pressHandler={filterTodosData}
            style={[
              styles.buttonContainer,
              status === todoStatus.ACTIVE && {backgroundColor: COLORS.green},
            ]}>
            <Text style={styles.buttonText}>Active</Text>
          </Button>
        </View>
      </View>
    );
  }
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        {renderTodos()}
        {renderBottom()}
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color={COLORS.darkgray} />
      </View>
    );
  }
};

export default TodosScreen;
