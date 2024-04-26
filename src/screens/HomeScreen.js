import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import Footer from '../components/Footer';
import CardView from '../components/CardView';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import SurveyList from '../config/SurveyList';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (url) => {
    navigation.navigate('WebView', { url });
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ height: '30%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>Randstad Maturity Surveys</Text>
      </View>

      <ScrollView style={{ height: '70%' }} contentContainerStyle={styles.stackContainerStyle}>
        <View>
          {
            SurveyList.map((survey) => {
              return survey.active ? (
                <CardView
                  key={survey.id}
                  imageSource={survey.imageSource}
                  title={survey.title}
                  description={survey.description}
                  onPress={() => handleCardPress(`${survey.url}`)}
                />
              ) : null
            })
          }
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.height,
    justifyContent: 'center',
    backgroundColor: '#2175d9',
    color: '#f0f0f0'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: StatusBar.height,
    padding: 10,
    color: '#f0f0f0',
  },
  stackContainerStyle: {
    flexGrow: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 50
  },
});

export default HomeScreen;