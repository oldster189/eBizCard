import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

const heightBackgroundHeader = 218;
export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
    imgBackgroundHeaderStyle: {
        height: heightBackgroundHeader,
        width: null,
    },
    imgProfileAndCameraLayoutGroupStyle: {
        position: 'absolute',
        left: (SCREEN_WIDTH / 2) - 90, //90 ระยะที่ประมาณเอา
        top: (heightBackgroundHeader / 2) - 90,  
    },
    profileLayoutGroupStyle: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: 160,
        width: 160,
    },
    imgProfileStyle: {
        height: 138,
        width: 138,
        borderRadius: 69
    },
    cameraLayoutGroupStyle: {
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
    secondGroupLayoutStyle: {
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
    }
});
