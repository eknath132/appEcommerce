import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import { useEffect, useState } from "react";
import { useGetPetInfoQuery } from "../App/services/mascotas";
import Notification from "../Components/notificacion";

export const MascotaDescripcion = ({navigation, route}) => {
  const { id } = route.params;
  const {data} = useGetPetInfoQuery(id)
  const [ notificacion, setNotificacion ] = useState(false)

  useEffect(() => {
    () => {
      setNotificacion(false)
    }
  })

  return (
        <ScrollView style={globalStyles.scroll} contentContainerStyle={styles.container}>
          <View style={styles.image}>
            <Image source={{uri: data?.foto}} style={{width:'100%', height:'100%'}} resizeMode="cover"/>
          </View>
          <View style={styles.containerDescription}>
            <Text style={styles.descriptionTitle}>
              Hola! Soy {data?.nombre},
            </Text>
            <Text style={styles.descriptionSubTitle}>
              Sobre mi:
            </Text>
            <Text style={styles.description}>
              {data?.descripcion}
            </Text>
            <View style={styles.containerButton}>
              <Pressable style={styles.button} onPress={() => setNotificacion(true)}>
                <Text style={styles.textButton}>
                  Contactarme
                </Text>
                
              </Pressable>
            </View>
          </View>
          {notificacion && <Notification message="Nos pondremos en contacto, lo antes posible" />} 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row',
      flexWrap: 'wrap',
      paddingHorizontal: 8,
      height: '100%',

    },
    image: {
      width:'100%',
      height:400
    },
    containerDescription: {
      width:'100%',
      backgroundColor:'#f6f5f5',
      borderRadius: 20,
      padding: 8,
      position: 'absolute',
      top: 350,
      marginLeft: 8
    },
    descriptionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    descriptionSubTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 24
    },
    description: {
      fontSize: 16,
      marginTop:24
    },
    containerButton: {
      width: '100%',
      alignItems:'center',
      marginTop: 24,
      marginBottom: 18
    },
    button: {
      width: 150,
      backgroundColor:'#663399',
      borderRadius: 100,
      paddingVertical: 8
    },
    textButton: {
      color: '#fff',
      textAlign:'center'
    }
});