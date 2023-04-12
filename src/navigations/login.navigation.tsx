import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastrar, ScreenLogin} from "../screens"
type RootStackParamList = {
  Login: undefined;
  Cadastrar: undefined
};
type LoginScreenNavigation = StackNavigationProp<RootStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigation
}

export function LoginNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
}