import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <FlatList 
                    data={this.props.local_libraries}
                    renderItem={(data) => {
                        return (
                            <Card>
                                <CardItem>
                                    <Text>{data.item.title}</Text>
                                </CardItem>

                                <CardItem>
                                    <Text>{data.item.description}</Text>
                                </CardItem>
                            </Card>
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
