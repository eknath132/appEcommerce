import { useEffect, useState } from "react"
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Button, Icon } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import * as ImagePicker from  'expo-image-picker'
import { useGetInfoUserQuery, usePostInfoUserMutation } from "../App/services/loginServices"
import { globalStyles } from "../Styles/globalsStyles"
import { clearUser } from "../Features/login/userSlice"
import { deleteSession } from "../Bd"

export const PerfilComponent = () => {
    const { user, idUser } = useSelector(state => state.login.value)
    const dispatch = useDispatch()
    const {data, isSuccess} = useGetInfoUserQuery(idUser)
    const [ edit, setEdit ] = useState(false)
    const [ image, setImage ] = useState('')
    const [ nombreForm, setNombreForm ] = useState('')
    const [ edadForm, setEdadForm ] = useState('')
    const [ telForm, setTelForm ] = useState('')

    const [ mutate, {error} ] = usePostInfoUserMutation()

    useEffect(() => {
        if(isSuccess) {
            setNombreForm(() => data?.nombre)
            setEdadForm(() => data?.edad)
            setImage(() => data?.imagen)
            setTelForm(() => data?.tel)

        } 
    },[data])

    const pickImage = async() => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(granted) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect:[4,3],
                base64: true,
                quality: 1
            })
            if(!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
            }
        }
    }


    const guardarInfo = () => {
        mutate({idUser, info: {nombre: nombreForm, edad: edadForm, imagen: image, tel: telForm}}).then((data) => setEdit(prev => !prev))
    }

    return (
        <ScrollView style={globalStyles.scroll} contentContainerStyle={style.containerProfile}>
            <Image source={ image ? {uri: image} : require('../assets/profile.jpg')} style={style.image}/>
            {edit &&    
              
                <View style={style.containerDatos}>
                    <Button mode="contained" onPress={() => pickImage()}>
                        Cambiar foto de perfil
                    </Button>
                </View>
            }
            <View style={style.containerDatos}>
                <View style={style.containerDatosRow}>
                    <Text style={style.textInfo}>
                        Nombre: {' '}
                    </Text>
                    <TextInput style={style.textInfoInput} onChangeText={(text) => setNombreForm(() => text)} editable={edit} value={nombreForm}/>
                </View>
                <View style={style.containerDatosRow}>
                    <Text style={style.textInfo}>
                        Edad: {' '}
                    </Text>
                    <TextInput style={style.textInfoInput} onChangeText={(text) => setEdadForm(() => text)} editable={edit} value={edadForm}/>
                </View>
                <View style={style.containerDatosRow}>
                    <Text style={style.textInfo}>
                        Email: {' '}
                    </Text>
                    <TextInput style={style.textInfoInput} editable={false} value={user}/>
                </View>
                <View style={style.containerDatosRow}>
                    <Text style={style.textInfo}>
                        Celular: {' '}
                    </Text>
                    <TextInput style={style.textInfoInput} onChangeText={(text) => setTelForm(() => text)} editable={edit} value={telForm}/>
                </View>
                <View style={{marginTop: 36}}>
                    <Button mode="contained" onPress={() => {deleteSession({localId: idUser}), dispatch(clearUser())}}> Cerrar sesion </Button>
                </View>
            </View>
            <View style={{marginTop: 36}}>
                <Button mode="contained" disabled={!edit} onPress={() => guardarInfo()}> Guardar datos </Button>
            </View>
            <Pressable style={style.buttonEdit} onPress={() => setEdit(prev => !prev)}>
                <Icon size={30} source={'account-edit'}/>
            </Pressable>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    containerProfile: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    containerDatos: {
        marginTop: 20,
        alignItems:'center'
    },
    containerDatosRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems:'center'
    },
    textInfo: {
        fontSize: 20,
        fontWeight: '700',
        width: 100
    },
    textInfoInput: {
        fontSize: 20,
        marginLeft: 8,
        width: 250,
        borderWidth: 1,
        borderRadius:100,
        paddingTop:10,
        paddingBottom: 10,
        textAlign:'center'
    },
    buttonEdit: {
        position: 'absolute',
        right: 16,
        top: 100
    }


})