import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Container, Body, Content, Header, Button, Item } from 'native-base';
import HeaderBase from '../../Components/HeaderBase';
import Config from '../../Config';
import Localization from '../../Localization';
import getNullable from '../../Helper';
import Style from './style';
import validateInput from '../../Helper/Validate';

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.validation = {
            name: {
                length: {
                    minimum: 5,
                    message: 'Your input at least 5 character'
                  }
            }
        }
    }

    handleAdd = () => {
        const errorInput =  validateInput('name', this.state.inputValue, this.validation);
        if(errorInput != null) {
            alert(errorInput)
            return;
        }
        const addValue = getNullable(['navigation', 'state', 'params', 'addValue'], this.props) || null;
        this.props.navigation.goBack();
        addValue(this.state.inputValue);
    }

    render() {
        return (
            <Container>
                <Header style={Config.Styles.header}>
                    <HeaderBase title={Localization.detailScreen.titleHeader} navigation={this.props.navigation} />
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