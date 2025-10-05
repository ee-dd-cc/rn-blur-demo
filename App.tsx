import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlurView } from '@sbaiahmed1/react-native-blur';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('HomeDetail')}
      />
      <BlurView style={{width: 100, height: 100}} blurType="light" blurAmount={40}>
        <Text>Blur View</Text>
      </BlurView>
    </View>
  );
}

function HomeDetail() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Detail</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // animation: 'none' // fix BlurView
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
