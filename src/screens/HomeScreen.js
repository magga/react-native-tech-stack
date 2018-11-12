import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
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
            <View>
                <FlatList 
                    data={this.props.local_libraries}
                    renderItem={(data) => {
                        return (
                            <Text style={{ fontSize: 40 }}>{data.item.description}</Text>
                        );
                    }}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        local_libraries: state.libraries
    };
};

export default connect(mapStateToProps)(HomeScreen);
