import { ScrollView, StyleSheet, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles"
import { Button, Text } from "react-native-paper"
import { useState } from "react"
import { CssTextInput } from "../Components/cssTextInput"
import { usePostRegisterMutation } from "../App/services/loginServices"

export const Register = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passRecover, setPassRecover ] = useState('')
    const [ verifyPassword, setVerifyPassword ] = useState(false)

    const [ mutate, {data, isLoading, isError, error} ] = usePostRegisterMutation()

    const registerPost = () => {
        if(password != passRecover) {
            setVerifyPassword(() => true)
            return
        }
        mutate({email, password}).then((data) => {navigation.navigate('SingIn')}).catch((err) => console.log('Error', err))
    }

    return (
        
        <ScrollView style={globalStyles.scroll} contentContainerStyle={globalStyles.container}>
            <View style={style.containerSingUp}>
                <View>
                    <Text style={style.textPrincipal}>
                        Registrarse
                    </Text>
                </View>
                <View style={style.inputsContainer}>
                    <CssTextInput label={'Email'} value={email} changeText={setEmail}/>
                    <CssTextInput label={'Password'} value={password} changeText={setPassword} security/>
                    <CssTextInput label={'Repeat Password'} value={passRecover} changeText={setPassRecover} security/>
                </View>
                {verifyPassword &&
                    <View style={{marginTop: -8}}>
                        <Text style={style.verifyError}>
                            Las contraseñan tienen que ser iguales.
                        </Text>
                    </View>
                }
                <View style={style.buttonContainer}>
                    <Button mode="contained" onPress={() => registerPost()} >
                        Registarse
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    containerSingUp: {
        backgroundColor: '#d0bcff',
        width: '70%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        alignItems:'center',
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 16,
        position:'relative',
        elevation:3
    },
    textPrincipal: {
        fontSize: 36,
        fontWeight:'700'
    },
    inputsContainer: {
        marginTop: 16,
        width: '80%'
    },
    verifyError: {
        color:'red'
    },
    buttonContainer: {
        marginTop: 36,
        width: 150,
        bottom: 12,
    }
})