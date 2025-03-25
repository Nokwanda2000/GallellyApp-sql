import React, { useState } from "react";
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { format } from 'date-fns';

const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0];
      const date = new Date();
      const month = format(date, "MMMM");
      const formattedDate = format(date, "MMMM dd, yyyy");

      setImages((prevImages) => [
        ...prevImages,
        { 
          src: { uri: selectedImage.uri },
          month, 
          date: formattedDate, 
          id: new Date().toISOString(),
        },
      ]);
    }
  };

  const deleteImage = (id: string) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const filteredImages = images.filter((img) =>
    img.month.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f7f7", padding: 16 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>Gallery</Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <FontAwesome name="search" size={20} color="gray" />
          <FontAwesome name="ellipsis-v" size={20} color="gray" />
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={{
          borderColor: "#ddd",
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: "#fff",
          fontSize: 16,
          color: "#333",
        }}
        placeholder="Search by month..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Upload Button */}
      <TouchableOpacity
        onPress={pickImage}
        style={{
          backgroundColor: "black",
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          marginBottom: 20,
          alignItems: "center",
          elevation: 5,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Upload Image</Text>
      </TouchableOpacity>

      {/* Images by Month */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {["August", "July"].map((month) => (
          <View key={month} style={{ marginBottom: 24 }}>
            <Text style={{ color: "#333", fontWeight: "bold", fontSize: 18, marginBottom: 12 }}>
              {month.toUpperCase()}
            </Text>
            <FlatList
              data={filteredImages.filter((img) => img.month === month)}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: "30%",
                    height: 200,
                    margin: 8,
                    borderRadius: 12,
                    overflow: "hidden",
                    elevation: 5,
                    backgroundColor: "#fff",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    shadowOffset: { width: 0, height: 2 },
                  }}
                >
                  <Image
                    source={item.src}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 12,
                    }}
                    resizeMode="cover"
                  />
                  <View style={{ padding: 8 }}>
                    <Text style={{ fontWeight: "bold", color: "#333", fontSize: 14 }}>
                      {item.date}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => deleteImage(item.id)}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      padding: 8,
                      borderRadius: 20,
                    }}
                  >
                    <FontAwesome name="trash" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ))}
      </ScrollView>

      {/* Loading Spinner */}
      {loading && (
        <View style={{ position: "absolute", top: "50%", left: "50%", zIndex: 999 }}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
      )}
    </View>
  );
};

export default Gallery;
