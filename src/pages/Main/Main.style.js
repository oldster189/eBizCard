import { StyleSheet, Dimensions } from 'react-native';

import theme from '../../styles/theme.style';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_CONTAINER_COLOR,
    },
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
    imageProfileLayoutGroupStyle: {
        marginLeft: theme.MARGIN_XX,
        marginBottom: 20,
        marginTop: 8,
        marginRight: 20,
        backgroundColor: '#339CED',
        height: 74,
        width: 74,
        borderRadius: 37,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageProfileStyle: {
        backgroundColor: theme.BACKGROUND_WHITE_COLOR,
        height: 69,
        width: 69,
        borderRadius: 34.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentProfileInfoStyle: {
        marginBottom: 10,
        flex: 1
    },
    titleButtonEditStyle: {
        color: theme.BUTTON_EDIT_HOME_COLOR,
        fontSize: theme.TEXT_FONT
    },
    photoCardStyle: {
        height: SCREEN_WIDTH * 0.6,
        width: null,
    },
    backgroundPlaceholderProfileImageStyle: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    profileImageStyle: {
        height: 64,
        width: 64,
        position: 'absolute' 
    },
    containerProfileInfoContentStyle: {
        backgroundColor: theme.BACKGROUND_WHITE_COLOR,
        marginTop: 10,
        marginBottom: 10
    },
    changeLanguageProfileLayoutStyle: {
        alignSelf: 'flex-end',
        marginTop: 4
    },
    buttonTitleStyle: {
        color: theme.TEXT_BUTTON_HOME_COLOR,
        fontSize: 16
    },
    buttonStyle: {
        width: 100
    },
    textTitleProfileStyle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: theme.TEXT_TITLE_HOME_COLOR,
        height: 30,
    },
    textSubTitleCompanyStyle: {
        fontSize: theme.TEXT_FONT,
        color: theme.TEXT_COLOR
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
