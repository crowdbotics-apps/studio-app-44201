import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const classesData = [{
  id: '1',
  age: '5-7',
  level: 'Beginner',
  day: 'Monday',
  location: 'Room 1',
  time: '10:00-11:00'
}, {
  id: '2',
  age: '8-10',
  level: 'Intermediate',
  day: 'Tuesday',
  location: 'Room 2',
  time: '11:00-12:00'
} // Add more data as needed
];

const Item = ({
  item
}) => <View style={styles.item}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <View style={styles.details}>
      <Text style={styles.title}>Age: {item.age}</Text>
      <Text style={styles.title}>Level: {item.level}</Text>
      <Text style={styles.title}>Day: {item.day}</Text>
      <Text style={styles.title}>Location: {item.location}</Text>
      <Text style={styles.title}>Time: {item.time}</Text>
    </View>
  </View>;

const ClassesScreen = () => {
  const renderItem = ({
    item
  }) => <Item item={item} />;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Classes</Text>
      <FlatList data={classesData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  details: {
    flex: 1
  },
  title: {
    fontSize: 16,
    color: '#333'
  }
});
export default ClassesScreen;