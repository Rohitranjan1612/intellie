// HomeStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/AppScreens/HomeScreens/Home';
import Examinations from '../Screens/AppScreens/HomeScreens/Examinations';
import Quiz from '../Screens/AppScreens/HomeScreens/Quiz';
import Result from '../Screens/AppScreens/HomeScreens/Result';
import Answers from '../Screens/AppScreens/HomeScreens/Answers';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeStackHome" // Rename to "HomeStackHome" to make it unique
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Examinations" // Rename to "HomeStackHome" to make it unique
        component={Examinations}
        options={{ title: 'Examinations' }}
      />
      <Stack.Screen
        name="Quiz" // Rename to "HomeStackHome" to make it unique
        component={Quiz}
        options={{ title: 'Quiz' }}
      />
      <Stack.Screen
        name="Result" // Rename to "HomeStackHome" to make it unique
        component={Result}
        options={{ title: 'Result' }}
      />
      <Stack.Screen
        name="Answers" // Rename to "HomeStackHome" to make it unique
        component={Answers}
        options={{ title: 'Answers' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
