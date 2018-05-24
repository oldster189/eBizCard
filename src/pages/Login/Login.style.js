import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    containerStyle: {
        flex: 1, 
        backgroundColor: '#FFFFFF',
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
        flex: 1,
        height: 1,
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
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8, 
    },
    forgetPasswordTextStyle: {
        fontSize: 14,
        color: '#B4B4B4'
    },
    forgetPasswordGroupStyle: { 
        alignItems: 'center',  
        marginTop: 26,
    }
});
