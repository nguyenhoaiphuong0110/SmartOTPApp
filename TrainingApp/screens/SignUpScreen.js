import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config'



const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created!')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('Login')
            })
            .catch(error => {
                console.error(error)
                Alert.alert(error.message)
            })
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor:"white"
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "flex-start"
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    padding: 8,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    marginLeft: 15
                }} onPress={() => navigation.navigate("Welcome")}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{
               alignItems:'center'
            }}>
                 <Text
            style={{
              fontSize: 30,
              color: 'blue',
              fontFamily: "poppins-bold",
              marginVertical: 5 * 3,
            }}
          >
            Create account
          </Text>
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontSize: 14,
              maxWidth: "80%",
              textAlign: "center",
            }}
          >
            Create an account so you can explore all the existing jobs
          </Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: colors.white,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50
            }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10
                    }}>Set your user id:</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#93A2AC",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 8
                    }}
                        
                        placeholder='Enter name' />

                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10,
                        marginTop: 10
                    }}>Email Address</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#93A2AC",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 8
                    }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder='Enter email' />

                    <Text style={{
                        color: "#4A5568",
                        marginLeft: 10,
                        marginTop: 10
                    }}>Passsword</Text>
                    <TextInput style={{
                        padding: 10,
                        backgroundColor: "#93A2AC",
                        color: "#4A5568",
                        borderRadius: 10,
                        marginBottom: 16
                    }}
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassword(text)}
                        placeholder='Enter password' />
                </View>
                <TouchableOpacity
                    onPress={handleCreateAccount}
                    style={{
                        paddingVertical: 10,
                        marginTop: 10,
                        backgroundColor: "blue",
                        borderRadius: 10
                    }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "white"
                    }}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: "#4A5568",
                    fontWeight: 'bold',
                    paddingVertical: 20
                }}>Or</Text>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 40
                }}>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/apple.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 8,
                        backgroundColor: "#f3f4f6",
                        borderRadius: 15
                    }}>
                        <Image style={{ width: 40, height: 40 }} source={require('../assets/icons/facebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <Text style={{
                        fontWeight: "500",
                        color: '#718096'
                    }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{
                            fontWeight: "600",
                            color: '#F59E0B'
                        }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen