import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity, StatusBar ,Text, View, Button, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import { getFlora } from '../store/actions/floraActions'
import styled from 'styled-components'
import {Card} from 'react-native-elements'
class Segundo extends Component{

  static navigationOptions= {
        title: 'Flora'
        };

componentDidMount(){
  this.props.getFlora();
}
    render() {
      const {flora: {flora}} = this.props;
       const {navigate} = this.props.navigation;

      let floraList;
      floraList = flora.length > 0
      ? (
        <Container>
          <View>
          {
            flora.map(flora => (
                <Card
                  key={flora.id}
                  containerStyle={{
                    backgroundColor: '#8aacc8',
                    borderRadius: 10
                  }}
                >
                <Row>
                  <CardText>{flora.name}</CardText>
                  <Image
                    source={{uri: flora.picture}}
                    style={{width: 75, height : 75, resizeMode: 'cover'}}
                  />
                </Row>
                  <StyledButton
                    onPress={() => navigate('Terceira', {
                        id: flora.id,
                        typeName: flora.name,
                        typeDescription: flora.description,
                        typeHabitat: flora.habitat,
                        food: null,
                        lifespan: null,
                        picture: flora.picture


                      })}
                    title={`View ${flora.name} details`}
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
          {floraList}
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
  flora: state.flora
})

export default connect(mapStateToProps, {getFlora})(Segundo)

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
