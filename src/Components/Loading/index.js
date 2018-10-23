import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../Config/Color';
import styles from './style';

class index extends Component {

    render() {
        if (this.props.visible) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator size={this.props.size ? this.props.size : "large"} color={this.props.color ? this.props.color : colors.loading} />
                </View>
            );
        } else {
            return null;
        }
    }
}

export default index;
