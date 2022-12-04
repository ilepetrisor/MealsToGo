import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
          <View style={{ padding: 16, backgroundColor: 'green' }}>
            <Text>search</Text>
          </View>
          <View style={{ flex: 1, flexGrow: 1, padding: 16, backgroundColor: 'blue' }}>
            <Text>list</Text>
          </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
