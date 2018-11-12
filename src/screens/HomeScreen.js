import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    _renderLibraries() {
        return this.props.local_libraries.map((item, index) => {
            return (
                <Card key={index}>
                    <CardItem>
                        <Text>{item.title}</Text>
                    </CardItem>

                    <CardItem>
                        <Text>{item.description}</Text>
                    </CardItem>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this._renderLibraries()}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        local_libraries: state.libraries
    };
};

export default connect(mapStateToProps)(HomeScreen);
