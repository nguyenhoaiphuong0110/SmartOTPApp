import React from 'react';
import {Image, StyleSheet, Text, View,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const listService = [
  {
    name: 'Wallet',
    icon: require('../assets/wallet_ic.png'),
  },
  {
    name: 'Transfer',
    icon: require('../assets/data-transfer_i_c.png'),
  },
  {
    name: 'Top up',
    icon: require('../assets/top-up_ic.png'),
  },
  {
    name: 'More',
    icon: require('../assets/more_ic.png'),
  },
  
];

const renderServiceItem = item => {
  const navigation = useNavigation()
  return (
    <View key={item.name} style={styles.items}>
      <View style={styles.icon}>
        <Pressable onPress={() => navigation.navigate('Transfer')}>
        <Image source={item.icon} />
        </Pressable>
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );
};

const ListService = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service</Text>
      <View style={styles.list}>
        {listService.map(renderServiceItem)}
        </View>
    </View>
  );
};

export default ListService;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderRadius:10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:5
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  icon: {
    padding: 10,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {height: 10, width: 2},
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});