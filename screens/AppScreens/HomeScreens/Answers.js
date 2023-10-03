import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
export default function Answers({navigation}) {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* Notifcation safe area */}
      <View style={{ backgroundColor: '#6544F2', width: '100%', height: '25%',borderBottomLeftRadius:35,borderBottomRightRadius:35 }}>
        <View style={{marginTop:80,flexDirection:'row',paddingHorizontal:30,justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Examinations')} style={{borderRadius:10,borderWidth:1,borderColor:'white',padding:10,justifyContent:'center',alignItems:'center'}}>
                <Icon name={'chevron-back-outline'} size={26} color={'white'}/>
            </TouchableOpacity>
            
        </View>
        <View style={{marginTop:30,flexDirection:'row',paddingHorizontal:30,justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:18,color:'white',fontWeight:'600'}}>Topic Name</Text>
            <View>
                <Text style={{fontSize:15,color:'white'}}>Questions</Text>
                <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>1 / 10</Text>
            </View>
        </View>
      </View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.MainWrap}>
        {/* Your scrollable content goes here */}
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'#250075',fontWeight:'600'}}>Questions No. 1</Text>
            <TouchableOpacity style={{padding:4,paddingHorizontal:7,borderRadius:6,backgroundColor:'#6544F2'}}>
            <Text style={{fontSize:14,color:'white'}}>Show Next</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:20}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Roughly how long does it take for the sun's light to reach Earth ?</Text>
        </View>
        <View style={{marginTop:20}}>

        <TouchableOpacity style={[styles.optBtn,{borderColor:'red'}]}>
            <Text style={styles.optTxt}>8 Minutes</Text>
            <Text style={styles.optTxt}>A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optBtn}>
            <Text style={styles.optTxt}>8 Minutes</Text>
            <Text style={styles.optTxt}>B</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optBtn,{backgroundColor:'#6544F2',borderColor:'#6544F2'}]}>
            <Text style={[styles.optTxt,{color:'white'}]}>8 Minutes</Text>
            <Text style={[styles.optTxt,{color:'white'}]}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optBtn,{borderColor:'green'}]}>
            <Text style={styles.optTxt}>8 Minutes</Text>
            <Text style={styles.optTxt}>D</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',width:'100%',gap:20,marginTop:30}}>
            <TouchableOpacity style={{padding:10,borderWidth:1,borderColor:'#250075',width:'45%',borderRadius:10}}>
                <Text style={{textAlign:'center',color:'#250075'}}>Previous</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Result')} style={{padding:10,borderWidth:1,borderColor:'#2500756E',width:'45%',borderRadius:10,backgroundColor:'#250075'}}>
                <Text style={{textAlign:'center',color:'white'}}>Next</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    borderWidth:2,
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