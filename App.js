import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Header from "./src/Header/Header";
import TodoList from "./src/TodoList/TodoList";
import Form from "./src/Form/Form";
import uuid from "react-uuid";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const Tab = createBottomTabNavigator();
  const [tasks, setTasks] = useState([
    { id: uuid(), description: 'Task 1', done: false },
  ]);

  const handleAddTask = (description, taskDone) => {
    setTasks([...tasks, { id: uuid(), description, done: taskDone }]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'List') {
              iconName = 'list';
            } else if (route.name === 'Add') {
              iconName = 'plus-circle';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="List">
          {(props) => (
            <View style={styles.container}>
              <TodoList 
                {...props} 
                tasks={tasks} 
                onStatusChange={handleStatusChange} 
                onTaskRemoval={handleTaskRemoval} 
              />
            </View>
          )}
        </Tab.Screen>
        <Tab.Screen name="Add">
          {(props) => (
            <View style={styles.container}>
              <Form {...props} onAddTask={handleAddTask} />
            </View>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
