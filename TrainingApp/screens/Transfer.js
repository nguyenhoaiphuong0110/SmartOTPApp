import { View, Text,TextInput, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Transfer = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none'
                placeholder='Mã khách hàng'
                keyboardType='name-phone-pad'
                onChange={(value) => setNames(value.nativeEvent.text)}
                style={styles.input}>
                </TextInput>
    <Pressable style={styles.button}>
        <Text>Tiếp tục</Text>
    </Pressable>
    </View>
  )
}

export default Transfer;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginHorizontal:50,
        gap:10,
        margin:40
    },
    input:{
        backgroundColor:'white',
        borderRadius:10
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5EB4EA',
        padding:10,
        borderRadius:10
      }
})

