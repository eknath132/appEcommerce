import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cart } from "../Pages/Cart";

const Stack = createNativeStackNavigator()

export const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Carrito' component={Cart} />
        </Stack.Navigator>
    )
}