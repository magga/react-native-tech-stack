import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from 'react-native';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

import * as actions from './../actions';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental 
    && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _renderDescription() {
        const { selectedId, item } = this.props;
        const { id, description } = item;

        if (selectedId === id) {
            return (
                <CardItem>
                    <Text>{description}</Text>
                </CardItem>
            );
        }
    }

    render() {
        const { title, id } = this.props.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectStackId(id);
                }}
            >
                <Card>
                    <CardItem>
                        <Text>{title}</Text>
                    </CardItem>

                    {this._renderDescription()}
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedId: state.selectedId
    };
};

export default connect(mapStateToProps, actions)(ListItem);
