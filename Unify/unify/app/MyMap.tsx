// MyMap.tsx
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Location } from './types';

type Props = {
  location: Location;
};

const MyMap: React.FC<Props> = ({ location }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={location} />
    </MapView>
  );
};

export default MyMap;
