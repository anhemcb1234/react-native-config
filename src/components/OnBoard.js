import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { StatusBar } from 'expo-status-bar';


const OnBoard = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text className="text-red-900">OnBorad</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </SafeAreaView>
    )
}

export default OnBoard;