import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Invoice from './screens/Invoice';
import InputPincode from './screens/InputPincode';
import OTPcode from './screens/OTPcode';
import PaidBill from './screens/PaidBill';
import Transfer from './screens/Transfer';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import GetStartOtp from './screens/GetStartOtp';
import ImputPhoneOtp from './screens/ImputPhoneOtp';
import PassOTPSignUp from './screens/PassOTPSignUp';


const Stack = createNativeStackNavigator();

const StackNavigatorApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name="CardField" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="Invoice" component={Invoice} options={{headerShown:false}} />
                <Stack.Screen name="PinCode" component={InputPincode} options={{headerShown:false}} />
                <Stack.Screen name="OTPcode" component={OTPcode} options={{headerShown:false}} />
                <Stack.Screen name="Paid" component={PaidBill} options={{headerShown:false}} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
                <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{headerShown:false}} />
                <Stack.Screen name="Reset" component={ResetPasswordScreen} options={{headerShown:false}} />
                <Stack.Screen name='GetStartOtp'component={GetStartOtp} options={{headerShown:false}}/>
                <Stack.Screen name="PassOTPSignUp" component={PassOTPSignUp} />
                <Stack.Screen name="PhoneOtp" options={{ headerShown: false }} component={ImputPhoneOtp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigatorApp;

const styles = StyleSheet.create({})