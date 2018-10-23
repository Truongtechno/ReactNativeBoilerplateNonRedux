import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Container, Body, Content, Header, Footer, Button } from 'native-base';
import styles from './style';
import Styles from '../../Config/Styles';
import strings from '../../Config/Strings';
import HeaderBase from '../../Components/HeaderBase';
import Loading from '../../Components/Loading';


class index extends Component {


    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            loading: false
        }

    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        this.setState({ loading: true });
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(data => {
                this.setState({ listData: JSON.parse(data._bodyText).slice(0, 10) })
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 50, height: 50, margin: 5 }}
                        source={{ uri: item.url }}
                    />
                    <Text style={{ marginRight: 10 }}>{item.title}</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#CACACA', marginHorizontal: 5 }} />
            </View>
        )
    }

    onAddItemHandler = () => {
        this.props.navigation.navigate('Detail');
    }

    render() {
        return (
            <Container>
                <Header style={Styles.header}>
                    <HeaderBase
                        title={strings.homeScreen.titleHeader}
                    />
                </Header>
                <Body>
                    <Content>
                        <View style={{ justifyContent: 'center', marginVertical: 5 }}>
                            <Button 
                            transparent 
                            onPress={this.onAddItemHandler}
                            style={{ alignSelf: 'flex-end', margin: 5}}
                            >
                                <Image
                                    style={{ width: 50, height: 50 }}
                                    source={require('../../Assets/Images/ic_add.png')}
                                />
                            </Button>
                        </View>
                        <Loading visible={this.state.loading} />
                        <FlatList
                            data={this.state.listData}
                            keyExtractor={(item, index) => item.id.toString()}
                            renderItem={(item) => this.renderItem(item)}
                        />
                    </Content>
                </Body>
                <Footer />
            </Container>
        );
    }
}

export default index;