import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../styles/theme.style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const SCREEN_HEIGHT_IPHONE_X = 812;

const SMALL_SCREEN_HEIGHT = 568;
export default StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_AUTH_CONTAINER_COLOR,
    },
    scrollViewStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_AUTH_CONTAINER_COLOR,
    },
    containerStyle: {
        flex: 1,
        height: Platform.OS === 'android' ? SCREEN_HEIGHT - 70 : null
    },
    labelSignUpStyle: {
        marginBottom: 48,
    },
    socialButtonGroupStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    lineSeparatorStyle: {
        height: 1,
        width: null,
        flex: 1,
        backgroundColor: theme.SEPARATOR_COLOR,
    },
    textSeparatorStyle: {
        fontSize: theme.TEXT_SEPARATOR_FONT,
        color: theme.TEXT_SEPARATOR_COLOR,
        marginLeft: 8,
        marginRight: 8,
    },
    separatorLayoutStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
    },
    forgetPasswordTextStyle: {
        fontSize: theme.TEXT_FORGET_PASSWORD_FONT,
        color: theme.FORGET_PASSWORD_COLOR,
        marginTop: 12,
    },
    forgetPasswordGroupStyle: {
        alignItems: 'center',
        marginTop: 16,
    },
    formGroupStyle: {
        flexDirection: 'column',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
    },
    inputGroupStyle: {
        flexDirection: 'row',
        height: SCREEN_HEIGHT <= SMALL_SCREEN_HEIGHT ? 80 : 90,
    },
    textInputStyle: {
        flex: 1,
        height: SCREEN_HEIGHT <= SMALL_SCREEN_HEIGHT ? 55 : 65,
        justifyContent: 'center',
    },
    iconImageStyle: {
        height: 24,
        width: 24,
        marginRight: 16,
        marginTop: 26,
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
    containerBottomStyle: {
        position: 'absolute',
        top: SCREEN_HEIGHT >= SCREEN_HEIGHT_IPHONE_X
            ? (SCREEN_HEIGHT - 300)
            : (SCREEN_HEIGHT - 200),
        width: SCREEN_WIDTH,
        alignItems: 'center',
    },
    textErrorStyle: {
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT,
    }
});
