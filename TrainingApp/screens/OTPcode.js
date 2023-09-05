import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';

const OTPcode = () => {
        const route = useRoute();
        const navigation = useNavigation();
        const [count, setCount] = useState(30);
        const [sequence, setSequence] = useState('685945');
        const [loading, setLoading] = useState(false);
        const [showSecondSequence, setShowSecondSequence] = useState(false);
    
        useEffect(() => {
            const interval = setInterval(() => {
                if (count === 0) {
                    setSequence(generateRandomSequence());
                    setCount(30);
                } else {
                    setCount(count - 1);
                }
            }, 1000);
    
            return () => clearInterval(interval);
        }, [count]);
    
    
        const generateRandomSequence = () => {
            const shuffledSequence = shuffleString('685492');
            return shuffledSequence;
        };
    
        const shuffleString = (string) => {
            const array = string.split('');
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array.join('');
        };
    
        const formatSequence = (sequence) => {
            return sequence.split('').join(' ');
        };
    
    
        return (
            <SafeAreaView style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: 40 }} >
                {
                    loading ?
                        (
                            <Loading />
                        ) : (
                            <>
                                <View style={{
                                    flexDirection: 'row', alignContent: 'center', justifyContent: 'center'
                                }}>
                                    <Text style={{ textAlign: 'center' }}>
                                        Mã OTP sẽ thay đổi trong: {count}s
                                    </Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{
                                        textAlign: "center",
                                        fontSize: 50,
                                        marginTop:30,
                                        color:'black'
                                    }}>{formatSequence(sequence)}</Text>
                                </View>
                                <View style={{ borderBottomColor: '#ccc',
                                                    borderBottomWidth: 1,
                                                    marginVertical: 20,
                                                    marginHorizontal:80}}>
                                    </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                                    <Pressable style={{
                                        marginHorizontal: 60,
                                        padding: 10,
                                        backgroundColor: "#17B3F2",
                                        width: 200, height: 40,
                                        borderRadius: 10,
                                        marginTop: 90,
    
                                    }}
                                        onPress={() => navigation.navigate("Paid",{
                                            id:route.params.id,
                                            name:route.params.name,
                                            total:route.params.total
                                        })}>
                                        <Text style={{ textAlign: "center" }}>Pay</Text>
                                    </Pressable>
                                </View>
                            </>
                        )
                }
            </SafeAreaView>
        )
    }

export default OTPcode