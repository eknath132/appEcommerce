import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Pages/Home';
import { Productos } from './Pages/Productos';
import { PaperProvider } from 'react-native-paper';
import { Producto } from './Pages/Producto';

import { store } from './App/store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopStack } from './Navigation/shop';
import { CartStack } from './Navigation/cart';
import { Entypo } from '@expo/vector-icons'
import { LoginStack } from './Navigation/login';
import { MainNavigator } from './Pages/MainNavigation';
const Tabs = createBottomTabNavigator()

const App = () => {
    return (
        <PaperProvider>
            <StatusBar/>
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        </PaperProvider>
    );
}

export default App;

