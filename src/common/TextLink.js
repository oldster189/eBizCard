import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const TextLink = ({ title, onPress, textLinkStyle }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={textLinkStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
 
export { TextLink };
