import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../App/services/shopServices";

export const Productos = ({navigation, route}) => {
  const { category } = route.params;
  const {data} = useGetProductsQuery(category)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    if(data) {
      setProducts(Object.values(data))
    }
  },[data])

  return (
        <ScrollView style={globalStyles.scroll} contentContainerStyle={styles.container}>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      width: '100%',
    },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection:'row',
      flexWrap: 'wrap',
      paddingHorizontal: 8
    },
    cardContainer: {
      width: '49%',
      height: 300,
      borderRadius: 8,
      marginBottom: 24,
      marginTop:30
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