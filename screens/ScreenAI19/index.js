import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const studentsData = [{
  id: '1',
  lastName: 'Anderson',
  firstName: 'John',
  age: 15,
  birthdate: '2006-05-12',
  phoneNumber: '123-456-7890',
  email: 'john@gmail.com',
  parentName: 'Mr. Anderson',
  medicalInfo: 'N/A'
}, {
  id: '2',
  lastName: 'Brown',
  firstName: 'Emma',
  age: 16,
  birthdate: '2005-08-24',
  phoneNumber: '234-567-8901',
  email: 'emma@gmail.com',
  parentName: 'Mrs. Brown',
  medicalInfo: 'N/A'
} // Add more students here...
];

const StudentScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Students</Text>
      </View>
      <FlatList data={studentsData.sort((a, b) => a.lastName.localeCompare(b.lastName))} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
              <Text>Age: {item.age}</Text>
              <Text>Birthdate: {item.birthdate}</Text>
              <Text>Phone: {item.phoneNumber}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Parent: {item.parentName}</Text>
              <Text>Medical Info: {item.medicalInfo}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ee'
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default StudentScreen;