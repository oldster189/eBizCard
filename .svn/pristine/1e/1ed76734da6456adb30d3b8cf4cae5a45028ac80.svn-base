import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import theme from '../styles/theme.style';

class AddButton extends Component {
    render() {
        const { title, source, onPress } = this.props
        return (
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    height: 68,
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                    }}
                    onPress={onPress}
                >
                    <Image
                        source={source}
                        style={{ height: 23, width: 23, marginLeft: theme.MARGIN_LEFT, }}
                    />
                    <Text
                        style={{
                            color: theme.TEXT_COLOR,
                            marginLeft: theme.MARGIN_LEFT,
                            fontSize: theme.TEXT_FONT,
                        }}
                    >
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AddButton;
