import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Switch, Alert, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TodoListItems({ task, onTaskRemoval, onStatusChange }) {
  const [showModal, setShowModal] = useState(false);
  const [isTaskDone, setIsTaskDone] = useState(task.done); // Local state for the switch

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStatusChangePress = () => {
    const newStatus = !isTaskDone; // Toggle the status
    setIsTaskDone(newStatus); // Update local state
    onStatusChange(task.id); // Notify parent to update global state
  };

  const handleRemovePress = () => {
    Alert.alert(
      'Remove Task',
      'This action will permanently delete this task. This action cannot be undone!',
      [
        {
          text: 'Confirm',
          onPress: () => {
            onTaskRemoval(task.id);
            setShowModal(false);
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  };

  return (
    <>
      <Pressable onPress={handleModalToggle}>
        <View style={styles.container}>
          <Text style={styles.title}>{task.description}</Text>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.text}>Id: {task.id}</Text>
          <Text style={styles.text}>Status: {task.done ? 'Completed' : 'Due'}</Text>
        </View>
      </Pressable>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{task.description}</Text>
            <View style={styles.modalRow}>
              <Switch
                value={isTaskDone} // Use local state for the switch
                onValueChange={handleStatusChangePress}
              />
              <Text style={styles.modalText}>Status: {isTaskDone ? 'Completed' : 'Due'}</Text>
            </View>
            <View style={styles.modalActions}>
              <Pressable onPress={handleRemovePress} style={styles.removeButton}>
                <FontAwesome5 name="trash" size={16} color="#17684f" style={styles.removeIcon} />
                <Text style={styles.removeText}>Remove</Text>
              </Pressable>
              <Pressable onPress={closeModal} style={styles.closeButton}>
                <FontAwesome5 name="times-circle" size={24} color="#17684f" style={styles.closeIcon} />
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 400, // Limit the width on larger screens
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 5,
  },
  removeText: {
    color: '#ffffff',
    marginLeft: 5,
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeText: {
    color: '#ffffff',
    marginLeft: 5,
  },
});

