import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Style from './style';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const item = this.props.item;
    return (
      <View>
        <View style={Style.parrentView}>
          <Image
            style={Style.image}
            source={{ uri: item.url }}
          />
          <Text style={Style.text}>{item.title}</Text>
        </View>
        <View style={Style.lineSeparator} />
      </View>
    );
  }
}

export default index;
