import { Button, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import categories from '../Datos/categories.json'
import ListaCategory from "../Components/Home/ListCategory";
export const Home = ({ navigation }) => {
    return (
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>
          {categories.map(category => {
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