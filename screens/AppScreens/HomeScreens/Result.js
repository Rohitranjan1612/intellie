import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default function Result({navigation}) {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* Notifcation safe area */}
      <View style={{ backgroundColor: '#FFC226', width: '100%', height: '50%',borderBottomLeftRadius:200,borderBottomRightRadius:200}}>
        <View style={{marginTop:80,flexDirection:'row',paddingHorizontal:30,justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Examinations')} style={{borderRadius:10,borderWidth:1,borderColor:'white',padding:10,justifyContent:'center',alignItems:'center',backgroundColor:'#6544F2'}}>
                <IconIonicons name={'chevron-back-outline'} size={26} color={'white'}/>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:60,paddingHorizontal:30,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:26,color:'#250075',fontWeight:'600'}}>Congrats Champion !</Text>
            <Text style={{fontSize:22,color:'white',fontWeight:'600',marginTop:30}}>My Score</Text>
            <Text style={{fontSize:56,color:'white',fontWeight:'bold',marginTop:30}}>200</Text>
            
        </View>
      </View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.MainWrap}>
        {/* Your scrollable content goes here */}
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{width:'28%',backgroundColor:'white',padding:10,justifyContent:'center',alignItems:'center',gap:10,borderRadius:10,margin:10}}>
                <Text style={{color:'#250075',fontSize:30,fontWeight:'bold',textAlign:'center'}}>30</Text>
                <Text style={{color:'#250075',fontSize:14,textAlign:'center'}}>Total Questions</Text>
            </View>
            <View style={{width:'28%',backgroundColor:'white',padding:10,justifyContent:'center',alignItems:'center',gap:10,borderRadius:10,margin:10}}>
                <Text style={{color:'#250075',fontSize:30,fontWeight:'bold',textAlign:'center'}}>09</Text>
                <Text style={{color:'#250075',fontSize:14,textAlign:'center'}}>Wrong Answers</Text>
            </View>
            <View style={{width:'28%',backgroundColor:'white',padding:10,justifyContent:'center',alignItems:'center',gap:10,borderRadius:10,margin:10}}>
                <Text style={{color:'#250075',fontSize:30,fontWeight:'bold',textAlign:'center'}}>71</Text>
                <Text style={{color:'#250075',fontSize:14,textAlign:'center'}}>Correct Answers</Text>
            </View>
        </View>
        <View style={{marginTop:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Answers')} style={{padding:10,width:'45%',borderRadius:10,backgroundColor:'white',alignSelf:'center'}}>
                <Text style={{textAlign:'center',color:'#250075'}}>View Answers</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',width:'100%',gap:20,marginTop:30}}>
            

            <TouchableOpacity onPress={() => navigation.navigate('Examinations')} style={{padding:10,borderWidth:1,borderColor:'#2500756E',width:'45%',borderRadius:10,backgroundColor:'#250075'}}>
                <Text style={{textAlign:'center',color:'white'}}>Start Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,borderWidth:1,borderColor:'white',width:'45%',borderRadius:10}}>
                <Text style={{textAlign:'center',color:'white'}}>Share</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6544F2',
    height: 100
  },
  MainWrap: {
    padding: 16,
    paddingBottom:100
  },
  ProfileBG: {
    width: 53,
    height: 53,
    borderRadius: 18,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  HeadTxt: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 3,
    color: '#250075'
  },
  semiHeadTxt: {
    color: '#6544F2',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 3,
  },
  searchContainer: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row'
  },
  optBtn:{
    backgroundColor:'#FFFFFF',
    borderWidth:1,
    borderColor:'lightgray',
    width:'100%',
    paddingVertical:15,
    paddingHorizontal:18,
    borderRadius:15,
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  optTxt:{
    color:'#250075',
    fontSize:18,
    fontWeight:'700'
  }
})