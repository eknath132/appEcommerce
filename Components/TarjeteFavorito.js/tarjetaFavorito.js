import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';
import { globalStyles } from '../../Styles/globalsStyles';

export const TarjetaFavorito = ({pet, data}) => {
    const [notificacion, setNotificacion] = useState(false)
    
    return (
        <ScrollView style={globalStyles.scroll}>
            <View style={styles.cardContent}>
                <Image source={{uri: pet.foto}} style={styles.cardImage}/> 
                <View style={styles.info}>
                    <Text style={styles.title}>{pet.nombre}</Text>
                    <Text style={{marginTop: 10}}> {pet.edad} </Text>
                    <Text style={{marginTop: 20}}> <Icon source={'google-maps'} size={20}/> {pet.ubicacion}</Text>
                    <Pressable style={styles.button} onPress={() => setNotificacion(true)}>  
                        <Text style={{textAlign:'center', color: 'white'}}>
                            Adoptar
                        </Text>       
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.iconoFavorito}>
                <Icon source={'cards-heart'} size={20} color={MD3Colors.error50}/>
            </Pressable>
            {notificacion && <Notification message="Nos pondremos en contacto, lo antes posible" />} 

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
