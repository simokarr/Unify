import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable} from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6C1B45',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { 
          backgroundColor: 'gray',
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                    <AntDesign
                      name="message1"
                      size={24}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="addFriends"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
