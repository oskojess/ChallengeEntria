import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableHighlight
} from "react-native";
import styled from "styled-components/native";
import { book } from "./Date";

const Wrapper = styled.ScrollView`
  flex: 1;
`;
const Card = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  margin: 10px;
`;
const CardText = styled.View`
  flex-direction: column;
  padding: 15px;
`;
const BookImage = styled.Image`
  width: 50;
  height: 50;
`;

export default class BookList extends React.Component {
  static navigationOptions = {
    title: "Listagem dos Livros"
  };
  gotoDetail = books => {
    this.props.navigation.navigate("Second", { ...books });
  };
  render() {
    return (
      <Wrapper>
        {book.map((books, i) => {
          console.log(books);
          return (
            <Card key={i} onPress={() => this.gotoDetail(books)}>
              <BookImage
                source={{
                  uri:
                    "http://lifestyle.inquirer.net/files/2012/05/t0521ruey-murakami_feat9_1.jpg"
                }}
              />
              <CardText>
                <Text> {books.title} </Text>
                <Text> {books.description} </Text>
              </CardText>
            </Card>
          );
        })}
      </Wrapper>
    );
  }
}
