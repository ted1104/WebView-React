import React, {Component, useEffect, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {images} from './src/constants';
const URL = 'https://event.sportpay.bi/admin';
const App = () => {
  const netInfo = useNetInfo();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsConnected(netInfo.isInternetReachable);
  }, [netInfo]);
  return isConnected ? (
    <WebView
      onLoad={() => console.log('onload')}
      onLoadStart={() => console.log('onload start')}
      onError={() => {}}
      onLoadEnd={() => console.log('onload end')}
      source={{uri: URL}}
    />
  ) : (
    <NoInternetConnexion />
  );
};

const NoInternetConnexion = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={images.no_connexion} resizeMode="contain" />
      <Text style={{color: 'red', fontWeight: 'bold'}}>
        Veuillez verifier votre connexion internet!
      </Text>
    </View>
  );
};
export default App;
