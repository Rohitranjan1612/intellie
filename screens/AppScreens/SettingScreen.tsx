import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'SettingScreen'>;

const SettingScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <TouchableOpacity
          // onPress={() => navigation.navigate('DashboardTwo')}
          >
            <Image
              source={require('../../assets/Left-Actionable.png')}
              style={styles.logoImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.upgradeContainer}>
          <View style={styles.col}>
            <Text style={styles.textHeader}>Basic Membership</Text>
            <Text style={styles.textDec}>Upgrade for more features</Text>
          </View>
          <TouchableOpacity
          // onPress={() => navigation.navigate('DashboardTwo')}
          >
            <Text style={styles.textSubHeader}>Upgrade</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subHeader}>Account</Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/Profile.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Profile</Text>
            </View>
            <Image
              source={require('../../assets/right-icon.png')}
              style={styles.listRightlogoImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/payment.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Payments</Text>
            </View>
            <Image
              source={require('../../assets/right-icon.png')}
              style={styles.listRightlogoImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/Subcription.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Subscriptions</Text>
            </View>
            <Image
              source={require('../../assets/right-icon.png')}
              style={styles.listRightlogoImage}
            />
          </TouchableOpacity>
          <Text style={styles.subHeader}>More</Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/Help.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Help & Support</Text>
            </View>
            <Image
              source={require('../../assets/right-icon.png')}
              style={styles.listRightlogoImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/Contact.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Contact us</Text>
            </View>
            <Image
              source={require('../../assets/right-icon.png')}
              style={styles.listRightlogoImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('DashboardTwo')}
            style={styles.listLastContainer}>
            <View style={styles.listSubContainer}>
              <Image
                source={require('../../assets/Logout.png')}
                style={styles.listlogoImage}
              />
              <Text style={styles.listTextHeader}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  upgradeContainer: {
    height: 83,
    width: '85%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 12,
    backgroundColor: '#6B4EFF',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  topHalf: {
    width: '100%',
    height: 70,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  logoImage: {
    height: 24,
    width: 24,
    marginTop: 15,
    marginLeft: 10,
  },
  textDec: {
    color: '#FFF',
    fontFamily: 'Gilroy-Medium',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    width: '100%',
    lineHeight: 18,
    marginTop: 4,
    marginLeft: 20,
  },
  textSubHeader: {
    color: '#FFF',
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    width: '100%',
    lineHeight: 18,
    marginTop: 33,
    marginRight: 20,
  },
  textHeader: {
    color: '#FFF',
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'Gilroy-Bold',
    fontSize: 16,
    fontStyle: 'normal',
    width: '100%',
    fontWeight: '600',
    lineHeight: 18,
  },
  subHeader: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 30,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 25,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight: 25,
  },
  listLastContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginRight: 25,
  },
  listlogoImage: {
    width: 24,
    height: 24,
  },
  listRightlogoImage: {
    width: 24,
    height: 24,
  },
  listTextHeader: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 2,
    marginLeft: 10,
  },
  listSubContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 106,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 27,
    paddingBottom: 45,
    justifyContent: 'space-between',
    flexShrink: 0,
    border: '1px solid var(--neutral-400, #F5F5F5)',
    boxShadow: '0px -6px 16px 0px rgba(0, 0, 0, 0.08)',
  },
  footerlogoImage: {
    width: 34,
    height: 34,
  },
  footerlogoImage1: {
    height: 34,
    width: 99,
  },
});
