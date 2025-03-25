import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="gallery" options={{ title: 'Gallery' }} />
      <Tabs.Screen name="albums" options={{ title: 'Albums' }} />
      <Tabs.Screen name="stories" options={{ title: 'Stories' }} />
      <Tabs.Screen name="shared" options={{ title: 'Shared' }} />
    </Tabs>
  );
}
