import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';
const util = require('util'); 

const book = {
    isbn:1235,
    title:'1Q84',
    description: 'Livro sobre dois personagens...',
    genre:'Suspense',
}

const ConstAll = styled.Text ` 
    color: #000
    font-weight:bold;
`

const Title = styled.Text`
    color: #000;
    font-size:16; 
    text-align:left;
    margin-top:175px;
` 

const Isbn = styled.Text`
    color: #A9A9A9;
    font-size: 14;
    font-weight: 100;
    text-align: left;

`

const Description = styled.Text`
    color: #A9A9A9;
    font-size: 14;
    font-weight: 100;
    text-align: left;
`

export default class BookDetail extends React.Component {
    static navigationOptions = {
        title: 'Second screen',
    };

    render() {
        console.log("this.props.navigation.state = " + util.inspect(this.props.navigation.state, false, null));
        const { isbn, title, description, genre} = book;
        return (
            <View>
                <Text>{isbn}</Text>   
                <Text>{description}</Text>
            </View>
        );
    }
}
