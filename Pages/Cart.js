import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles"
import { useSelector } from "react-redux"
import { Button, IconButton } from "react-native-paper"

export const Cart = () => {
    const { carrito } = useSelector(state => state.shop.value)
    return (
        <ScrollView style={globalStyles.scroll} contentContainerStyle={styles.container}>
            <View style={globalStyles.container}>
                {carrito.map( producto => {
                    return (        
                        <View key={producto.id} style={styles.cardContainer}>
                            <View style={styles.descripcionCard}>
                                <Text style={styles.titleCard}>
                                    {producto.title} 
                                </Text>
                                <View style={styles.countCard}> 
                                    <Text>
                                        Cantidad:
                                    </Text>
                                    <Text>
                                        {producto.cantidad} 
                                    </Text>
                                </View>
                                <Text style={styles.priceCard}>
                                    $ {producto.price * producto.cantidad} 
                                </Text>
                            </View>
                            <View style={styles.actionDelete}> 
                                <IconButton  icon={'delete'} size={30}/>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        // flex: 1,
        width: '100%',
        height:100,
        borderRadius: 8,
        flexDirection:'row',
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom:10
        // backgroundColor: 'red'
    },
    // nombreCard: {
    //     backgroundColor: 'yellow',
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    descripcionCard: {
        flex: 2,
    },
    titleCard: {
        fontSize: 20,
    },
    countCard: {
        flexDirection: 'row',
        paddingBottom: 12
    },
    priceCard: {
        fontWeight: 'bold',
        fontSize: 24
    },
    cardImage: {
        width: '100%',
        height: '100%'
    },
    actionDelete: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'flex-end'
    }
    
})