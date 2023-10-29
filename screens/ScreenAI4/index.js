import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";

const HomePage = () => {
  const dummyData = {
    importantDates: ["2022-03-01", "2022-03-15", "2022-04-01"],
    toDos: ["Meeting with team", "Review reports", "Update project plan"],
    reports: ["Sales Report", "Marketing Report", "Financial Report"],
    messages: ["Message 1", "Message 2", "Message 3"],
    classes: ["Math", "Science", "History"],
    students: ["Student 1", "Student 2", "Student 3"],
    events: ["Event 1", "Event 2", "Event 3"]
  };
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Dashboard</Text>
          <Button title="Important Dates" onPress={() => {}} />
          <Button title="To Dos" onPress={() => {}} />
          <Button title="Reports" onPress={() => {}} />
          <Button title="Messages" onPress={() => {}} />
          <Button title="Classes" onPress={() => {}} />
          <Button title="Students" onPress={() => {}} />
          <Button title="Events" onPress={() => {}} />
        </View>
      </ScrollView>

      <View style={styles.desktop}>
        <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  section: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  },
  desktop: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
export default HomePage;