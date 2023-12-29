import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../Pages/Home";
import { Productos } from "../Pages/Productos";
import { Producto } from "../Pages/Producto";

const Stack = createNativeStackNavigator()

export const ShopStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Productos' component={Productos} options={({ route }) => ({ title: route.params.category })}/>
            <Stack.Screen name='Producto' component={Producto} options={({ route }) => ({ title: route.params.product })}/>
        </Stack.Navigator>
    )
}