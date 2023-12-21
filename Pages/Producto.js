import { Image, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import productsJson from '../Datos/products.json'
import { useEffect, useState } from "react";

export const Producto = ({route}) => {
  const { id } = route.params;
  const [ product, setProduct ] = useState({})

  useEffect(() => {
    const filter = productsJson.find(product => product.id === id)
    setProduct(filter)
  },[])

  return (
      <View style={globalStyles.container}>
        <View style={styles.container}>
            <View style={styles.cardContainer}>
            <Text style={styles.cardText}>  
                {product.title}
            </Text>
            <Image source={{uri: product.thumbnail}} style={styles.cardImage}/>
            </View>
        </View>
        <View>
            <Text>
                {product.description}
            </Text>
            <Text>
               $ {product.price}
            </Text>
            <Text>
                {product.discountPercentage}
            </Text>
            <Text>
                {product.stock}
            </Text>
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