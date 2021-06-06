import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../../Styles/First';



export default class NewNumber extends Component {
	state = {
        selected2: undefined,
	};
	onValueChange2(value) {
		this.setState({
		selected2: value
		});
	}
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Change')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Change')}}>Change number</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<Body>
					<Header noLeft style={styles.newcontactheader} noBorder>
						<Item stackedLabel>
                            <Icon name='call' type="MaterialIcons" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>Old Contact</Label>
                            <Input placeholder="Old Contact Number"/>
                        </Item>
                    </Header>
					<Header noLeft style={styles.newcontactheader} noBorder>
						<Item stackedLabel>
                            <Icon name='call' type="MaterialIcons" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>New Contact</Label>
                            <Input placeholder="New Contact Number"/>
                        </Item>
                    </Header>
				</Body>
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('Change')}}>
                    <Text style={{color:"#ffffff",letterSpacing:3}}>NEXT</Text>
                </Button>
			</Container>
		);
	}
}