import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritoStack } from '../Navigation/cart';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { LoginStack } from '../Navigation/login';
import { PerfilStack } from '../Navigation/perfil';
import { useEffect } from 'react';
import { fetchSession } from '../Bd';
import { saveToken } from '../Features/login/userSlice';
import { PetsStack } from '../Navigation/pet';

const Tabs = createBottomTabNavigator()

export const MainNavigator = () => {
    const {token} = useSelector(state => state.login.value)
    const dispatch = useDispatch()

    useEffect(() => {
        (async() => {
            try {
                const session = await fetchSession();
                if(session?.rows.length) {
                    const user = session.rows._array[0]
                    const token = user.token
                    const idUser = user.localId
                    dispatch(saveToken({user: user.email, token, idUser}))
                }
            } catch (error) {
                console.log('error', error)
            }
        })()

    },[])

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
                        <Tabs.Screen name='Principal' component={PetsStack} options={{tabBarIcon: () => <Entypo name='home' size={40} color={'#fff'}/>}}/>
                        <Tabs.Screen name='Favoritos' component={FavoritoStack} options={{tabBarIcon: () => <Entypo name='heart' size={40} color={'#fff'}/>}}/>
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