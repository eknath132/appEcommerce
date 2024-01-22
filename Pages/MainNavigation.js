import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ShopStack } from '../Navigation/shop';
import { CartStack } from '../Navigation/cart';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { LoginStack } from '../Navigation/login';
import { PerfilStack } from '../Navigation/perfil';

const Tabs = createBottomTabNavigator()

export const MainNavigator = () => {
    const {token} = useSelector(state => state.login.value)
    return (
        <NavigationContainer>
            {!token 
                ?   LoginStack()
                :   <Tabs.Navigator
                        screenOptions={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarStyle: styles.tabBar

                        }}
                        initialRouteName='Principal'
                    >
                        <Tabs.Screen name='Principal' component={ShopStack} options={{tabBarIcon: () => <Entypo name='home' size={40} color={'#fff'}/>}}/>
                        <Tabs.Screen name='Cart' component={CartStack} options={{tabBarIcon: () => <Entypo name='shop' size={40} color={'#fff'}/>}}/>
                        <Tabs.Screen name='Profile' component={PerfilStack} options={{tabBarIcon: () => <Entypo name='user' size={40} color={'#fff'}/>}}/>

                    </Tabs.Navigator>
            }
            
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#d0bcff'
    }
})