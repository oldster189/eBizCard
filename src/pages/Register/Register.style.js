import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    rootLayoutStyle: {
        flex: 1,
        height: SCREEN_HEIGHT - 100
    },
    labelSignupStyle: {
        marginBottom: 48,
    },
    loginGroupBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    lineIndicatorStyle: {
        height: 1,
        width: (SCREEN_WIDTH / 4),
        backgroundColor: '#EAEAEA',
    },
    textIndicatorStyle: {
        fontSize: 19,
        color: '#454545',
        marginLeft: 8,
        marginRight: 8,
    },
    indicatorGroupStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0,
        marginTop: 100,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
    },
    forgetPasswordTextStyle: {
        fontSize: 14,
        color: '#B4B4B4',
        marginTop: 12,
    },
    forgetPasswordGroupStyle: {
        alignItems: 'center',
        marginTop: 40,
    },
    inputFormGroupStyle: {
        flexDirection: 'column',
        marginLeft: 24,
        marginRight: 24,
    },
    inputGroupStyle: {
        flexDirection: 'row',
        marginTop: 32
    },
    iconImageStyle: {
        height: 24,
        width: 24,
        marginRight: 16,
        marginTop: 6,
    },
    nextButtonStyle: {
        height: 48,
        width: 48,
    },
    socialButtonStyle: {
        height: 48,
        width: 48,
        marginLeft: 16,
        marginRight: 16,
    },
    layoutButtonGroupStyle: {
        position: 'absolute',
        top: (SCREEN_HEIGHT - 350),
        width: SCREEN_WIDTH,
        alignItems: 'center'
    }
});
