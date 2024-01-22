import { Image, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import { Button } from "react-native-paper";
import { pushCarrito } from "../Features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { useGetProductQuery } from "../App/services/shopServices";

export const Producto = ({route}) => {
    const { id } = route.params;
    const {data: product, isLoading} = useGetProductQuery(id)
    const dispatch = useDispatch()
    
    return (
        <View style={globalStyles.container}>
            {!isLoading && 
                <View style={styles.container}>
                    <View style={styles.cardContainer}>
                        <Text numberOfLines={1} style={styles.cardText}>  
                            {product.title}
                        </Text>
                        <Image source={{uri: product.thumbnail}} style={styles.cardImage}/>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={styles.titleText}>
                            Descripcion: 
                        </Text>
                        <Text numberOfLines={3} style={styles.textInfo}>
                            {product.description} sd as dasd asda sasd asdawwd asd asd  asdasd asd asd asd asd
                        </Text>
                        <Text style={styles.titleText}>
                            Precio: 
                        </Text>
                        <Text style={styles.textInfo}>
                            $ {product.price}
                        </Text>
                        <Text style={styles.titleText}>
                            Descuento: 
                        </Text>
                        <Text style={styles.textInfo}>
                            {product.discountPercentage}
                        </Text>
                        <Text style={styles.titleText}>
                            Stock: 
                        </Text>
                        <Text style={styles.textInfo}>
                            {product.stock}
                        </Text>
                        <Button icon={'cart'} mode={"contained"} style={styles.buttonInfo} onPress={() => dispatch(pushCarrito(product))} disabled={ !product.stock }>
                            Agregar al carrito
                        </Button>
                    </View>
                </View>
            }
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
      gap: 16,
    },
    cardContainer: {
      width: '30%',
      height: 300,
      borderRadius: 8,
      marginBottom: 24,
    },
    cardImage:{
      width:'100%',
      height:'100%',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black'
    },
    cardText: {
      fontSize: 24,
      textAlign:'center',
      width:'100%',
      color:'black'
    },
    // INFO
    containerInfo: {
      width:'60%',
      height: 350,
      overflow:'hidden',
      // backgroundColor: 'red'
    },
    titleText: {
      fontWeight: '700',
      fontSize: 20,
      marginTop: 20
    },
    textInfo: {
      fontSize: 18,
      marginLeft: 4
    },
    buttonInfo: {
      position: 'absolute',
      bottom: 0,
      alignSelf:'center'
    }
});