import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ListaAnimales } from "../Pages/Animales";
import { MascotaDescripcion } from "../Pages/Descripcion";

const Stack = createNativeStackNavigator()

export const PetsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Mascotas' component={ListaAnimales} />
            <Stack.Screen name='MascotaDescripcion' component={MascotaDescripcion} options={{headerTitle: ''}}/>
            {/* <Stack.Screen name='Producto' component={Producto} options={({ route }) => ({ title: route.params.product })}/> */}
        </Stack.Navigator>
    )
}