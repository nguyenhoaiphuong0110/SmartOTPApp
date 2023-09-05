import { View, Text,Image,StyleSheet,ScrollView,FlatList,TouchableOpacity,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS,SIZES,FONTS, icons,images } from '../constants'
import malls from '../data/malls';
import { useNavigation,useRoute } from '@react-navigation/native';

const PaidBill = () => {
    const route = useRoute()
    const navigation = useNavigation();
    function formatToDDMMYY(date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().substr(-2);
      return `${day}/${month}/${year}`;
    }
    const [currentDate,setCurrentDate] = useState(new Date());
    useEffect(()=>{
      const intervalId = setInterval(()=>{
        setCurrentDate(new Date());
      },1000)
      return() =>clearInterval(intervalId)
    },[]);
    return (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              <View style={{marginLeft:5}}>
              </View>
              <Image style={styles.image} source={require('../assets/notification.png')} />
            </View>
            <View style={styles.check}>
                <Image style={{marginTop:-100}} source={require('../assets/check.png')} />
                <Text style={styles.done}>Successful Transaction!</Text>
                <Text style={styles.price}>143.000 VND</Text>
            </View>
            <View style={styles.bodyscreen}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                <Text>Transaction type</Text>
                <Text>Online paying</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}> 
                    <Text>Transaction ID</Text>
                    <Text>0767965fdngjr23</Text>
                </View>
                <Text style={{
                                borderColor: "black",
                                textDecorationStyle:'dotted',
                                height: 1,
                                borderWidth: 0.4,
                                margin: 5
                            }}></Text>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text>Customer ID</Text>
                    <Text>{route.params.id}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text>Customer name</Text>
                    <Text>{route.params.name}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text>Transaction time</Text>
                    <Text>{formatToDDMMYY(currentDate)}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                    <Text>Total fee</Text>
                    <Text>{route.params.total}</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate('CardField')}>
                    <Text>Back to home</Text>
                </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    export default PaidBill;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        position:"relative"
      },
      header: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#5EB4EA',
        padding:20
      },
      check:{
        flex:1,
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5EB4EA',
        gap:10,
        height:250,
      },
      image:{
        width:20,
        height:20
      },
      done:{
        fontWeight:'bold',
        color:'white'
      },
      price:{
        fontSize:20,
        color:'white'
      },
      bodyscreen:{
        flex:1,
        backgroundColor:"white",
        marginHorizontal:25,
        borderRadius:10,
        height:400,
        flexDirection:"column",
        gap:20,
        position:'relative',
        padding:30,
        bottom:80,
        shadowOpacity:0.5,
        shadowColor:'black',
        shadowRadius:5,
        shadowOffset:{width:0,height:2},
        elevation:5
      },
      button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5EB4EA',
        padding:10,
        marginHorizontal:50,
        borderRadius:10
      }
    });