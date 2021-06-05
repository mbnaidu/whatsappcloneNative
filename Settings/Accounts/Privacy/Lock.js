import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Lock extends Component {
	constructor(props) {
        super(props);
        this.state = {
			isEnabled:false,
        };
    }
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Privacy')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Fingerprint lock</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
					<ListItem avatar noBorder button style={{marginTop:10}}>
						<Body >
							<Text style={{fontSize:18,color:"#075E54",marginBottom:5}}>Unlock with fingerprint</Text>
							<Text note >When enabled, you'll need to use {`\n`} fingerprint to open Piegon. You can still{`\n`}answer calls if Piegeon is locked.</Text>
						</Body>
						<Right>
							<Switch
								trackColor={{false:'#767577', true:"#128C7E"}}
								thumbColor={this.state.isEnabled ? '#075E54' : "#767577"}
								value={this.state.isEnabled}
								onChange={this.call}
							>
							</Switch>
						</Right>
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}