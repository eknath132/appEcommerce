import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Favorito } from "../Pages/Favorito";

const Stack = createNativeStackNavigator()

export const FavoritoStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorito' component={Favorito} />
        </Stack.Navigator>
    )
}