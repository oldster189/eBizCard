import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../styles/theme.style';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_AUTH_CONTAINER_COLOR,
    },
    rootLayoutStyle: {
        flex: 1,
        height: Platform.OS === 'android' ? SCREEN_HEIGHT - 70 : null 
    },
    labelSignupStyle: {
        marginBottom: 48,
    },
    loginGroupBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    lineSeparatorStyle: {
        height: 1,
        width: (SCREEN_WIDTH / 4),
        backgroundColor: theme.SEPARATOR_COLOR,
    },
    textSeparatorStyle: {
        fontSize: theme.TEXT_SEPARATOR_FONT,
        color: theme.TEXT_SEPARATOR_COLOR,
        marginLeft: 8,
        marginRight: 8,
    },
    separatorGroupStyle: {
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
    inputFormGroupStyle: {
        flexDirection: 'column',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 24,
    },
    inputGroupStyle: {
        flexDirection: 'row',
        height: SCREEN_HEIGHT <= 568 ? 80 : 90,
    },
    textInputStyle: {
        flex: 1,
        height: SCREEN_HEIGHT <= 568 ? 55 : 65,
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
    layoutButtonGroupStyle: {
        position: 'absolute',
        top: SCREEN_HEIGHT > 736 ? (SCREEN_HEIGHT - 300) : (SCREEN_HEIGHT - 200),
        width: SCREEN_WIDTH,
        alignItems: 'center',
    },
    errorStyle: {
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT, 
    }
});
