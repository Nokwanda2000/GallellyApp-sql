import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";

const initialStories = [
  { src: require("../assets/images/pexels-pixabay-266004.jpg"), title: "My Latest Adventure" },
  { src: require("../assets/images/pexels-riciardus-307008.jpg"), title: "A Day at the Beach" },
  { src: require("../assets/images/pexels-andrew-harvard-1340985-11311705.jpg"), title: "A Walk in the Park" },
  { src: require("../assets/images/pexels-gabby-k-5996835.jpg"), title: "Weekend Getaway" },
  { src: require("../assets/images/pexels-haleyve-2087391.jpg"), title: "Exploring the Mountains" },
];

const Stories = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>Stories</Text>

      {/* Stories List */}
      <ScrollView>
        <FlatList
          data={initialStories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
              <Image
                source={item.src}
                style={{ width: 100, height: 100, borderRadius: 8, marginRight: 16 }}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Stories;
