import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

class HomeScreen extends Component {
    render() {        
        return (
            <View>
                <FlatList 
                    data={this.props.local_libraries}
                    renderItem={(data) => {
                        return (
                            <ListItem 
                                item={data.item}
                            />
                        );
                    }}
                    keyExtractor={(item) => {
                        return item.id.toString();
                    }}
                    extraData={this.props}
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
