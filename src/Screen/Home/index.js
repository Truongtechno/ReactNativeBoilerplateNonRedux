import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Body, Content, Header } from 'native-base';
import styles from './style';
import strings from '../../Config/Strings';
import HeaderBase from '../../Components/HeaderBase';


class index extends Component {


    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <HeaderBase title={strings.homeScreen.titleHeader} />
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