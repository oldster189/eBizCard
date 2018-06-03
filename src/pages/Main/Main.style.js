import { StyleSheet, Dimensions } from 'react-native';

import theme from '../../styles/theme.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
    headerSwipeStyle: {
        backgroundColor: theme.BACKGROUND_WHITE_COLOR,
        height: (SCREEN_WIDTH * 0.6) + 40,
    },
    paginationStyle: {
        bottom: 15
    },
    dotStyle: {
        backgroundColor: '#E0E0E0',
        width: 10,
        height: 10,
        borderRadius: 5
    },
    activeDotStyle: {
        backgroundColor: '#575757',
        width: 10,
        height: 10,
        borderRadius: 5
    },
    photoCardStyle: {
        height: SCREEN_WIDTH * 0.6,
        width: null,
    },
    textNameProfileStyle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#2F2F2F',
        height: 30,
    },
    textNameCompanyStyle: {
        fontSize: 19,
        color: '#454545'
    },
    textTitleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: theme.MARGIN_XX,
        marginTop: 12,
        marginBottom: 10,
    },
    editButtonStyle: {  
        width: 100,
        height: 34,
        marginTop: 8,
        marginBottom: 8 
    }
});
