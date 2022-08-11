import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';


const LogIn = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="text-red-900">Login</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    )
}

export default LogIn;