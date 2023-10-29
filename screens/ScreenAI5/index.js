import React from "react";
import { SafeAreaView, Text, StyleSheet, Button, FlatList } from "react-native";

const TeacherDashboard = ({
  navigation
}) => {
  const sections = ["Important Dates", "To Do List", "Messages", "Class List and Schedule", "Attendance", "Class Management", "Notes for Admin"];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Teacher Dashboard</Text>
      <FlatList data={sections} renderItem={({
      item
    }) => <Button title={item} onPress={() => navigation.navigate(item)} />} keyExtractor={(item, index) => index.toString()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  }
});
export default TeacherDashboard;