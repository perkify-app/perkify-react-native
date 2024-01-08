import { Tabs } from "expo-router";
import { FAIcon } from "../../screens/components/FAIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="merchants"
        options={{
          title: "Merchants",
          tabBarIcon: ({ color }) => <FAIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Loyalty Cards",
          tabBarIcon: ({ color }) => <FAIcon name="dollar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <FAIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: ({ color }) => <FAIcon name="camera" color={color} />,
        }}
      />
    </Tabs>
  );
}
