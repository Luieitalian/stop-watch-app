import React, {useCallback, useEffect, useState} from 'react';
import Loading from './components/Loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/home';
import Records from './screens/records';
import {PaperProvider} from 'react-native-paper';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsLoading(false);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return !isLoading ? (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="home">
              {(props) => (
                <Home {...props} onLayoutRootView={onLayoutRootView} />
              )}
            </Stack.Screen>
            <Stack.Screen name="records" component={Records} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  ) : (
    <Loading />
  );
};

export default App;
