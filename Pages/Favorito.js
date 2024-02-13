import { Image, ScrollView, StyleSheet } from "react-native"
import { globalStyles } from "../Styles/globalsStyles"
import { useSelector } from "react-redux"
import { TarjetaFavorito } from "../Components/TarjeteFavorito.js/tarjetaFavorito"

export const Favorito = ({navigation}) => {
    const {favoritos} = useSelector(state => state.pets.value)

    return (
        <ScrollView style={globalStyles.scroll}>
            { favoritos?.map(pet => {
            return (
              <TarjetaFavorito key={pet.id} pet={pet} navigation={navigation}/>
            )
          })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height:100,
        borderRadius: 8,
        flexDirection:'row',
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom:10
    },
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
        justifyContent:'center',
        alignItems:'flex-end'
    }
    
})