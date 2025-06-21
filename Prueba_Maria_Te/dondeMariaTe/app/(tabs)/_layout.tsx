import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Image, Platform } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import { ModalScreen } from '../modal';
import { theme } from '@/constants/themes/Theme';

import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '@/constants/themes/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  const colorScheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
          headerTitle: () => (
            <Image
              source={require('../../assets/images/icon.png')}
              style={{
                width: 40, height: 40,
                resizeMode: 'contain', borderRadius: '50%',
                alignItems: 'center', alignContent: 'center', alignSelf: 'center',
                marginBottom: Platform.select<number>({
                  web: 0,
                  default: 15
                }) as number,
              }}
            />
          ),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Pressable onPress={() => setModalVisible(true)}>
                {({ pressed }) => (
                  <MaterialIcons
                    name="currency-exchange"
                    size={25}
                    color={theme.Colors.SECONDARY}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
          }}
        />

        <Tabs.Screen
          name="menu"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => <MaterialIcons
              size={28}
              name="restaurant-menu"
              color={color}
            />,
          }}
        />

        <Tabs.Screen
          name="about-us"
          options={{
            title: 'Nosotros',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      </Tabs>

      <ModalScreen
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
