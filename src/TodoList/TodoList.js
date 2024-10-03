import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TodoListItems from './TodoListItems/TodoListItems';

export default function TodoList(props) {
  return (
    <ScrollView style={styles.container}>
      {props.tasks.map((task, index) => (
        <TodoListItems
          key={index}
          task={task}
          status={task.done}
          onTaskRemoval={props.onTaskRemoval}
          onStatusChange={props.onStatusChange}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});