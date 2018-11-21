import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem } from 'native-base';

class ListItem extends Component {
    render() {
        const { title, description } = this.props.item;

        return (
            <Card>
                <CardItem>
                    <Text>{title}</Text>
                </CardItem>

                <CardItem>
                    <Text>{description}</Text>
                </CardItem>
            </Card>
        );
    }
}

export default ListItem;
