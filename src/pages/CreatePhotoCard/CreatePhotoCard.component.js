import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { Button, } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ActionSheet from 'react-native-actionsheet'
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../CreatePhotoCard/CreatePhotoCard.style';
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
        onPress={() => this.props.mainScreen}
      />
    )
  }

  static propTypes = {
    handleActionSheetPressFront: PropTypes.func,
    handleActionSheetPressBack: PropTypes.func,
    mainScreen: PropTypes.func,
    photoCardFront: PropTypes.object,
    photoCardBack: PropTypes.object,
    loading: PropTypes.bool,
  };

  showActionSheetFront = () => {
    this.ActionSheetFront.show()
  }

  showActionSheetBack = () => {
    this.ActionSheetBack.show()
  }

  renderPhotoCardFront() {
    const { photoCardFront } = this.props
    const {
      contentDefaultPhotoStyle,
      textPlaceholderStyle,
      contentSelectPhotoStyle
    } = styles

    if (photoCardFront === null || photoCardFront === '') {
      return (
        <View>
          <View style={contentDefaultPhotoStyle}>
            {/* Text Placeholder  */}
            <Text style={textPlaceholderStyle}> Front side </Text>
          </View>
        </View>
      )
    }
    return (
      // Image from select picker
      <Image
        source={photoCardFront}
        style={contentSelectPhotoStyle}
        resizeMode='cover'
      />
    )
  }

  renderPhotoCardBack() {
    const { photoCardBack } = this.props
    const {
      contentDefaultPhotoStyle,
      textPlaceholderStyle,
      contentSelectPhotoStyle
    } = styles

    if (photoCardBack === null || photoCardBack === '') {
      return (
        <View>
          <View style={contentDefaultPhotoStyle}>
            {/* Text Placeholder  */}
            <Text style={textPlaceholderStyle}> Back side </Text>
          </View>
        </View>
      )
    }
    return (
      // Image from select picker
      <Image
        source={photoCardBack}
        style={contentSelectPhotoStyle}
        resizeMode='cover'
      />
    )
  }

  render() {
    const {
      handleActionSheetPressFront,
      handleActionSheetPressBack,
      loading
    } = this.props

    const {
      safeAreaStyle,
      containerStyle,
      scrollViewStyle,
      cardContentStyle,
      addPhotoButtonStyle,
      imageIconStyle,
      nextButtonStyle
    } = styles

    return (
      <SafeAreaView
        forceInset={{ bottom: 'always' }}
        style={safeAreaStyle}
      >
        <ScrollView
          keyboardShouldPersistTaps='handled'
          style={scrollViewStyle}
        >
          <View style={containerStyle}>

            {/* START FRONT SIDE CONTENT */}
            <View style={cardContentStyle}>
              {this.renderPhotoCardFront()}

              {/* Button Add Image Layout*/}
              <View style={addPhotoButtonStyle}>
                <TouchableOpacity onPress={this.showActionSheetFront}>
                  <Image
                    resizeMode='cover'
                    source={require('../../assets/images/add_photo.png')}
                    style={imageIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* END FRONT SIDE CONTENT */}

            {/* START BACK SIDE CONTENT */}
            <View style={cardContentStyle}>
              {this.renderPhotoCardBack()}

              {/* Button Add Image Layout*/}
              <View style={addPhotoButtonStyle}>
                <TouchableOpacity onPress={this.showActionSheetBack}>
                  <Image
                    resizeMode='cover'
                    source={require('../../assets/images/add_photo.png')}
                    style={imageIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* END BACK SIDE CONTENT */}

            <Button
              title='Next'
              buttonStyle={nextButtonStyle}
              onPress={() => { }}
            />
          </View>
        </ScrollView>

        {/* ActionSheet for Front Side */}
        <ActionSheet
          ref={o => { this.ActionSheetFront = o }}
          title={'Select photo front side'}
          options={['Take Photo...', 'Choose from Library...', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionSheetPressFront}
        />

        {/* ActionSheet for Back Side */}
        <ActionSheet
          ref={o => { this.ActionSheetBack = o }}
          title={'Select photo back side'}
          options={['Take Photo...', 'Choose from Library...', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionSheetPressBack}
        />

        {/* Loading  */}
        <Spinner visible={loading} />
      </SafeAreaView>
    );
  }
}

export default CreatePhtoCardScreen;
