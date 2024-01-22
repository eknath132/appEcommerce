import { Button, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import categories from '../Datos/categories.json'
import ListaCategory from "../Components/Home/ListCategory";
import { useState } from "react";
import { useGetCategoriesQuery } from "../App/services/shopServices";
// import { increment, decrement } from "../Features/counter/counterSlice";

export const Home = ({ navigation }) => {

  const { data, isLoading } =  useGetCategoriesQuery()
  
    return (
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>
          {/* <View>
            <Button title="Incrementar" onPress={() => dispatch(increment())}/>
            <Text> {count2} </Text>
            <Button title="Decrementar" onPress={() => dispatch(decrement())}/>
          </View> */}
          
          { !isLoading && data?.map(category => {
            return (
              <ListaCategory key={category} title={category} navigation={navigation}/>
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