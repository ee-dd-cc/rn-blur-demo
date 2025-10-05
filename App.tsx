import React, { useState } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { BlurView as BlurView2 } from '@danielsaraldi/react-native-blur-view';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  const [isBlur, setIsBlur] = useState(true);
  const goToDetail = () => {
    setIsBlur(false);
    setTimeout(() => {
      navigation.navigate('HomeDetail');
    }, 0);
  }
  return (
    <View style={{ flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
        }}
      >
        <Text>Home</Text>
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate('HomeDetail')}
        />
        {/* <BlurView style={{width: 100, height: 100}} blurType="light" blurAmount={40}>
          <Text>Blur View</Text>
        </BlurView> */}
        <BlurView2 style={{width: 100, height: 100}} type="light" radius={40}>
          <Text>Blur View2</Text>
        </BlurView2>
      </ImageBackground>
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
