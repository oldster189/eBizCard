import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MIDDLE_SCREEN_WIDTH_SIZE = 375;

const CARD_WIDTH = 90; //90 * 3.5
const CARD_HEIGHT = 54; //54 * 3.5 
export default StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
    containerStyle: {
        flex: 1, 
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
    scrollViewStyle: {
        flex: 1, 
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
    contentStyle: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: 254,
        width: null,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPlaceholderStyle: {
        fontSize: 31,
        color: 'rgba(69, 69, 69, .40)',
        fontWeight: 'bold'
    },
    backgroundDefaultPhotoStyle: {
        backgroundColor: '#D9D9D9',
        width: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? CARD_WIDTH * 3 : CARD_WIDTH * 3.5,
        height: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? CARD_HEIGHT * 3 : CARD_HEIGHT * 3.5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundPickerPhotoStyle: {
        width: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? CARD_WIDTH * 3 : CARD_WIDTH * 3.5,
        height: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? CARD_HEIGHT * 3 : CARD_HEIGHT * 3.5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(69, 69, 69, .40)'
    },
    addPhotoButtonStyle: {
        height: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? 180 : 210,
        width: SCREEN_WIDTH < MIDDLE_SCREEN_WIDTH_SIZE ? 300 : 335,
        borderRadius: 8,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: 'absolute'
    },
    imageIconStyle: {
        height: 52,
        width: 52
    },
    nextButtonStyle: {
        height: 46,
        marginLeft: theme.MARGIN_LEFT,
        marginRight: theme.MARGIN_RIGHT,
        marginBottom: 24,
        marginTop: 16,
        borderRadius: 5
    }

});
