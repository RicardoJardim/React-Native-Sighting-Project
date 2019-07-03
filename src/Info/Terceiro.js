import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, TextInput, Button, Platform, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import styled from 'styled-components';

class Terceiro extends Component{

  render() {
    const {navigation} = this.props;
    const type = {
      typeName: navigation.getParam('typeName', ''),
      typeDescription: navigation.getParam('typeDescription', ''),
      typeHabitat: navigation.getParam('typeHabitat', ''),
      food: navigation.getParam('food', ''),
      lifespan: navigation.getParam('lifespan', ''),
      picture: navigation.getParam('picture', '')
    }
    return (
      <View style={styles.container}>
        <ViewHeader>{type.typeName}'s Detail</ViewHeader>
        <Container>
          <Card
            key={type.id}
            containerStyle={{
              backgroundColor: '#395bd6',
              borderRadius: 10,
            }}
          >
            <Image
              source={{uri: type.picture}}
              style={{width: '100%', height : 250, resizeMode: 'cover'}}
            />
            <CardSubtitle>Description: <Bold>{type.typeDescription}</Bold></CardSubtitle>
            <CardSubtitle>Habitat: <Bold>{type.typeHabitat}</Bold></CardSubtitle>
            {type.food && (<CardSubtitle>Eats: <Bold>{type.food}</Bold></CardSubtitle>)}
            {type.lifespan && (<CardSubtitle>Lifespan: <Bold>{type.lifespan}</Bold></CardSubtitle>)}
          </Card>
        </Container>
      </View>

    );}


}
  const styles = StyleSheet.create({
  container :{
    backgroundColor: '#bbdefb',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'


  }});

export default Terceiro

const ViewHeader = styled.Text`
  color: #395bd6;
  font-size: 28px;
`
const Container = styled.ScrollView`
  padding-top: 15px;
  width: 100%;
`

const Bold = styled.Text`
  font-weight: 600;
  font-size: 16px;
`

const CardSubtitle = styled.Text`
width:90%;
text-align: center;
margin: 5px auto;
color: white;
font-size: 18px;
padding-top: 5px;
padding-bottom: 5px;

`
