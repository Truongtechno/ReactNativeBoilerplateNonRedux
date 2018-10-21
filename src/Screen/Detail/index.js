import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Container, Body, Content, Header } from 'native-base';
import styles from './style';

class index extends Component {


    render() {
        return (
            <Container>
                <Header>
                    
                </Header>
                <Body>
                    <Content>
                        <View>
                            <Text>Detail</Text>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;