import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Body, Content, Header } from 'native-base';
import styles from './style';
import strings from '../../Config/Strings';


class index extends Component {


    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <View style={styles.viewHeader}>
                        <Text>{strings.homeScreen.titleHeader}</Text>
                    </View>
                </Header>
                <Body>
                    <Content>
                        <View>
                            <Text>Home</Text>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;