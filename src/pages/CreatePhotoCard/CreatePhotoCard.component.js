import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, TouchableOpacity, Image, } from 'react-native';
import { Button, } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import ActionSheet from 'react-native-actionsheet'
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../CreatePhotoCard/CreatePhotoCard.style';
import theme from '../../styles/theme.style';

class CreatePhotoCardScreen extends Component {
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
        backgroundColor='transparent'
        onPress={() => this.props.mainScreen}
      />
    )
  }

  static propTypes = {
    //Action Creator
    handleActionSheetPressFront: PropTypes.func,
    handleActionSheetPressBack: PropTypes.func,
    mainScreen: PropTypes.func,

    //Data 
    frontBusinessCard: PropTypes.object,
    backBusinessCard: PropTypes.object,

    //Loading
    loading: PropTypes.bool,
  };

  showActionSheetFront = () => {
    this.ActionSheetFront.show()
  }

  showActionSheetBack = () => {
    this.ActionSheetBack.show()
  }

  renderFrontBusinessCard() {
    const { frontBusinessCard } = this.props
    const {
      backgroundDefaultPhotoStyle,
      backgroundPickerPhotoStyle,
      textPlaceholderStyle,
    } = styles

    if (frontBusinessCard) {
      // Image from picker
      return (
        <Image
          source={frontBusinessCard}
          style={backgroundPickerPhotoStyle}
          resizeMode='cover'
        />
      )
    }

    // Front Image Default
    return (
      <View>
        <View style={backgroundDefaultPhotoStyle}>
          {/* Text Placeholder  */}
          <Text style={textPlaceholderStyle}> Front side </Text>
        </View>
      </View>
    )
  }

  renderFrontBusinessCard() {
    const { backBusinessCard } = this.props
    const {
      backgroundDefaultPhotoStyle,
      backgroundPickerPhotoStyle,
      textPlaceholderStyle,
    } = styles

    if (backBusinessCard) {
      // Image from picker
      return (
        <Image
          source={backBusinessCard}
          style={backgroundPickerPhotoStyle}
          resizeMode='cover'
        />
      )
    }

    // Back Image Default
    return (
      <View>
        <View style={backgroundDefaultPhotoStyle}>
          {/* Text Placeholder  */}
          <Text style={textPlaceholderStyle}> Back side </Text>
        </View>
      </View>
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
      scrollViewStyle,
      containerStyle,
      contentStyle,
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
            <View style={contentStyle}>
              {this.renderFrontBusinessCard()}

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
            <View style={contentStyle}>
              {this.renderFrontBusinessCard()}

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

export default CreatePhotoCardScreen;
