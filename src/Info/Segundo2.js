import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, ScrollView, Image } from 'react-native';
import {connect} from 'react-redux';
import { getFauna } from '../store/actions/faunaActions'
import styled from 'styled-components'
import {Card} from 'react-native-elements'
class Segundo2 extends Component{

  static navigationOptions= {
        title: 'Fauna'
        };

componentDidMount(){
  this.props.getFauna();
}
    render() {
      const {fauna: {fauna}} = this.props;
       const {navigate} = this.props.navigation;

      let faunaList;
      faunaList = fauna.length > 0
      ? (
        <Container>
          <View>
          {
            fauna.map(fauna => (
                <Card
                  key={fauna.id}
                  containerStyle={{
                    backgroundColor: '#8aacc8',
                    borderRadius: 10
                  }}
                >
                <Row>
                <CardText>{fauna.name}</CardText>
                <Image
                  source={{uri: fauna.picture}}
                  style={{width: 75, height : 75, resizeMode: 'cover'}}
                />
                </Row>
                  <StyledButton
                    onPress={() => navigate('Terceira', {
                        id: fauna.id,
                        typeName: fauna.name,
                        typeDescription: fauna.description,
                        typeHabitat: fauna.habitat,
                        food: fauna.food,
                        lifespan: fauna.lifespan,
                        picture: fauna.picture

                      })}
                    title={`View ${fauna.name} details`}
                  />
                </Card>

            ))
          }
          </View>
        </Container>
      ) : (
        <>
          <Text> Loading...</Text>
        </>
      );

      return (
        <View style={styles.container}>
          {faunaList}
        </View>

      );
}


}
const styles = StyleSheet.create({
container :{
  backgroundColor: '#bbdefb',
  flex: 1,
  alignItems:'center',
  justifyContent:'center'

}});

const mapStateToProps = (state) => ({
  fauna: state.fauna
})

export default connect(mapStateToProps, {getFauna})(Segundo2)

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
`
const Container = styled.ScrollView`
  padding-top: 15px;
  width: 100%;
`
const CardText = styled.Text`
  width:50%;
  text-align: center;
  color: white;
  font-size: 28px;
  margin: 5px auto;
`
const CardSubtitle = styled.Text`
width:90%;
text-align: center;
margin: 5px auto;
color: lightblue;
font-size: 12px;
padding-top: 5px;
padding-bottom: 5px;

`
const StyledButton = styled.Button`
  background-color: #FFFFFF;
`
