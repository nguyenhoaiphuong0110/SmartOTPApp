import { View, Text,Image,StyleSheet,ScrollView,FlatList,TouchableOpacity,Pressable,Modal,Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../constants/Card'
import ListService from '../constants/ListService'
import RecentTransaction from '../constants/RecentTransaction'
import { COLORS,SIZES,FONTS, icons,images } from '../constants'
import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const CardField = () => {
  const navigation = useNavigation()
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const handleAccessButtonPress = () => {
        setShowWelcomeModal(false);
        navigation.navigate('GetStartOtp');
    };
    return (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              <View style={{marginLeft:5}}>
                <Text>Hello</Text>
                <Text style={styles.userName}>Nguyen Hoai Phuong</Text>
              </View>
              <Image source={require('../assets/notification.png')} />
            </View>
            <View style={styles.card}>
              <Card />
            </View>
            <ListService />
            <RecentTransaction />
            <Modal visible={showWelcomeModal} transparent>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', padding: 20, width: '65%', height: '40%', borderRadius: 10 }}>
                        <Text style={{ fontSize: 21, fontWeight: 'bold', textAlign: 'center' }}>Để đảm bảo an toàn hơn trong thanh toán các giao dịch đặt vé, xin vui lòng khách hàng sử dụng tính năng SmartOTP để xác thực các giao dịch 1 cách bảo mật tốt nhất</Text>
                        <Button title='đăng kí ngay' onPress={handleAccessButtonPress} />
                    </View>
                </View>
            </Modal>
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    export default CardField;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#CFDAE1',
        padding: 15,
      },
      userName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      card: {
        paddingVertical: 14,
      },
    });