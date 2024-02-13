import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import categories from '../Datos/categories.json'
import {TarjetaLista } from "../Components/Home/listaAnimales";
import { useState } from "react";
import { useGetCategoriesQuery } from "../App/services/shopServices";
import { useGetFavoritesQuery, useGetPetsQuery } from "../App/services/mascotas";
import { Icon } from "react-native-paper";
import { useSelector } from "react-redux";
// import { increment, decrement } from "../Features/counter/counterSlice";

export const ListaAnimales = ({ navigation }) => {
  const { idUser } = useSelector(state => state.login.value)
  const { data, isLoading } =  useGetPetsQuery()

  const [ selectItem, setSelectItem ] = useState('perro')
  
  return (
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>
          <Text style={{marginBottom: 20}}>
            Seleciona tu favorito
          </Text>
          <ScrollView horizontal={true} style={{marginBottom: 20}} >
            <Pressable onPress={() => setSelectItem('perro')} style={{padding: 5, backgroundColor: selectItem == 'perro' ? 'rgb(232, 221, 255)' : 'rgb(255, 255, 255)', borderRadius: 10}}>
              <Icon source='dog' size={40}/>
              <Text style={{textAlign:'center', color: selectItem != 'perro' ? 'grey' : 'black'}}>
                Perro
              </Text>
            </Pressable>
            <Pressable onPress={() => setSelectItem('gato')} style={{marginLeft: 5, padding: 5, backgroundColor: selectItem == 'gato' ? 'rgb(232, 221, 255)' : 'rgb(255, 255, 255)', borderRadius: 10}}>
              <Icon source='cat' size={40}/>
              <Text style={{textAlign:'center', color: selectItem != 'gato' ? 'grey' : 'black'}}>
                Perro
              </Text>
            </Pressable>

          </ScrollView>
          
          { !isLoading && data?.map(pet => {
            return (
              <TarjetaLista key={pet.id} pet={pet} navigation={navigation} data={data}/>
            )
          })}
          
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});