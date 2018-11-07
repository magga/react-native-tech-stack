import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    render() {
        console.log('ini local libraries', this.props.local_libraries);

        return (
            <View>
                <Text>HomeScreen</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        local_libraries: state.libraries,
        cart: state.cart
    };
};

export default connect(mapStateToProps)(HomeScreen);
