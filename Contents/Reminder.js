import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Reminder extends Component {
	state = {
        selected: undefined,
	};
	onValueChange(value) {
		this.setState({
			selected: value
		});
	}
	render() {
		const {show} = this.state;
		const { navigate } = this.props.navigation;
		return (
			<Container >
				<Header style={styles.headerBackgroundColor} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Chat')}} style={{color:"black"}}>All Reminders</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28,color:"black"}} />
						</Button>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28,color:"black"}} />
						</Button>
					</Right>
				</Header>
				<Container>
					<ScrollView vertical={true}>
						<Item picker style={{marginTop:6,marginLeft:30}}>
							<Picker
								mode="dropdown"
								iosIcon={<Icon name="arrow-down" />}
								style={{ width: undefined,height: 50}}
								placeholder="Select your format"
								placeholderStyle={{ color: "#bfc6ea" }}
								placeholderIconColor="#007aff"
								selectedValue={this.state.selected}
								onValueChange={this.onValueChange.bind(this)}
							>
								<Picker.Item label="Default" value="key0" />
								<Picker.Item label="Personal" value="key1" />
								<Picker.Item label="Shopping" value="key2" />
								<Picker.Item label="Work" value="key3" />
								<Picker.Item label="Finished" value="key4" />
							</Picker>
						</Item>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 1</Title>
								<Text style={{color:"#000000"}}>Wednesday March 21 2020 </Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 2</Title>
								<Text style={{color:"#000000"}}>Today</Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 1</Title>
								<Text style={{color:"#000000"}}>Wednesday March 21 2020 </Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 2</Title>
								<Text style={{color:"#000000"}}>Today</Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 1</Title>
								<Text style={{color:"#000000"}}>Wednesday March 21 2020 </Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 2</Title>
								<Text style={{color:"#000000"}}>Today</Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 1</Title>
								<Text style={{color:"#000000"}}>Wednesday March 21 2020 </Text>
							</Body>
						</ListItem>
						<ListItem style={{backgroundColor:"#05F8EC",margin:30}}  transparent >
							<Button transparent>
								<Icon name='delete-forever' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
							<Body>
								<Title style={{color:"#000000"}}>Reminder 2</Title>
								<Text style={{color:"#000000"}}>Today</Text>
							</Body>
						</ListItem>
					</ScrollView>
				</Container>
				<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigate('QuickReminder')}}>
					<Icon name="add" type="MaterialIcons" style={{fontSize: 28,color:"#000000"}} button onPress={()=>{navigate('QuickReminder')}}/>
				</Fab>
			</Container>
		);
	}
}