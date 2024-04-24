import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView    } from 'react-native';
import Footer from '../components/Footer';
import CardView from '../components/CardView';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const Stack = createStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleCardPress = (url) => {
        navigation.navigate('WebView', { url });
      };
  
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={{height: '30%', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>Randstad Digital Maturity Assessments</Text>
        </View>

        <ScrollView style={{height: '70%', paddingBottom: 10}} contentContainerStyle={{ flexGrow: 1, alignContent: 'center', justifyContent: 'center'}}> 
        <View>
        
        <CardView
          imageSource={require('../../assets/de_icon.png')}
          title="Maturity Assessment Wand"
          description="A survey aimed at understanding the landscape of data infrastructure, pipelines, and workflows within organizations, assessing capabilities, challenges, and innovations in data engineering processes."
          onPress={() => handleCardPress('https://docs.google.com/forms/d/e/1FAIpQLSdTD9FEHVS6b9Yl9mwNyFOcGhkra_b8nkaG4-ubjkZXE3QwZA/viewform?usp=sf_link')}
        /> 

        <CardView
          imageSource={require('../../assets/ai_icon.png')}
          title="AI Maturity Assessment Wand"
          description="A survey designed to gauge organizational readiness, adoption, and evolution across various AI capabilities, from basic awareness to advanced implementation and optimization."
          onPress={() => handleCardPress('https://docs.google.com/forms/d/e/1FAIpQLSeET33ukZAQA6lqSO1yWPHcSrVlZO_7jfqgLerP6POj50HuUA/viewform?usp=sf_link')}
        /> 
        
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
  });
  
  export default HomeScreen;