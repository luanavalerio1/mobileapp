import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenCamera, ScreenLocation} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';


type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Location: undefined
};
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.third,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name ='person' color={colors.secondary} size={24} />
          ),
        }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera}
       options={{
        tabBarIcon: () => (
          <AntDesign name='camera' color={colors.secondary} size={24} />
        )
      }}
      />
      <Tab.Screen name='Location' component={ScreenLocation}
      options={{
        tabBarIcon: () => (
          <Entypo name="location-pin" size={24} color="black" />
        )
      }}
      />
    </Tab.Navigator>
  );
}