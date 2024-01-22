import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Register } from "../Pages/Register";
import { SignIn } from "../Pages/SignIn";

const Stack = createNativeStackNavigator()

export const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SingIn' component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}