// InboxStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InboxScreen from '../screens/AppScreens/Inbox';

const Stack = createNativeStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="InboxStackInbox" // Rename to "InboxStackHome" to make it unique
        component={InboxScreen}
        options={{title: 'Home'}}
      />
      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default InboxStack;
