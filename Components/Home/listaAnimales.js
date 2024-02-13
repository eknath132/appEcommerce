import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';
import { globalStyles } from '../../Styles/globalsStyles';
import { useGetFavoritesQuery, usePostFavoriteMutation } from '../../App/services/mascotas';
import { useDispatch, useSelector } from 'react-redux';
import { buscarInfoFavorito } from '../../Features/mascotasFavoritas/mascotasSlice';

export const TarjetaLista = ({pet, navigation, data}) => {
    const { idUser }  = useSelector(state => state.login.value)
    const [favorito, setFavorito] = useState(false)
    const { data: favoritos, refetch } =  useGetFavoritesQuery(idUser)
    const [mutate] = usePostFavoriteMutation()
    const dispatch = useDispatch()
    
    const PostService = () => {
        let ids;
        if(favoritos?.ids.includes(pet.id)) {
            const arrayValues = favoritos.ids.split(',').map(item => item.trim());
            const filteredArray = arrayValues.filter(item => item != pet.id);
            const updatedStringValue = filteredArray.join(', ');
            dispatch(buscarInfoFavorito({mascotas: data, ids: updatedStringValue}))
            mutate({id: idUser, info: {ids: updatedStringValue}}).then((data) => refetch())
            return;
        } else {
            ids = favoritos?.ids  ? `${favoritos?.ids}, ${pet.id}` : `${pet.id}`
            dispatch(buscarInfoFavorito({mascotas: data, ids}))
            mutate({id: idUser, info: {ids: ids}}).then((data) => refetch())
        }
    }
    
    useEffect(() => {
        const ids = `${favoritos?.ids}`
        dispatch(buscarInfoFavorito({mascotas: data, ids: ids}))
        if(favoritos?.ids.includes(pet.id)) {
            setFavorito(true)
        }else {
            setFavorito(false)
        }
    },[favoritos])

    return (
        <ScrollView style={globalStyles.scroll}>
            <View style={styles.cardContent}>
                <Image source={{uri: pet.foto}} style={styles.cardImage}/> 
                <View style={styles.info}>
                    <Text style={styles.title}>{pet.nombre}</Text>
                    <Text style={{marginTop: 10}}> {pet.edad} </Text>
                    <Text style={{marginTop: 20}}> <Icon source={'google-maps'} size={20}/> {pet.ubicacion}</Text>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('MascotaDescripcion', { id: pet.id })}>  
                        <Text style={{textAlign:'center', color: 'white'}}>
                            Mas info
                        </Text>       
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.iconoFavorito} onPress={() => PostService()}>
                <Icon source={'cards-heart'} size={20} color={ favorito ? MD3Colors.error50 : MD3Colors.secondary90 }/>
            </Pressable>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    cardContent:{
        flexDirection:'row',
        marginBottom: 10,
        height: 150,
        width: '100%',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 15,
        position: 'relative',
        marginBottom: 20
    },
    cardImage: {
        width: 200,
        height: 150,
        marginRight: 10,
        borderRadius: 15,
    },
    info: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    iconoFavorito: {
        position:'absolute',
        bottom: 30,
        right: 10
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#663399',
        width: 100,
        borderRadius: 100,
        marginTop: 20
    }
})
