// InboxStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LibraryScreen from '../screens/AppScreens/Library';

const Stack = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="LibraryStackLibrary" // Rename to "InboxStackHome" to make it unique
        component={LibraryScreen}
        options={{title: 'Library'}}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default LibraryStack;
