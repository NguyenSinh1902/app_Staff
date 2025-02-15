import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import WebView from 'react-native-webview';
import { colors } from '../styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import LogoBeeBox from '../components/LogoBeeBox';

const AdminWebView = () => {
  const userLogin = useSelector(state => state.main.userLogin);

  return (
    <WebView
      // source={{ uri: `https://free-apis.github.io/#/browse` }}
      source={{ uri: `https://crm.cak-solution.com/ovg/booking/booking-service/mobile?UserId=${userLogin?.OfficerID}` }}
      onError={event => alert(`Lỗi ${event.nativeEvent.title}`)}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      cacheEnabled={false}
      mixedContentMode={'compatibility'}
      startInLoadingState={true}
      scrollEnabled={true}
      javaScriptCanOpenWindowsAutomatically={true}
      onShouldStartLoadWithRequest={() => {
        return true;
      }}
      renderLoading={() => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <LogoBeeBox />
          <ActivityIndicator size="large" color={colors.MAIN_BLUE_CLIENT} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});

export default AdminWebView;
