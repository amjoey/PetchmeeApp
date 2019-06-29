/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Button, Text, ListItem, Body, Icon, Right, Title, Left, Separator, Badge, Switch } from 'native-base';
import Dialog from "react-native-dialog";

import { db } from './src/config';

//******  This fixes the yellow box  *******/
import { YellowBox } from 'react-native';
import _ from 'lodash';
import { bold } from 'ansi-colors';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
//******************************************/


let itemsRef = db.ref('/Petchmee');

export default class App extends Component {
  state = {
    items: [],
    sethumidityon: "",
    sethumidityoff: "",
    dialogVisibleOn: false,
    dialogVisibleOff: false,
    sethumidityon1: "",
    sethumidityoff1: "",
    dialogVisibleOn1: false,
    dialogVisibleOff1: false,
    sethumidityon2: "",
    sethumidityoff2: "",
    dialogVisibleOn2: false,
    dialogVisibleOff2: false,
    settemperatureon: "",
    settemperatureoff: "",
    dialogTemperatureVisibleOn: false,
    dialogTemperatureVisibleOff: false,
    settemperatureon1: "",
    settemperatureoff1: "",
    dialogTemperatureVisibleOn1: false,
    dialogTemperatureVisibleOff1: false,
    settemperatureon2: "",
    settemperatureoff2: "",
    dialogTemperatureVisibleOn2: false,
    dialogTemperatureVisibleOff2: false
  };

   //************ Humidity **************//

  showDialogHumidityOn = () => {
    this.setState({ dialogVisibleOn: true });
  };

  showDialogHumidityOff = () => {
    this.setState({ dialogVisibleOff: true });
  };

  handleCancelOn = () => {
    this.setState({ dialogVisibleOn: false });
  };

  handleCancelOff = () => {
    this.setState({ dialogVisibleOff: false });
  };

  showDialogHumidityOn1 = () => {
    this.setState({ dialogVisibleOn1: true });
  };

  showDialogHumidityOff1 = () => {
    this.setState({ dialogVisibleOff1: true });
  };

  handleCancelOn1 = () => {
    this.setState({ dialogVisibleOn1: false });
  };

  handleCancelOff1 = () => {
    this.setState({ dialogVisibleOff1: false });
  };

  showDialogHumidityOn2 = () => {
    this.setState({ dialogVisibleOn2: true });
  };

  showDialogHumidityOff2 = () => {
    this.setState({ dialogVisibleOff2: true });
  };

  handleCancelOn2 = () => {
    this.setState({ dialogVisibleOn2: false });
  };

  handleCancelOff2 = () => {
    this.setState({ dialogVisibleOff2: false });
  };

  
  handleUpdateHumidityOn = () => {
    // To Update a user
 itemsRef.update({
     SetHumidityOn: this.state.sethumidityon
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogVisibleOn: false });
};

handleUpdateHumidityOff = () => {
   // To Update a user
 itemsRef.update({
     SetHumidityOff: this.state.sethumidityoff
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogVisibleOff: false });
};

handleUpdateHumidityOn1 = () => {
   // To Update a user
 itemsRef.update({
     SetHumidityOn1: this.state.sethumidityon1
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogVisibleOn1: false });
};

handleUpdateHumidityOff1 = () => {
 // To Update a user
 itemsRef.update({
     SetHumidityOff1: this.state.sethumidityoff1
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogVisibleOff1: false });
};

handleUpdateHumidityOn2 = () => {
     // To Update a user
   itemsRef.update({
       SetHumidityOn2: this.state.sethumidityon2
   });
     Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
     this.setState({ dialogVisibleOn2: false });
};

handleUpdateHumidityOff2 = () => {
   // To Update a user
   itemsRef.update({
       SetHumidityOff2: this.state.sethumidityoff2
   });
     Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
     this.setState({ dialogVisibleOff2: false });
};

  //************ Temperature **************//
  
  showDialogTemperatureOn = () => {
    this.setState({ dialogTemperatureVisibleOn: true });
  };

  showDialogTemperatureOff = () => {
    this.setState({ dialogTemperatureVisibleOff: true });
  };

  showDialogTemperatureOn1 = () => {
    this.setState({ dialogTemperatureVisibleOn1: true });
  };

  showDialogTemperatureOff1 = () => {
    this.setState({ dialogTemperatureVisibleOff1: true });
  };
  
  showDialogTemperatureOn2 = () => {
    this.setState({ dialogTemperatureVisibleOn2: true });
  };

  showDialogTemperatureOff2 = () => {
    this.setState({ dialogTemperatureVisibleOff2: true });
  };

  handleCancelTemperatureOn = () => {
    this.setState({ dialogTemperatureVisibleOn: false });
  };

  handleCancelTemperatureOff = () => {
    this.setState({ dialogTemperatureVisibleOff: false });
  };

  handleCancelTemperatureOn1 = () => {
    this.setState({ dialogTemperatureVisibleOn1: false });
  };

  handleCancelTemperatureOff1 = () => {
    this.setState({ dialogTemperatureVisibleOff1: false });
  };

  handleCancelTemperatureOn2 = () => {
    this.setState({ dialogTemperatureVisibleOn2: false });
  };

  handleCancelTemperatureOff2 = () => {
    this.setState({ dialogTemperatureVisibleOff2: false });
  };

handleUpdateTemperatureOn = () => {
    // To Update a user
 itemsRef.update({
     ZSetTemperatureOn: this.state.settemperatureon
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogTemperatureVisibleOn: false });
};

handleUpdateTemperatureOff = () => {
   // To Update a ZSetTemperatureOff
 itemsRef.update({
     ZSetTemperatureOff: this.state.settemperatureoff
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogTemperatureVisibleOff: false });
};

handleUpdateTemperatureOn1 = () => {
   // To Update a ZSetTemperatureOn1
 itemsRef.update({
     ZSetTemperatureOn1: this.state.settemperatureon1
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogTemperatureVisibleOn1: false });
};

handleUpdateTemperatureOff1 = () => {
 // To Update a user
 itemsRef.update({
     ZSetTemperatureOff1: this.state.settemperatureoff1
 });
   Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
   this.setState({ dialogTemperatureVisibleOff1: false });
};

handleUpdateTemperatureOn2 = () => {
     // To Update a user
   itemsRef.update({
       ZSetTemperatureOn2: this.state.settemperatureon2
   });
     Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
     this.setState({ dialogTemperatureVisibleOn2: false });
};

handleUpdateTemperatureOff2 = () => {
   // To Update a user
   itemsRef.update({
       ZSetTemperatureOff2: this.state.settemperatureoff2
   });
     Alert.alert('อัพเดทค่าเรียบร้อยแล้ว!')
     this.setState({ dialogTemperatureVisibleOff2: false });
};

  //***************************************//
  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <Container>
      <Header noShadow>
      
        <Body  style={{flex:1,alignItems: 'center'}}>
          <Title style={styles.title}>Monitoring System</Title>
        </Body>
   
      </Header>
      <Content>
      <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left style={styles.leftNoIndent}>
                <Text  style={styles.noIndent}>บ้าน 4 แยก</Text>
              </Left>
              <Right style={styles.rightNoIndent}>
              <Text>{this.state.items[21]}</Text>
              </Right>
      </ListItem>        
      <ListItem>
            <Text>เครื่องทำหมอก</Text>
            <Body>
            <Switch value={this.state.items[6]} />
            </Body>
      </ListItem> 
      <ListItem>
            <Text>ตัวดูดอากาศ</Text>
            <Body>
            <Switch value={this.state.items[24]} />
            </Body>
      </ListItem>      
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge success>
            <Text>ความชื้น</Text>
          </Badge>
        </Left>
        <Body style={styles.rightWide}>
          <Text> {this.state.items[0]} %</Text>
        </Body>
        <Right/>
      </ListItem>
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge info>
            <Text>อุณหภูมิ</Text>
          </Badge>
        </Left>
        <Body style={styles.rightWide}>
          <Text> {this.state.items[15]} °C</Text>
        </Body>
        <Right/>
      </ListItem>     
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge success>
            <Text>ความชื้นเปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[12]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOn}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOn}>
              <Dialog.Title>ค่าความชื้นเปิด</Dialog.Title>
              <Dialog.Input
                 autoFocus = {true}
                 style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                 keyboardType='numeric'
                 maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityon => this.setState({ sethumidityon })}
                 //value={String(this.state.items[12])}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOn} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOn} />
          </Dialog.Container>
        </Right>
      </ListItem>        
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge style={{ backgroundColor: '#c0c0c0' }}>
            <Text style={{ color: 'white' }}>ความชื้นปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[9]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOff}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOff}>
              <Dialog.Title>ค่าความชื้นปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityoff => this.setState({ sethumidityoff })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOff} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOff} />
          </Dialog.Container>          
        </Right>
      </ListItem>
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge info>
            <Text>อุณหภูมิเปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[30]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOn}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOn}>
              <Dialog.Title>ค่าอุณหภูมิเปิด</Dialog.Title>
              <Dialog.Input
                 autoFocus = {true}
                 style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                 keyboardType='numeric'
                 maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureon => this.setState({ settemperatureon })}
                 //value={String(this.state.items[12])}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOn} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOn} />
          </Dialog.Container>
        </Right>
      </ListItem>        
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge style={{ backgroundColor: '#c0c0c0' }}>
            <Text style={{ color: 'white' }}>อุณหภูมิปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[27]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOff}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOff}>
              <Dialog.Title>ค่าอุณหภูมิปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureoff => this.setState({ settemperatureoff })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOff} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOff} />
          </Dialog.Container>          
        </Right>
      </ListItem>
      <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left style={styles.leftNoIndent}>
                <Text  style={styles.noIndent}>บ้านห้องแถว</Text>
              </Left>
              <Right style={styles.rightNoIndent}>
              <Text>{this.state.items[22]}</Text>
              </Right>
      </ListItem>       
      <ListItem>
            <Text>เครื่องทำหมอก</Text>
            <Body>
            <Switch value={this.state.items[7]} />
            </Body>
      </ListItem>     
      <ListItem>
            <Text>ตัวดูดอากาศ</Text>
            <Body>
            <Switch value={this.state.items[25]} />
            </Body>
      </ListItem>         
      <ListItem>
      <Left style={styles.leftWide}>
        <Badge success>
          <Text>ความชื้น</Text>
        </Badge>
      </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[1]} %</Text>
        </Body>
        <Right/>
      </ListItem>
      <ListItem>
      <Left style={styles.leftWide}>
        <Badge info>
          <Text>อุณหภูมิ</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[16]} °C</Text>
        </Body>
        <Right/>
      </ListItem>     
      <ListItem>
      <Left style={styles.leftWide}>
        <Badge success>
          <Text>ความชื้นเปิด</Text>
        </Badge>
      </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[13]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOn1}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOn1}>
              <Dialog.Title>ค่าความชื้นเปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityon1 => this.setState({ sethumidityon1 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOn1} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOn1} />
          </Dialog.Container>
        </Right>
      </ListItem>        
      <ListItem>
        <Left  style={styles.leftWide}>
        <Badge style={{ backgroundColor: '#c0c0c0' }}>
          <Text style={{ color: 'white' }}>ความชื้นปิด</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[10]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOff1}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOff1}>
              <Dialog.Title>ค่าความชื้นปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                   backgroundColor: '#dde8c9',
                   padding:2,
                 }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityoff1 => this.setState({ sethumidityoff1 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOff1} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOff1} />
          </Dialog.Container>          
        </Right>
      </ListItem>  
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge info>
            <Text>อุณหภูมิเปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[31]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOn1}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOn1}>
              <Dialog.Title>ค่าอุณหภูมิเปิด</Dialog.Title>
              <Dialog.Input
                 autoFocus = {true}
                 style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                 keyboardType='numeric'
                 maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureon1 => this.setState({ settemperatureon1 })}
                 //value={String(this.state.items[12])}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOn1} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOn1} />
          </Dialog.Container>
        </Right>
      </ListItem>        
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge style={{ backgroundColor: '#c0c0c0' }}>
            <Text style={{ color: 'white' }}>อุณหภูมิปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[28]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOff1}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOff1}>
              <Dialog.Title>ค่าอุณหภูมิปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureoff1 => this.setState({ settemperatureoff1 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOff1} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOff1} />
          </Dialog.Container>          
        </Right>
      </ListItem>      
      <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
              <Left style={styles.leftNoIndent}>
                <Text  style={styles.noIndent}>บ้านโจ</Text>
              </Left>
              <Right style={styles.rightNoIndent}>
              <Text>{this.state.items[23]}</Text>
              </Right>
      </ListItem>       
      <ListItem>
            <Text>เครื่องทำหมอก</Text>
            <Body>
            <Switch value={this.state.items[8]} />
            </Body>
      </ListItem>      
      <ListItem>
            <Text>ตัวดูดอากาศ</Text>
            <Body>
            <Switch value={this.state.items[26]} />
            </Body>
      </ListItem>          
      <ListItem>
        <Left style={styles.leftWide}>
        <Badge success>
          <Text>ความชื้น</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[2]} %</Text>
        </Body>
        <Right/>
      </ListItem>
      <ListItem>
        <Left style={styles.leftWide}>
        <Badge info>
          <Text>อุณหภูมิ</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[17]} °C</Text>
        </Body>
        <Right/>
      </ListItem>     
      <ListItem>
        <Left style={styles.leftWide}>
        <Badge success>
          <Text>ความชื้นเปิด</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[14]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOn2}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOn2}>
              <Dialog.Title>ค่าความชื้นเปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                   backgroundColor: '#dde8c9',
                   padding:2,
                 }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityon2 => this.setState({ sethumidityon2 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOn2} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOn2} />
          </Dialog.Container>
        </Right>        
      </ListItem>        
      <ListItem>
      <Left style={styles.leftWide}>
        <Badge style={{ backgroundColor: '#c0c0c0' }}>
          <Text style={{ color: 'white' }}>ความชื้นปิด</Text>
        </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[11]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogHumidityOff2}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogVisibleOff2}>
              <Dialog.Title>ค่าความชื้นปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                   backgroundColor: '#dde8c9',
                   padding:2,
                 }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={sethumidityoff2 => this.setState({ sethumidityoff2 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelOff2} />
              <Dialog.Button label="OK" onPress={this.handleUpdateHumidityOff2} />
          </Dialog.Container>          
        </Right>        
      </ListItem>    
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge info>
            <Text>อุณหภูมิเปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[32]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOn2}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOn2}>
              <Dialog.Title>ค่าอุณหภูมิเปิด</Dialog.Title>
              <Dialog.Input
                 autoFocus = {true}
                 style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                 keyboardType='numeric'
                 maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureon2 => this.setState({ settemperatureon2 })}
                 //value={String(this.state.items[12])}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOn2} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOn2} />
          </Dialog.Container>
        </Right>
      </ListItem>        
      <ListItem>
        <Left style={styles.leftWide}>
          <Badge style={{ backgroundColor: '#c0c0c0' }}>
            <Text style={{ color: 'white' }}>อุณหภูมิปิด</Text>
          </Badge>
        </Left>
        <Body style={styles.bodyWide}>
          <Text> {this.state.items[29]} %</Text>
        </Body>
        <Right style={styles.rightWide}>
        <Button 
            onPress={this.showDialogTemperatureOff2}
            transparent>
                <Icon active name="settings" />
        </Button>
         <Dialog.Container visible={this.state.dialogTemperatureVisibleOff2}>
              <Dialog.Title>ค่าอุณหภูมิปิด</Dialog.Title>
              <Dialog.Input
                  autoFocus = {true}
                  style={{
                  backgroundColor: '#dde8c9',
                  padding:2,
                }}
                  keyboardType='numeric'
                  maxLength={2}  //setting limit of input
                 label = "ป้อนค่า 0-100"
                 onChangeText={settemperatureoff2 => this.setState({ settemperatureoff2 })}
              />
              <Dialog.Button label="Cancel" onPress={this.handleCancelTemperatureOff2} />
              <Dialog.Button label="OK" onPress={this.handleUpdateTemperatureOff2} />
          </Dialog.Container>          
        </Right>
      </ListItem>      
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  leftWide:{
    flex:0.4,
  },
  bodyWide:{
    flex:0.3,
  },
  rightWide:{
    flex:0.3,
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  noIndent: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#333333',
    textAlign: 'left',
    margin: 0,
  },
  leftNoIndent:{
    flex:0.5,
  },
  rightNoIndent:{
    flex:0.5,
  },
  separator: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#333333',
    textAlign: 'left',
    margin: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
