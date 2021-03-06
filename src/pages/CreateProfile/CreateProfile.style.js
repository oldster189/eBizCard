import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme.style';

const SCREEN_WIDTH = Dimensions.get('window').width; 

const heightBackgroundHeader = 218;
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
    backgroundImageHeaderStyle: {
        height: heightBackgroundHeader,
        width: null,
    },
    containerHeaderStyle: {
        position: 'absolute',
        left: (SCREEN_WIDTH / 2) - 90, //90 ระยะที่ประมาณเอา
        top: (heightBackgroundHeader / 2) - 90,
    },
    profileImageLayoutStyle: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: 160,
        width: 160,
    },
    profileImageStyle: {
        height: 138,
        width: 138,
        borderRadius: 69
    },
    imageProgressStyle: {
        width: 138,
        height: 138,
        position: 'absolute'
    },
    imgProgressImageStyle: {
        borderRadius: 69, 
        overflow: 'hidden'
    },
    addImageButtonLayoutStyle: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: 165,
        width: 165,
        position: 'absolute',
    },
    imgCameraStyle: {
        height: 45,
        width: 45,
    },
    secondInputLayoutStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    imgIconInputStyle: {
        height: 23,
        width: 23,
        marginLeft: theme.MARGIN_LEFT
    },
    nextBtnStyle: {
        borderRadius: 5,
        height: 46,
        marginLeft: theme.MARGIN_LEFT,
        marginRight: theme.MARGIN_RIGHT,
        marginBottom: 24,
        marginTop: 16
    },
    textInputStyle: {
        flex: 1,
        height: 70,
        justifyContent: 'center',
    },
    separatorColor: {
        borderColor: theme.SEPARATOR_COLOR,
    },
    textErrorStyle: {
        color: theme.TEXT_ERROR_COLOR,
        fontSize: theme.TEXT_ERROR_FONT,
        marginLeft: theme.MARGIN_LEFT,
    }, 
});
