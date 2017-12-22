import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import styled from "styled-components/native";
import book from "./Date";

const ConstAll = styled.Text` 
    color: #000
    font-weight:bold;
`;

const Title = styled.Text`
  color: #000;
  font-size: 16;
  text-align: left;
  margin-top: 175px;
`;

const Isbn = styled.Text`
  color: #a9a9a9;
  font-size: 14;
  font-weight: 100;
  text-align: left;
`;

const Description = styled.Text`
  color: #a9a9a9;
  font-size: 14;
  font-weight: 100;
  text-align: left;
`;

const Value = styled.Text`
  font-size: 14;
  font-weight: 300;
`;
export default class BookDetail extends React.Component {
  static navigationOptions = {
    title: "Detalhe do Livro"
  };

  render() {
    const {
      isbn,
      title,
      genre,
      description
    } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <ConstAll>
          {" "}
          Inscrição: <Value>{isbn}</Value>
        </ConstAll>
        <ConstAll>
          Gênero: <Value>{genre}</Value>
        </ConstAll>
        <ConstAll>
          Título: <Value>{title}</Value>
        </ConstAll>
        <ConstAll>
          {" "}
          Descrição: <Value>{description}</Value>{" "}
        </ConstAll>
      </View>
    );
  }
}
