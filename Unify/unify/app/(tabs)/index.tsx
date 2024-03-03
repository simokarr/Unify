import { View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import expo-location
import { AppRegistry } from 'react-native';


export default function TabOneScreen() {
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 }); // Initialize with empty object

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission not granted');
          return;
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
        });

        setUserLocation(location.coords);
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.4215,
          longitude: -75.6826,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {userLocation.latitude !== 0 && ( // Check if userLocation has valid coordinates
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="You are here"
            description="Your current location"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});