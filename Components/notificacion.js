import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Notification = ({ message, duration = 5000 }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Inicialmente oculto

  useEffect(() => {
    // Anima la notificación para que aparezca
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Después de `duration`, oculta la notificación
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.notification, { opacity: fadeAnim }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    notification: {
        position: 'absolute',
        bottom: 10, // Ajusta según necesites
        left: 0,
        right: 0,
        backgroundColor: 'gray',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
      },
});

export default Notification;
