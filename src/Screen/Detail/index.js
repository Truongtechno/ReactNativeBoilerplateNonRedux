import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Container, Body, Content, Header, Button, Item } from 'native-base';
import HeaderBase from '../../Components/HeaderBase';
import Config from '../../Config';
import getNullable from '../../Config/Helper';
import Style from './style';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleAdd = () => {
        const addValue = getNullable(['navigation', 'state', 'params', 'addValue'], this.props) || null;
        this.props.navigation.goBack();
        addValue(this.state.inputValue);
    }

    render() {
        return (
            <Container>
                <Header style={Config.Styles.header}>
                    <HeaderBase title={Config.String.detailScreen.titleHeader} navigation={this.props.navigation} />
                </Header>
                <Body>
                    <Content>
                        <View>
                            <TextInput
                                style={Style.textInput}
                                value={this.state.inputValue}
                                onChangeText={(value) => this.setState({ inputValue: value })}
                            />
                            <Button full style={Style.button} onPress={this.handleAdd} >
                                <Text style={Style.textButton}>Add</Text>
                            </Button>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;