import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Container, Body, Content, Header, Footer, Button } from 'native-base';
import Config from '../../Config';
import HeaderBase from '../../Components/HeaderBase';
import Loading from '../../Components/Loading';
import Item from './Item';
import Axios from 'axios';
import Style from './style';


const sourceImageAdd = require('../../Assets/Images/ic_add.png');


class index extends Component {


    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            loading: false,
            tempId: 1111
        }

    }

    componentDidMount() {
        this.getListData();
    }

    getListData() {
        this.setState({ loading: true });
        Axios.get('/photos')
            .then(data => {
                this.setState({ listData: data.data.slice(0, 10) })
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    renderItem = ({ item }) => {
        return <Item item={item} />;
    }

    onAddItemHandler = () => {
        this.props.navigation.navigate(Config.Constant.DETAIL, { addValue: (value) => this.addValue(value) });
    }

    addValue(value) {
        let newItem = {};
        newItem.albumId = 1;
        newItem.id = this.state.tempId;
        newItem.title = value;
        newItem.url = 'https://via.placeholder.com/600/92c952';
        newItem.thumbnailUrl = 'https://via.placeholder.com/150/92c952';
        this.setState((prevState, props) => {
            let list = prevState.listData;
            list.unshift(newItem);
            return {
                listData: list,
                tempId: prevState.tempId + 1
            }
        })
    }

    render() {
        return (
            <Container>
                <Header style={Config.Styles.header}>
                    <HeaderBase
                        title={Config.String.homeScreen.titleHeader}
                    />
                </Header>
                <Body>
                    <Content>
                        <View style={Style.parrentView}>
                            <Button
                                transparent
                                onPress={this.onAddItemHandler}
                                style={Style.buttonAdd}
                            >
                                <Image
                                    style={Style.imageAdd}
                                    source={sourceImageAdd}
                                />
                            </Button>
                        </View>
                        <Loading visible={this.state.loading} />
                        <FlatList
                            extraData={this.state}
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