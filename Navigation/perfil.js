import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Perfil, PerfilComponent } from "../Pages/Profile"

const Stack = createNativeStackNavigator()

export const PerfilStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Perfil' component={PerfilComponent}/>
        </Stack.Navigator>
    )
}