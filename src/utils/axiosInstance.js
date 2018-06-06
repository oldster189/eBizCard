import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { USER_TOKEN } from '../constants/constants';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
    const defaultConfig = config
    const userToken = await AsyncStorage.getItem(USER_TOKEN)
    console.log(userToken)
    if (userToken) {
        defaultConfig.headers.authorization = userToken;
    }
    return defaultConfig
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


export default axiosInstance
