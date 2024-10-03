import React, { useState } from "react";
import { View, Text, Switch, Button, TextInput } from "react-native";
import styles from "./style";

export default function Form(props) {
  const [description, setDescription] = useState("");
  const [isErrorVisible, setErrorVisible] = useState(false);
  const [isSwitchOn, setSwitch] = useState(false); // Use this to control the switch

  const handleAddTask = () => {
    if (description) {
      props.onAddTask(description, isSwitchOn); // Pass the current switch state
      setErrorVisible(null);
      setDescription("");
      setSwitch(false); // Reset the switch state when a task is added
    } else {
      setErrorVisible("The description is required.");
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleStatusChange = (value) => {
    setSwitch(value); // Update switch state
  };

  return (
    <View style={styles.container}>
      {isErrorVisible && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Attention</Text>
          <Text style={styles.errorText}>This description is required</Text>
        </View>
      )}

      <TextInput
        style={styles.textInput}
        placeholder="Enter a Title"
        onChangeText={handleDescriptionChange}
        value={description}
      />

      <View style={styles.switch}>
        <Text>Completed?</Text>
        <Switch onValueChange={handleStatusChange} value={isSwitchOn} />
      </View>

      <Button style={styles.button} title="Add Task" onPress={handleAddTask} />
    </View>
  );
}
