import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../Styles/globalsStyles";

export const Productos = () => {
    return (
      <View style={globalStyles.container}>
        <Text>
          Pantalla HOME
        </Text>
      </View>
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