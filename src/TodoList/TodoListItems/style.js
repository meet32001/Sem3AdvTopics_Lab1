import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginLeft: 10,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8d7da",
    padding: 10,
    borderRadius: 5,
  },
  removeIcon: {
    marginRight: 5,
  },
  removeText: {
    fontSize: 16,
    color: "#721c24",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d4edda",
    padding: 10,
    borderRadius: 5,
  },
  closeIcon: {
    marginRight: 5,
  },
  closeText: {
    fontSize: 16,
    color: "#155724",
  },
});
