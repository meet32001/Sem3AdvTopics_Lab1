import { Text, Image, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/todo.png")} style={styles.image} />
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      
      <Text style={styles.headerDevelopByText}>by Meet Shah</Text>
    </View>
  );
}   

const styles = {
  mainContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "turquoise",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },

  headerText: {
    color: "turquoise",
    fontSize: 25,
    fontWeight: "bold",
  },

  headerDevelopByText: {
    fontSize: 14,
    Colors: "lightgray",
  },

  headerImage: {
    width: 50,
    height: 50,
  },
};
