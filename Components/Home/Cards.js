// import { StyleSheet, Text, View } from "react-native"

// export const Card = () => {
//     return (
//         <View style={styles.containerCard}>
//             <Text>
//                 ssss
//             </Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     containerCard: {
//         width:'30%',
//         height:200,
//         borderRadius: 8,
//         backgroundColor: 'red'
//     }
// })

import * as React from 'react';
import { Card } from 'react-native-paper';

const Card = ({url}) => (
  <Card>
    <Card.Cover source={{ uri: url }} />
  </Card>
);

export default Card;