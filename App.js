import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HomeScreen from './src/screens/HomeScreen';
import reducers from './src/reducers/index.js';

const AppNavigator = createStackNavigator({
	home: HomeScreen
});

class App extends Component {
    render() {
        return (
			<Provider store={createStore(reducers)}>
				<View style={{ flex: 1 }}>
					<AppNavigator />
				</View>
			</Provider>
        );
    }
}

export default App;
