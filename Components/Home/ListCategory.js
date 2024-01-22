import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-paper';

const ListaCategory = ({title, navigation}) => (
  <Card style={styles.cardContent}>
    <Card.Content style={styles.contentContainer}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View>
            <Button mode={'contained'} onPress={() => navigation.navigate('Productos', {category: title})}>
                Ver
            </Button>
        </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
    cardContent:{
        flexDirection:'row',
        marginBottom: 10
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'100%',
    },
    title: {
        fontSize: 18,
    }
})

export default ListaCategory;