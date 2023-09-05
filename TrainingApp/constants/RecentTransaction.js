import React from 'react';
import {Image, StyleSheet, Text, View,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const listTransations = [
  {
    type: 'Hóa đơn tháng 8                  (đã thanh toán)',
    icon: require('../assets/electricity-bill.png'),
    date: 'August 1, 12:30',
    payment: '123.000VND',
  },
  {
    type: 'Hoá đơn tháng 9                       (đã thanh toán)',
    icon: require('../assets/electricity-bill.png'),
    date: 'September 1, 12:30',
    payment: '145.000VND',
  },
  {
    type: 'Hóa đơn tháng 10',
    icon: require('../assets/electricity-bill.png'),
    date: 'October 1, 12:30',
    payment: '143.000VND',
  },
];
const renderTransactionItem = item => (
  <View key={item.type} style={styles.items}>
    <View style={styles.icon}>
      <Image source={item.icon} />
    </View>
    <View style={styles.itemBody}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
    <View>
      <Text style={styles.payment}>{item.payment}</Text>
    </View>
  </View>
);

const RecentTransaction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Invoice")}>
      <Text style={styles.title}>Bill</Text>
      <View style={styles.list}>
        {listTransations.map(renderTransactionItem)}
      </View>
      </Pressable>
    </View>
  );
};

export default RecentTransaction;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:5,
    borderBottomWidth:1,
    borderBottomColor:'#A8D6F3'
  },
  container: {
    marginTop: 12,
    backgroundColor:'white',
    borderRadius:10,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    borderBottomWidth:1,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    borderBottomColor:"#A8D6F3"
  },
  icon: {
    padding: 10,
    width: 60,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {height: 10, width: 2},
    shadowOpacity: 0.7,
    shadowRadius: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBody: {
    flex: 1,
    paddingLeft: 14,
  },

  type: {
    fontWeight: '500',
    fontSize: 16,
  },

  date: {
    marginTop: 5,
  },
  payment: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight:5
  },
});