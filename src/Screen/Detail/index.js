import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Container, Body, Content, Header, Button, Item } from 'native-base';
import HeaderBase from '../../Components/HeaderBase';
import Styles from '../../Config/Styles';
import strings from '../../Config/Strings';
import getNullable from '../../Config/Helper';

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
                <Header style={Styles.header}>
                    <HeaderBase title={strings.detailScreen.titleHeader} navigation={this.props.navigation} />
                </Header>
                <Body>
                    <Content>
                        <View>
                            <TextInput
                                style={{ width: 200, height: 40, borderWidth: 1, borderColor: '#CACACA', margin: 10 }}
                                value={this.state.inputValue}
                                onChangeText={(value) => this.setState({ inputValue: value })}
                            />
                            <Button full style={{ flex: 1 }} onPress={this.handleAdd} >
                                <Text style={{ flex: 1, textAlign: 'center', color: 'white', fontSize: 17 }}>Add</Text>
                            </Button>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;