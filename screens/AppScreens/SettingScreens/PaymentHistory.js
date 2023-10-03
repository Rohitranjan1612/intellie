import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function PaymentHistory() {
  return (
    <View style={styles.container}>
      {/* Set the StatusBar to transparent */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* Notifcation safe area */}
      <View style={{ backgroundColor: 'white', width: '100%', height: 35 }}></View>
      {/* Content */}
      <ScrollView contentContainerStyle={styles.MainWrap}>
        {/* Your scrollable content goes here */}
        <Text style={{ color: '#2A0087', fontWeight: '600', fontSize: 36 }}>Payment History</Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', width: '80%' }}>
            <Icon name={'search-outline'} color={'#8E8E8E'} size={24} />
            <TextInput placeholder='Search' placeholderTextColor={'#8E8E8E'} style={{ height: 30, fontSize: 18, width: '100%' }} />
          </View>
          <View style={{ alignItems: 'flex-end', width: '20%' }}>
            <Icon name={'filter-outline'} color={'black'} size={28} />
          </View>
        </View>

        <View style={styles.PHcard}>
          <View style={{width:'100%'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Lecture Name</Text>
            <View style={{flexDirection:'row',gap:10,alignItems:'center',marginBottom:10}}>
              <Text style={{fontSize:13,color:'white'}}>Transaction Id :</Text>
              <View style={{backgroundColor:'white',paddingHorizontal:8,paddingVertical:3,borderRadius:5}}>
                 <Text style={{fontSize:12,color:'#2A0087'}}>2318239412</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:14,color:'white'}}>Course Name</Text>
              <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>5999 ₹</Text>
            </View>
            <Text style={{position:'absolute',right:0,top:0,color:'white',fontSize:12}}>10:28 AM</Text>
          </View>
        </View>

        <View style={styles.PHcard}>
          <View style={{width:'100%'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Lecture Name</Text>
            <View style={{flexDirection:'row',gap:10,alignItems:'center',marginBottom:10}}>
              <Text style={{fontSize:13,color:'white'}}>Transaction Id :</Text>
              <View style={{backgroundColor:'white',paddingHorizontal:8,paddingVertical:3,borderRadius:5}}>
                 <Text style={{fontSize:12,color:'#2A0087'}}>2318239412</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:14,color:'white'}}>Course Name</Text>
              <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>5999 ₹</Text>
            </View>
            <Text style={{position:'absolute',right:0,top:0,color:'white',fontSize:12}}>10:28 AM</Text>
          </View>
        </View>
        <View style={styles.PHcard}>
          <View style={{width:'100%'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Lecture Name</Text>
            <View style={{flexDirection:'row',gap:10,alignItems:'center',marginBottom:10}}>
              <Text style={{fontSize:13,color:'white'}}>Transaction Id :</Text>
              <View style={{backgroundColor:'white',paddingHorizontal:8,paddingVertical:3,borderRadius:5}}>
                 <Text style={{fontSize:12,color:'#2A0087'}}>2318239412</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:14,color:'white'}}>Course Name</Text>
              <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>5999 ₹</Text>
            </View>
            <Text style={{position:'absolute',right:0,top:0,color:'white',fontSize:12}}>10:28 AM</Text>
          </View>
        </View>
        <View style={styles.PHcard}>
          <View style={{width:'100%'}}>
            <Text style={{fontSize:20,fontWeight:'600',color:'white',marginBottom:10}}>Lecture Name</Text>
            <View style={{flexDirection:'row',gap:10,alignItems:'center',marginBottom:10}}>
              <Text style={{fontSize:13,color:'white'}}>Transaction Id :</Text>
              <View style={{backgroundColor:'white',paddingHorizontal:8,paddingVertical:3,borderRadius:5}}>
                 <Text style={{fontSize:12,color:'#2A0087'}}>2318239412</Text>
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <Text style={{fontSize:14,color:'white'}}>Course Name</Text>
              <Text style={{fontSize:26,color:'white',fontWeight:'bold'}}>5999 ₹</Text>
            </View>
            <Text style={{position:'absolute',right:0,top:0,color:'white',fontSize:12}}>10:28 AM</Text>
          </View>
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
  PHcard:{
    backgroundColor:'#6B4EFF',
    padding:20,
    margin:10,
    borderRadius:15
  }
})