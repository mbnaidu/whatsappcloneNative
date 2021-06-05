import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Except extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Status')}}>
							<Icon name='close' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Hide status from ...</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
                        <Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
					<ScrollView>
                        <ListItem noBorder button>
                            <Item stackedLabel>
                                <Icon name='person' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Contact</Label>
                                <Input placeholder="Enter contact name"/>
                            </Item>
                        </ListItem>
				</ScrollView>
                <Fab position="bottomRight" style={{backgroundColor:"#25D366"}} onPress={()=>{navigate('Status')}}>
					<Icon name="check" type="MaterialIcons"/>
				</Fab>
			</Container>
		);
	}
}