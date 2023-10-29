import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Button, TextInput } from "react-native";
const tasks = [{
  id: "1",
  task: "Order costumes from Weissmans",
  assignedTo: "Teacher A"
}, {
  id: "2",
  task: "Schedule teacher for Tuesday 4:45pm class",
  assignedTo: "Teacher B"
}, {
  id: "3",
  task: "Message students about joining Santa parade",
  assignedTo: "Teacher C"
}];

const Task = ({
  task,
  assignedTo
}) => <View style={styles.taskContainer}>
    <Image style={styles.taskImage} source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} />
    <View>
      <Text style={styles.taskText}>{task}</Text>
      <Text style={styles.assignedText}>Assigned to: {assignedTo}</Text>
    </View>
  </View>;

const ToDoListScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add new task" style={styles.input} />
        <Button title="Add" onPress={() => {}} />
      </View>
      <FlatList data={tasks} renderItem={({
      item
    }) => <Task task={item.task} assignedTo={item.assignedTo} />} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10,
    borderRadius: 5,
    padding: 5
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  taskImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  taskText: {
    fontSize: 16
  },
  assignedText: {
    fontSize: 14,
    color: "#888"
  }
});
export default ToDoListScreen;