import { useNavigation,useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg'

export default Invoice = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const invoiceData = {
    invoiceNumber: '55768',
    invoiceDate: '01/10/2023',
    customerID:'045637463464',
    customerName: 'Nguyen Hoai Phuong',
    customerEmail: 'phuong@gmail.com',
    customerAddress: '381 Nguyen Khang,Yen Hoa,Cau Giay,Ha Noi',
    items: [
      {
        id: 1,
        name: 'Điện',
        quantity: 100,
        price: 3500,
      },
    ],
  };
  var totalAmount = 0;
  for(var i = 0; i < invoiceData.items.length; i++){
    var product = invoiceData.items[i]
    totalAmount += product.quantity * product.price;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Invoice</Text>
      </View>
      <View style={styles.invoiceInfoContainer}>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Number:</Text>
          <Text style={styles.text}>{invoiceData.invoiceNumber}</Text>
        </View>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Date:</Text>
          <Text style={styles.text}>{invoiceData.invoiceDate}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.customerInfoContainer}>
        <Text style={styles.subtitle}>Customer Information</Text>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>CustomerID:</Text>
          <Text style={styles.text}>{invoiceData.customerID}</Text>
          </View>
          <View style={styles.customerInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{invoiceData.customerName}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{invoiceData.customerEmail}</Text>
        </View>
        </View>
        <View style={{marginRight:20,marginTop:-20}}>
          <SvgQRCode value='hihhi' />
        </View>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>{invoiceData.customerAddress}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemsContainer}>
        <Text style={styles.subtitle}>Invoice Items</Text>
        <View style={styles.item}>
        <Text>Tên</Text>
        <Text>Số lương tiêu thụ(kWh)</Text>
        <Text>Giá trên 1kWh</Text>
        </View>
        {invoiceData.items.map((item) => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.quantity}
            </Text>
            <Text style={styles.itemTotal}>{item.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <Text style={styles.label_total}>Total:</Text>
          <Text style={styles.total}>{totalAmount}</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('PinCode',{
          id:invoiceData.customerID,
          name:invoiceData.customerName,
          total:totalAmount
        })}
        style={styles.button}>
          <Text>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop:80,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  invoiceInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    marginTop: 20,
  },
  customerInfo: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemName: {
    fontSize: 14,
  },
  itemDetails: {},
  itemTotal: {
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  label_total:{
    fontSize:20
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#5EB4EA',
    padding:10,
    marginHorizontal:50,
    borderRadius:10
  }
});
