// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import GalleryScreen from "./gallery";


// const Tab = createBottomTabNavigator();

// const AppNavigator = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//         let iconName;
//         if (route.name === "Pictures") iconName = "images";
//         else if (route.name === "Albums") iconName = "albums";
//         else if (route.name === "Stories") iconName = "book";
//         else if (route.name === "Shared") iconName = "share-social";
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: "#007AFF",
//       tabBarInactiveTintColor: "gray",
//       tabBarStyle: { height: 60 },
//     })}
//   >
//     <Tab.Screen name="Pictures" component={GalleryScreen} />
//     {/* <Tab.Screen name="Albums" component={DummyScreen} />
//     <Tab.Screen name="Stories" component={DummyScreen} />
//     <Tab.Screen name="Shared" component={DummyScreen} /> */}
//   </Tab.Navigator>
// );

// export default AppNavigator;
