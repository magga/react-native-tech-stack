import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';

class ListItem extends Component {
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
        const { selectedId, item } = this.props;
        const { id, description, title } = item;

        return (
            <Card>
                <CardItem>
                    <Text>{title}</Text>
                </CardItem>

                {this._renderDescription()}

                {/* { selectedId === id &&
                    <CardItem>
                        <Text>{description}</Text>
                    </CardItem>
                } */}
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedId: state.selectedId
    };
};

export default connect(mapStateToProps)(ListItem);
