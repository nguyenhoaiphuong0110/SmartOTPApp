import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../themes/colors'
import { useNavigation } from '@react-navigation/native'
import Font from '../assets/fonts/Fonts'

const {height} = Dimensions.get('window')
const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{

            flex: 1,
            backgroundColor: "white",
        }}>
            <View style={{
                flex: 1,
                justifyContent: "space-around",
                marginHorizontal: 4,
                marginBottom: 50
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center'
                }}>
                    <Image style={{height:height/2.5
                    }}  resizeMode="contain"
                        source={require("../assets/images/welcome-img.png")} />
                </View>
                <View style={{
                    paddingHorizontal: 10 * 2,
                    paddingTop: 10 * 1,
                }}>
                <Text style={{
                        fontSize: 25,
                        color: 'blue',
                        fontWeight:'bold',
                        textAlign: "center",
                    }}> Ung dung thanh toan tien dien EVN</Text>
                </View>
                <View
          style={{
            paddingHorizontal: 10 * 2,
            paddingTop: 10 * 6,
            flexDirection: "row",
            gap:10
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              backgroundColor: "blue",
              paddingVertical: 10 * 1.5,
              paddingHorizontal: 10 * 2,
              width: "48%",
              borderRadius: 10,
              shadowColor: 'blue',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: 'white',
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{
              paddingVertical: 10 * 1.5,
              paddingHorizontal: 10 * 2,
              width: "48%",
              borderRadius: 10,
              borderWidth:1,

            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: 'black',
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen