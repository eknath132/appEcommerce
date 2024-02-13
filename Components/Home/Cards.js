import * as React from 'react';
import { Card } from 'react-native-paper';

const Card = ({url}) => (
  <Card>
    <Card.Cover source={{ uri: url }} />
  </Card>
);

export default Card;