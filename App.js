import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Pages/Home';
import { Productos } from './Pages/Productos';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <>
            <PaperProvider>
                <StatusBar/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' component={Home} />
                        <Stack.Screen name='Productos' component={Productos} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </>
    );
}

export default App;
