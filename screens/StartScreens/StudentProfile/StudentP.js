import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const subjects = ['Tasks', 'Projects', 'Questions'];

function PersonalD1() {
  const [selectedSubject, setSelectedSubject] = useState('Tasks');

  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.MainWrap}>
        <StatusBar barStyle="dark-content" />

        <View style={{marginTop: 60, width: '90%', alignSelf: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Onboarding1')}
              style={{margin: 10}}>
              <Icon name="chevron-left" size={26} color={'#2A0087'} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Student Report</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 24,
              paddingLeft: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../assets/default-pic.png')}
                style={{
                  width: 55,
                  height: 55,
                }}
              />
              <Text style={styles.studentName}>Student Name</Text>
            </View>
            <Image
              source={require('../../../assets/subscription-member.png')}
              style={{
                width: 20,
                height: 20,
                alignSelf: 'center',
              }}
            />
          </View>
          <Text style={styles.subHeading}>Overall Progress</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={styles.overallLabel}>Cohort :</Text>
            <Text style={styles.overallValue}>January</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={styles.overallLabel}>Course :</Text>
            <Text style={styles.overallValue}>Mathematics</Text>
          </View>
          <View style={styles.filterContainer}>
            {subjects.map(subject =>
              selectedSubject === subject ? (
                <LinearGradient
                  colors={
                    selectedSubject === 'Tasks'
                      ? ['#6544F2', '#9682EC']
                      : selectedSubject === 'Projects'
                      ? ['#C03030', '#FF7B5E']
                      : ['#E09400', '#FFC226']
                  }
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.linearCard}>
                  <TouchableOpacity
                    key={subject}
                    style={[styles.filterButton, selectedSubject === subject]}
                    onPress={() => setSelectedSubject(subject)}>
                    <Text
                      style={[
                        styles.filterButtonText,
                        selectedSubject === subject &&
                          styles.selectedFilterButtonText,
                      ]}>
                      {subject}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <TouchableOpacity
                  key={subject}
                  style={[styles.filterButton, selectedSubject === subject]}
                  onPress={() => setSelectedSubject(subject)}>
                  <Text
                    style={[
                      styles.filterButtonText,
                      selectedSubject === subject &&
                        styles.selectedFilterButtonText,
                    ]}>
                    {subject}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  MainWrap: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#090A0A',
    textAlign: 'right',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.72,
    marginTop: 10,
  },
  studentName: {
    color: '#250075',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 17,
    letterSpacing: 0.72,
    marginTop: 10,
    marginLeft: 10,
  },
  subHeading: {
    color: '#250075',
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 20,
    marginLeft: 10,
  },
  overallLabel: {
    color: '#8F8F8F',
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 15,
    marginLeft: 10,
  },
  overallValue: {
    color: '#250075',
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 15,
    marginLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    marginTop: 30,
  },
  filterButton: {
    marginRight: 15,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    background: 'linear-gradient(99deg, #6544F2 11.65%, #9682EC 96.99%)',
  },
  filterButtonText: {
    color: '#250075',
    textAlign: 'center',
    fontSize: 16,
  },
  selectedFilterButtonText: {
    color: '#FFF',
    fontFamily: 'Gilroy-SemiBold',
    fontStyle: 'normal',
    fontSize: 16,
  },
  linearCard: {
    borderRadius: 8,
  },
});

export default PersonalD1;
