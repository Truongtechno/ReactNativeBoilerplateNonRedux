import React, { Component } from 'react';
import { Header } from 'native-base';
import { View, Text } from 'react-native';
import styles from './style';

class index extends Component {

    render() {
        return (
            <View style={styles.viewHeader}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }

}

export default index;