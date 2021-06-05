import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Help extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Settings')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Help</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                <Icon name='help' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:18,color:"#075E54",fontWeight:"bold"}}>Help center</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                    <Icon name='persons' type="Fontisto" style={{fontSize: 28,color:"#128C7E"}}/>
                                </Button>
                            </Left>
                        <Body>
                            <Text style={{fontSize:18,color:"#075E54",fontWeight:"bold"}}>Contact us</Text>
                            <Text note>Questions? Need help?</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                <Icon name='file-contract' type="FontAwesome5" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 18,color:"#075E54",fontWeight:"bold"}}>Terms and Privacy policy</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}}>
                        <Left>
                            <Button transparent>
                                <Icon name='info' type="Octicons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 18,color:"#075E54",fontWeight:"bold"}}>App Info</Text>
                        </Body>
					</ListItem>
                </ScrollView>
			</Container>
		);
	}
}