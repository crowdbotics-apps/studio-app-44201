import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const eventsData = [{
  id: '1',
  title: 'Event 1',
  date: '2022-09-15'
}, {
  id: '2',
  title: 'Event 2',
  date: '2022-09-20'
}, {
  id: '3',
  title: 'Event 3',
  date: '2022-09-25'
} // Add more events as needed
];

const EventItem = ({
  title,
  date
}) => <View style={styles.itemContainer}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>;

const EventsScreen = () => <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Upcoming Events</Text>
    <FlatList data={eventsData} keyExtractor={item => item.id} renderItem={({
    item
  }) => <EventItem title={item.title} date={item.date} />} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 16,
    color: '#888'
  }
});
export default EventsScreen;