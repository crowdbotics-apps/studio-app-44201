import React, { useState } from "react";
import { SafeAreaView, View, Text, Button, FlatList, Image, StyleSheet } from "react-native";

const ImportantDatesScreen = () => {
  const [events, setEvents] = useState([{
    id: "1",
    title: "Halloween Dress Up Week",
    date: "October 24-30th"
  }, {
    id: "2",
    title: "Holiday Performance",
    date: "December 10th"
  } // Add more events here
  ]);

  const addEvent = () => {
    const newEvent = {
      id: Date.now().toString(),
      title: "New Event",
      date: "2021-10-10"
    };
    setEvents(currentEvents => [...currentEvents, newEvent]);
  };

  const renderEvent = ({
    item
  }) => <View style={styles.eventItem}>
      <Image style={styles.eventImage} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Important Dates</Text>
      <FlatList data={events} renderItem={renderEvent} keyExtractor={item => item.id} />
      <Button title="Add Event" onPress={addEvent} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  eventItem: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  eventImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  eventDetails: {
    flex: 1
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  eventDate: {
    fontSize: 16,
    color: "#888"
  }
});
export default ImportantDatesScreen;