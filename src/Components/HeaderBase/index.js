import React, { Component } from 'react';
import { Button } from 'native-base';
import { View, Text, Image } from 'react-native';
import styles from './style';

class index extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.5 }}>
                    {
                        this.props.navigation && (
                            <Button
                                transparent
                                style={{ alignSelf: 'flex-start' }}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Image
                                    style={{ width: 12, height: 21, marginRight: 5 }}
                                    source={require('../../Assets/Images/ic_arrow_left_white.png')}
                                />
                            </Button>
                        )
                    }
                </View>
                <View style={styles.viewHeader}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 0.5 }}>

                </View>
            </View>
        );
    }

}

export default index;