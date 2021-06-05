import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Accounts extends Component {
    constructor(props) {
		super(props);
		this.state = { chosenDate: new Date() };
		this.setDate = this.setDate.bind(this);
	}
	state = {
        selected2: undefined,
		selected: undefined,
		selected3: undefined,
		selected4: undefined,
	};
	onValueChange(value) {
		this.setState({
		selected: value
		});
	}
    onValueChange2(value) {
		this.setState({
		selected2: value
		});
	}
	onValueChange3(value) {
		this.setState({
		selected3: value
		});
	}
	onValueChange4(value) {
		this.setState({
		selected4: value
		});
	}
    setDate(newDate) {
		this.setState({ chosenDate: newDate });
	}
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
                        <Title>Accounts</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
					<ScrollView>
                    <ListItem avatar noBorder button onPress={() =>{navigate('Privacy')}}>
                        <Left>
                            <Button transparent onPress={()=>{navigate('Privacy')}}>
                                <Icon name='security' type="MaterialIcons" style={{fontSize: 28,color:"#075E54"}}/>
                            </Button>
                        </Left>
                        <Body style={{marginTop:10}}>
                            <Text style={{fontSize:18}}>Privacy</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button onPress={() =>{navigate('Verification')}}>
                        <Left>
                            <Button transparent onPress={()=>{navigate('Verification')}}>
                                <Icon name='verified-user' type="MaterialIcons" style={{fontSize: 28,color:"#075E54"}}/>
                            </Button>
                        </Left>
                        <Body style={{marginTop:10}}>
                            <Text style={{fontSize:18}}>Two-step verification</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button onPress={() =>{navigate('Change')}}>
                        <Left>
                            <Button transparent onPress={()=>{navigate('Change')}}>
                                <Icon name='exchange' type="FontAwesome" style={{fontSize: 28,color:"#075E54"}}/>
                            </Button>
                        </Left>
                        <Body style={{marginTop:10}}>
                            <Text style={{fontSize:18}}>Change number</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button onPress={() =>{navigate('Delete')}}>
                        <Left>
                            <Button transparent onPress={()=>{navigate('Delete')}}>
                                <Icon name='delete-alert' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#075E54"}}/>
                            </Button>
                        </Left>
                        <Body style={{marginTop:10}}>
                            <Text style={{fontSize:18}}>Delete my account</Text>
                        </Body>
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}