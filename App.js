import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainNavigator } from './Pages/MainNavigation';
import { init } from './Bd';
const Tabs = createBottomTabNavigator()
init()
    .then(( ) => console.log('DB init'))
    .catch(err => console.log('err', err))
    
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

