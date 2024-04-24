import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import Footer from '../components/Footer';

const WebViewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={{ flex: 1 }}/>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
});

export default WebViewScreen;
