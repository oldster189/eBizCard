import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, } from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet'

import theme from '../../styles/theme.style';

class CreatePhtoCardScreen extends Component {
  static navigationOptions = {
    title: 'Capture your card',
    headerStyle: {
      backgroundColor: theme.NAV_BAR_COLOR,
    },
    headerTitleStyle: { color: 'white' },
    headerBackTitle: ' ',
    headerRight: (
      <Button
        clear
        title="Skip"
        backgroundColor='tranparent'
        onPress={() => { }}
      />
    )
  }

  static propTypes = {
    handleActionSheetPressFront: PropTypes.func,
    handleActionSheetPressBack: PropTypes.func,
    photoCardFront: PropTypes.object,
    photoCardBack: PropTypes.object,
  };

  showActionSheetFront = () => {
    this.ActionSheetFront.show()
  }

  showActionSheetBack = () => {
    this.ActionSheetBack.show()
  }
 
  renderPhotoCardFront() {
    if (this.props.photoCardFront === null) {
      return (
        <View>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              height: 189,
              width: 315,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{ fontSize: 31, color: 'rgba(69, 69, 69, .40)', fontWeight: 'bold' }}
            > Front side </Text>
          </View>
        </View>
      )
    }
    return (
      <Image
        style={{
          height: 189,
          width: 315,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'rgba(69, 69, 69, .40)'
        }} resizeMode='cover' source={this.props.photoCardFront}
      />
    )
  }

  renderPhotoCardBack() {
    if (this.props.photoCardBack === null) {
      return (
        <View>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              width: 315,
              height: 189,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{ fontSize: 31, color: 'rgba(69, 69, 69, .40)', fontWeight: 'bold' }}
            > Back side </Text>
          </View>
        </View>
      )
    }
    return (
      <Image
        style={{
          width: 315,
          height: 189,
          borderRadius: 8,    
          borderWidth: 1,
          borderColor: 'rgba(69, 69, 69, .40)'
        }} resizeMode='cover' source={this.props.photoCardBack}
      />
    )
  }

  render() {
    const {
      handleActionSheetPressFront,
      handleActionSheetPressBack,
    } = this.props

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
        }}
      >
        <ScrollView
          keyboardShouldPersistTaps='handled'
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
          }}
        >

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
            }}
          >

            {/* START FRONT SIDE CONTENT */}
            <View
              style={{
                marginTop: 10,
                backgroundColor: '#FFFFFF',
                height: 254,
                width: null,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {this.renderPhotoCardFront()}
              <View
                style={{
                  height: 210,
                  width: 335,
                  borderRadius: 8,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  position: 'absolute'
                }}
              >
                <TouchableOpacity onPress={this.showActionSheetFront}>
                  <Image
                    resizeMode='cover'
                    source={require('../../assets/images/add_photo.png')}
                    style={{ height: 52, width: 52, }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* END FRONT SIDE CONTENT */}

            {/* START BACK SIDE CONTENT */}
            <View
              style={{
                marginTop: 10,
                backgroundColor: '#FFFFFF',
                height: 254,
                width: null,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {this.renderPhotoCardBack()}
              <View
                style={{
                  height: 210,
                  width: 335,
                  borderRadius: 8,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  position: 'absolute'
                }}
              >
                <TouchableOpacity onPress={this.showActionSheetBack}>
                  <Image
                    resizeMode='cover'
                    source={require('../../assets/images/add_photo.png')}
                    style={{ height: 52, width: 52, }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* END BACK SIDE CONTENT */}

            <Button
              title='Next'
              buttonStyle={{
                borderRadius: 5,
                height: 46,
                marginLeft: theme.MARGIN_LEFT,
                marginRight: theme.MARGIN_RIGHT,
                marginBottom: 24,
                marginTop: 16
              }}
              onPress={() => { }}
            />
          </View>
        </ScrollView>
        <ActionSheet
          ref={o => { this.ActionSheetFront = o }}
          title={'Select photo front side'}
          options={['Take Photo...', 'Choose from Library...', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionSheetPressFront}
        />
        <ActionSheet
          ref={o => { this.ActionSheetBack = o }}
          title={'Select photo back side'}
          options={['Take Photo...', 'Choose from Library...', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionSheetPressBack}
        />
      </View>
    );
  }
}

export default CreatePhtoCardScreen;
