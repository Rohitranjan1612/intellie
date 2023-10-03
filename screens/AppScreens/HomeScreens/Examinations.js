import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function Examinations({navigation}) {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* Notifcation safe area */}
      <View style={{ backgroundColor: 'white', width: '100%', height: 35 }}></View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.MainWrap}>
        {/* Your scrollable content goes here */}
        <Text style={{ color: '#2A0087', fontWeight: '600', fontSize: 36 }}>Examinations</Text>

        
        <View style={{marginTop:20}}>
            <Text style={{ color: '#8E8E8E', fontWeight: '600', fontSize: 24,marginBottom:10 }}>Mathematics</Text>
            <LinearGradient
              colors={['#2A0087', '#6B4EFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} 
              style={styles.Testcard}
              >
              <View style={{width:'100%',flexDirection:'row',gap:30}}>
                <View style={{width:'45%'}}>
                  <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Unit Test</Text>
                  <View style={{marginTop:30}}>
                    <TouchableOpacity>
                      <Text style={{fontSize:12,fontWeight:'600',color:'white',marginBottom:20}}>View Syllabus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={{backgroundColor:'white',width:'100%',borderRadius:10,paddingVertical:10}}>
                      <Text style={{textAlign:'center',color:'#2A0087'}}>Take a test</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width:'45%'}}>
                  <Text style={{fontSize:12,fontWeight:'600',color:'white',marginBottom:10}}>Your Performance</Text>
                  <View style={{backgroundColor:'black',width:'100%',borderRadius:15,height:40,alignItems:'center',flexDirection:'row'}}>
                    <View style={{position:'absolute',width:'40%',backgroundColor:'orange',height:40,borderTopLeftRadius:15,borderBottomLeftRadius:15}}></View>
                    <Text style={{color:'orange',textAlign:'right',width:'100%',paddingRight:10}}>Average</Text>
                  </View>
                  <Text style={{fontSize:12,fontWeight:'600',color:'white',marginTop:10}}>Yes, you can do more better</Text>
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              colors={['#2A0087', '#6B4EFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} 
              style={styles.Testcard}
              >
              <View style={{width:'100%',flexDirection:'row',gap:30}}>
                <View style={{width:'45%'}}>
                  <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Unit Test</Text>
                  <View style={{marginTop:30}}>
                    <TouchableOpacity>
                      <Text style={{fontSize:12,fontWeight:'600',color:'white',marginBottom:20}}>View Syllabus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={{backgroundColor:'white',width:'100%',borderRadius:10,paddingVertical:10}}>
                      <Text style={{textAlign:'center',color:'#2A0087'}}>Take a test</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width:'45%'}}>
                  <Text style={{fontSize:12,fontWeight:'600',color:'white',marginBottom:10}}>Your Performance</Text>
                  <View style={{backgroundColor:'black',width:'100%',borderRadius:15,height:40,alignItems:'center',flexDirection:'row'}}>
                    <View style={{position:'absolute',width:'40%',backgroundColor:'orange',height:40,borderTopLeftRadius:15,borderBottomLeftRadius:15}}></View>
                    <Text style={{color:'orange',textAlign:'right',width:'100%',paddingRight:10}}>Average</Text>
                  </View>
                  <Text style={{fontSize:12,fontWeight:'600',color:'white',marginTop:10}}>Yes, you can do more better</Text>
                </View>
              </View>
            </LinearGradient>   
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
  Testcard:{
    backgroundColor:'#6B4EFF',
    padding:20,
    margin:10,
    borderRadius:15
  }
})