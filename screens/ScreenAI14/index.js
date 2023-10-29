import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from "react-native";
const messages = [{
  id: "1",
  sender: "Teacher",
  recipient: "Student",
  message: "Hello Student, hope you are doing well."
}, {
  id: "2",
  sender: "Student",
  recipient: "Teacher",
  message: "Hello Teacher, I am doing well. Thank you."
}, {
  id: "3",
  sender: "Parent",
  recipient: "Teacher",
  message: "Hello Teacher, I wanted to discuss about my child's progress."
}, {
  id: "4",
  sender: "Teacher",
  recipient: "Parent",
  message: "Hello Parent, sure we can discuss about it. Let's schedule a meeting."
} // Add more messages here
];

const MessageScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList data={messages} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.messageBox}>
            <Image style={styles.image} source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} />
            <View style={styles.textContainer}>
              <Text style={styles.sender}>
                {item.sender} to {item.recipient}
              </Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  messageBox: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textContainer: {
    marginLeft: 10
  },
  sender: {
    fontWeight: "bold",
    fontSize: 16
  },
  message: {
    marginTop: 5,
    fontSize: 14
  }
});
export default MessageScreen;