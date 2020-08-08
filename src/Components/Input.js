import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#98999a" 
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width: width * 0.9,
            height: height * 0.06,
            backgroundColor: '#303030',
            borderWidth: 0.5,
            borderColor: '#303030',
            borderRadius: 7,
            paddingLeft: 20,
            marginBottom: height * 0.02,
            fontSize: 18,
            color: "#98999a"
        }, props.style]}
    />
);

export {Input};

