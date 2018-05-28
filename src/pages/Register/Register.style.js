import { StyleSheet, Dimensions } from 'react-native';
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
        height: SCREEN_HEIGHT - 100
    },
    labelSigninStyle: {
        marginBottom: 48,
    },
    registerGroupBtnStyle: {
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
        marginTop: 100,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
    }, 
    nextBtnGroupStyle: {
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
