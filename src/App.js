import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import store from './store';
import RouterNavigator from './Router';

 
class App extends Component {
    //V2
    render() {
        return (
            <Provider store={store}>
                <RouterNavigator />
            </Provider>
        );
    }
}

export default App;
