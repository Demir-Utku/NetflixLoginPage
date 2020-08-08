import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity 
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{ 
            backgroundColor: '#fd0505', 
            width: '90%', 
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2
            }}>
            <Text style={{ 
                color: 'white', 
                fontWeight: 'bold', 
            fontSize: 18}}>{props.text}</Text>
          </TouchableOpacity>
);

export {Button};
