import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";

const sharedItems = [
  { src: require("../assets/images/pexels-riciardus-307008.jpg"), sharedBy: "John" },
  { src: require("../assets/images/pexels-gabby-k-5996835.jpg"), sharedBy: "Sarah" },
  { src: require("../assets/images/pexels-pixabay-266004.jpg"), sharedBy: "Michael" },
  { src: require("../assets/images/pexels-haleyve-2087391.jpg"), sharedBy: "Emily" },
  { src: require("../assets/images/pexels-andrew-harvard-1340985-11311705.jpg"), sharedBy: "Chris" },
];

const Shared = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>Shared</Text>

      {/* Shared Items List */}
      <ScrollView>
        <FlatList
          data={sharedItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
              <Image
                source={item.src}
                style={{ width: 100, height: 100, borderRadius: 8, marginRight: 16 }}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Shared by {item.sharedBy}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Shared;
