import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Dashboard = () => {
  const buttons = ['Classes', 'Messages', 'Video Lessons', 'Homework', 'Events', 'Join a new Class'];
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Dashboard</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((button, index) => <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#4B9DFE',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default Dashboard;