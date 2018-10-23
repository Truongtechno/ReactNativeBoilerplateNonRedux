import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Item } from 'native-base';
import validate from '../../Config/Helper/Validators';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const  { showValidation, validation } = this.props;
        
        return (
            <View>
                <Item error={ }>
                    <TextInput />
                </Item>
            </View>
        );
    }
}

export default index;
