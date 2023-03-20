import React from "react";
import { Layout } from "@ui-kitten/components";

import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

const MapScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView style={styles.map} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
