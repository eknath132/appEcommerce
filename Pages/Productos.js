import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import productsJson from '../Datos/products.json'
import { useEffect, useState } from "react";

export const Productos = ({navigation, route}) => {
  const { category } = route.params;
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    const filter = productsJson.filter(product => product.category === category)
    setProducts(filter)
  },[])

  return (
      <View style={globalStyles.container}>
        <View style={styles.container}>
          {products?.map(product => {
            return (
              <View key={product.id} style={styles.cardContainer} >
                <TouchableOpacity onPress={() => navigation.navigate('Producto', {product: product.title, id: product.id})}>
                  <Text style={styles.cardText}>  
                      {product.title}
                  </Text>
                  <Image source={{uri: product.thumbnail}} style={styles.cardImage}/>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row',
      flexWrap: 'wrap',
      gap: 16
    },
    cardContainer: {
      width: '30%',
      height: 300,
      borderRadius: 8,
      marginBottom: 24
    },
    cardImage:{
      width:'100%',
      height:'100%',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black'
    },
    cardText: {
      fontSize: 16,
      textAlign:'center',
      width:'100%',
      color:'black'
    }
});