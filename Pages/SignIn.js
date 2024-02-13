import { Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles"
import { Button, Text } from "react-native-paper"
import { useState } from "react"
import { CssTextInput } from "../Components/cssTextInput"
import { usePostLoginMutation } from "../App/services/loginServices"
import { useDispatch } from "react-redux"
import { saveToken } from "../Features/login/userSlice"
import { insertSession } from "../Bd"

export const SignIn = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ mutate, { isLoading } ] = usePostLoginMutation()
    const dispatch = useDispatch()

    const postLogin = () => {
        mutate({email, password}).then(({data}) => {
            const user = data.email
            const token = data.idToken
            const idUser = data.localId
            dispatch(saveToken({user, token, idUser}))
            insertSession({email: data.email, token: data.idToken, localId: data.localId})
                .then((result) => console.log('result', result))
                .catch((err) => console.log('err', err))

        })
    }

    return (
        <>
            <SafeAreaView style={{flex:1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
                <ScrollView style={globalStyles.scroll} contentContainerStyle={{...globalStyles.container,}}>
                    
                    <View style={style.containerSingUp}>
                    <View>
                        <Text style={style.textPrincipal}>
                            Login
                        </Text>
                    </View>
                        <View style={style.inputsContainer}>
                            <CssTextInput label={'Email'} value={email} changeText={setEmail}/>
                            <CssTextInput label={'Password'} value={password} changeText={setPassword} security/>
                        </View>
                        <View style={style.passRecover}>
                            <View style={{justifyContent:'center'}}>
                                <Text>
                                    Te olvidaste tu contraseña ?
                                </Text>
                            </View>
                        </View>
                        <View style={style.buttonContainer}>
                            <Button mode="contained" onPress={() => postLogin()} disabled={isLoading}>
                                Entrar
                            </Button>
                        </View>
                        <Pressable style={style.buttonRegister} onPress={() => navigation.navigate('Register')}>
                            <Text>
                                Registrarse
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
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
    passRecover: {
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop: -16
    },
    buttonContainer: {
        marginTop: 36,
        width: 150,
        bottom: 12,
    },
    buttonRegister: {
        marginTop: -8
    }
})