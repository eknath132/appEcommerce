import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    scroll:{ 
        flex: 1,
        height:'100%',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        padding: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'column'
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection:'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-between',
    }
})