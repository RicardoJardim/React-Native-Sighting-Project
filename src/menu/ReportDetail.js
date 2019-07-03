import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet,TouchableOpacity, StatusBar ,Text, View, TextInput, Button, Platform, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import styled from 'styled-components';

class ReportDetail extends Component{

  render() {
    const {navigation} = this.props;
    const report = {
      user: navigation.getParam('user', ''),
      description: navigation.getParam('description', ''),
      typeName: navigation.getParam('typeName', ''),
      created: navigation.getParam('created', ''),
      latitude: navigation.getParam('latitude', ''),
      longitude: navigation.getParam('longitude', ''),

    }
    return (
      <View style={styles.container}>
        <ViewHeader>{report.typeName}'s Detail</ViewHeader>
        <Container>
          <Card
            key={report.id}
            containerStyle={{
              backgroundColor: '#395bd6',
              borderRadius: 10,
            }}
          >
            <CardSubtitle><Bold>No picture found</Bold></CardSubtitle>
            <CardSubtitle>Description: <Bold>{report.description}</Bold></CardSubtitle>
            <CardSubtitle>Created by: <Bold>{report.user}</Bold></CardSubtitle>
            <CardSubtitle>Latitude: <Bold>{report.latitude}</Bold></CardSubtitle>
            <CardSubtitle>longitude: <Bold>{report.longitude}</Bold></CardSubtitle>
            <CardSubtitle>Taken: <Bold>{report.created}</Bold></CardSubtitle>
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

export default ReportDetail
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
