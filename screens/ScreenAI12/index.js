import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, Button } from "react-native";
const DATA = [{
  id: "1",
  title: "Number of students"
}, {
  id: "2",
  title: "New trials this week"
}, {
  id: "3",
  title: "New trials completed to follow up"
}, {
  id: "4",
  title: "New leads this week"
}, {
  id: "5",
  title: "Where are new leads coming in from"
}, {
  id: "6",
  title: "Returning %"
}, {
  id: "7",
  title: "Class attendance"
}, {
  id: "8",
  title: "Teachers attendance"
}, {
  id: "9",
  title: "# of students participating in events"
}, {
  id: "10",
  title: "% of students participating in events"
}, {
  id: "11",
  title: "% of students in each age group"
}, {
  id: "12",
  title: "% of students by dance style"
}, {
  id: "13",
  title: "% of students by each teacher"
}];

const Item = ({
  title
}) => <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Button title="Access Report" onPress={() => {}} />
  </View>;

const ReportScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({
    item
  }) => {
    return <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <Item title={item.title} />
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{"Reports"}</Text>
      <Image style={styles.image} source={{
      uri: "https://tinyurl.com/42evm3m3"
    }} />
      <ScrollView>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedId} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 16
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  }
});
export default ReportScreen;