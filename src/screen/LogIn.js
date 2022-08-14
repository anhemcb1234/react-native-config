import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../features/counter/counterSlice';

const LogIn = ({ navigation }) => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const handlerIncrement = () => {
        dispatch(increment());
    }
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="text-red-900">Login</Text>
            <Text>{count}</Text>
            <View className="my-4">
                <Button 
                    title="increment"
                    onPress={handlerIncrement}
                    className="my-4"
                />
            </View>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    )
}

export default LogIn;