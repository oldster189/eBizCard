import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export default StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: '#EDEEEF',
    },
    scrollViewStyle: {
        flex: 1,
        backgroundColor: '#EDEEEF',
    },
    containerStyle: {
        flex: 1,
        backgroundColor: '#EDEEEF',
    },
    profileImageLayoutGroupStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E5FA5',
    },
    imageProfileLayoutGroupStyle: {
        marginLeft: theme.MARGIN_XX,
        marginBottom: 9,
        marginTop: 28,
        marginRight: 20,
        backgroundColor: '#339CED',
        height: 60,
        width: 60,
        borderRadius: 30,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageProfileStyle: {
        backgroundColor: theme.BACKGROUND_WHITE_COLOR,
        height: 55,
        width: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageStyle: {
        height: 50,
        width: 50,
    }
});
