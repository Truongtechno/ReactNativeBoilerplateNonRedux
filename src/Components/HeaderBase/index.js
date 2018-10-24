import React, { Component } from 'react';
import { Button } from 'native-base';
import { View, Text, Image } from 'react-native';
import Images from '../../Assets/Images';
import styles from './style';

class index extends Component {

    render() {
        return (
            <View style={styles.parrentView}>
                <View style={styles.viewLeft}>
                    {
                        this.props.navigation && (
                            <Button
                                transparent
                                style={styles.buttonLeft}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Image
                                    style={styles.imageButtonLeft}
                                    source={Images.imageArrowLeftWhite}
                                />
                            </Button>
                        )
                    }
                </View>
                <View style={styles.viewCenter}>
                    <Text style={styles.textCenter}>{this.props.title}</Text>
                </View>
                <View style={styles.viewRight}>

                </View>
            </View>
        );
    }

}

export default index;