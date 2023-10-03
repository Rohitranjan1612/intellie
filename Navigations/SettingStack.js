
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingS from '../Screens/AppScreens/SettingScreens/Setting';
import Profile from '../Screens/AppScreens/SettingScreens/Profile';
import Checkout from '../Screens/AppScreens/SettingScreens/Checkout';
import PaymentHistory from '../Screens/AppScreens/SettingScreens/PaymentHistory';

const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingS" // Rename to "InboxStackHome" to make it unique
        component={SettingS}
        options={{ title: 'SettingS' }}
      />
      <Stack.Screen
        name="Profile" // Rename to "InboxStackHome" to make it unique
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="PaymentHistory" // Rename to "InboxStackHome" to make it unique
        component={PaymentHistory}
        options={{ title: 'PaymentHistory' }}
      />
      <Stack.Screen
        name="Checkout" // Rename to "InboxStackHome" to make it unique
        component={Checkout}
        options={{ title: 'Checkout' }}
      />

      {/* Add other screens related to the "Home" tab */}
    </Stack.Navigator>
  );
};

export default SettingStack;
