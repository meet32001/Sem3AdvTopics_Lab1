import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: "turquoise",
      padding: 16,
    },
  
    errorContainer: {
      borderWidth: 1,
      borderColor: "red",
      padding: 16,
      color: "red",
    },
  
    errorText: {
      color: "red",
      fontWeight: "bold",
    },
  
    textInput: {
      borderWidth: 1,
      borderColor: "white",
      padding: 8,
      marginTop: 8,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      elevation: 1,
    },
  
    switch: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  
    button: {
      backgroundColor: "black",
      color: "white",
      padding: 8,
      margin: 8,
    },
  });
  