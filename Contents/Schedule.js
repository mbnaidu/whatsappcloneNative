import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Schedule extends Component {
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
		show:false,
	};
	setShow = () =>{
		this.setState({show:!this.state.show})
	}
	swapModals = () =>{
		this.setState({
			modalVisible2: true,
		});
	}
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
		const {show} = this.state;
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<>
				{show ? (<>
				<Container style={{backgroundColor:"#"}}>
					<Header style={styles.headerBackgroundColor} >
						<Left>
							<Button transparent onPress={()=>{this.setShow()}}>
								<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#ffffff"}}/>
							</Button>
						</Left>
						<Body>
							<Text style={{color:"#ffffff",fontSize:18,fontWeight:"bold"}}>Quick Schedule</Text>
						</Body>
						<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}} />
						</Button>
					</Right>
					</Header>
					<ListItem noBorder button>
						<Item stackedLabel>
                            <Icon name='message1' type="AntDesign" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>Message</Label>
                            <Input placeholder="Enter your message here . . ."/>
                        </Item>
					</ListItem>
					<ListItem noBorder button>
						<Item stackedLabel>
                            <Icon name='contacts' type="AntDesign" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>Contact</Label>
                            <Input placeholder="Enter Contact Details"/>
                        </Item>
					</ListItem>
					<View>
						<Item picker>
							<Text>       Contains :    </Text>
								<Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined,height: 50}}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected3}
                                    onValueChange={this.onValueChange3.bind(this)}
                                >
                                    <Picker.Item label="Starts with" value="key0" />
                                    <Picker.Item label="Contains" value="key1" />
                                    <Picker.Item label="Ends with" value="key2" />
								</Picker>
						</Item>
					</View>
					<Fab position="bottomRight" style={{backgroundColor:"#075E54"}}>
						<Icon name="check" type="MaterialIcons" style={{fontSize:28}} onPress={()=>{this.setShow()}}/>
					</Fab>
				</Container>
			</>) : (
			<Container >
				<Header style={styles.headerBackgroundColor} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Scheduled Messages</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28}} />
						</Button>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}} />
						</Button>
					</Right>
				</Header>
				<Container>
					<ScrollView vertical={true}>
						<ListItem style={{backgroundColor:"#075E54",margin:30}}  transparent >
                            <Button transparent>
                                <Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#ffffff"}}/>
                            </Button>
                            <Body>
                                <Title>Reminder 1</Title>
                                <Text style={{color:"#ffffff"}}>Wednesday March 21 2020 </Text>
                            </Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#075E54",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#ffffff"}}/>
							</Button>
							<Body>
								<Title>Reminder 2</Title>
								<Text style={{color:"#ffffff"}}>Today</Text>
							</Body>
						</ListItem>
					</ScrollView>
				</Container>
				<Fab position="bottomRight" style={{backgroundColor:"#075E54"}}>
					<Icon name="add" type="MaterialIcons" button onPress={()=>{this.setShow()}}/>
				</Fab>
			</Container>
				)}
			</>
		);
	}
}