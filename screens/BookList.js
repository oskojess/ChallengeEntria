import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const util = require('util'); 

const Wrapper = styled.ScrollView`
  flex: 1;
`
const Card = styled.View`
  flex-direction: row;
  padding: 5px;
  margin: 10px;
`
const CardText = styled.View`
  flex-direction: column;
  padding:15px;
`
const BookImage = styled.Image`
  width:50; 
  height:50; 
`

const book = {
  isbn:1235,
  title:'1Q84',
  description: 'Livro sobre dois personagens...',
  genre:'Mistério',
}


/*
        <Card> 
          <BookImage source = {{uri:'https://i.imgur.com/6ywVoqy.png'}}/>
         <CardText>
            <Text> {title} </Text> 
            <Text> {description} </Text> 
          </CardText>         
        </Card> 
*/


export default class BookList extends React.Component {
    static navigationOptions = {
        title: 'Listagem dos Livros',
    };


    onPress = () => {
      this.setState({  
        () => navigate("'./BookDetail'")
    
      })
    }
    renderButton: function() {
      return (
        <TouchableOpacity onPress={this._onPressButton}>
          <BookImage
            source={require('./myButton.jpg')}
          />
        </TouchableOpacity>
      );
    },


    render() {
        console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
        const {navigate} = this.props.navigation;
        const {isbn, title, description, genre} = book;
        return(
          <Wrapper>
                <Button
                    onPress={
                        () => navigate("Second", {})
                    }
                    title = "Teste"

                />
           </Wrapper>
        );
    }
}