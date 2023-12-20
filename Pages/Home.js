import { Button, ScrollView, StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";
import { Card } from "../Components/Home/Cards";

export const Home = ({ navigation }) => {
    return (
      <ScrollView style={globalStyles.scroll}>
        <View style={globalStyles.container}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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