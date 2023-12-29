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
const Tabs = createBottomTabNavigator()

const App = () => {
    return (
        <PaperProvider>
            <StatusBar/>
            <Provider store={store}>
                <NavigationContainer>
                    <Tabs.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarStyle: styles.tabBar

                        }}
                    >
                        <Tabs.Screen name='Principal' component={ShopStack} options={{tabBarIcon: () => <Entypo name='home' size={40} color={'#fff'}/>}}/>
                        <Tabs.Screen name='Cart' component={CartStack} options={{tabBarIcon: () => <Entypo name='shop' size={40} color={'#fff'}/>}}/>
                    </Tabs.Navigator>
                </NavigationContainer>
            </Provider>
        </PaperProvider>
    );
}

export default App;


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#d0bcff'
    }
})