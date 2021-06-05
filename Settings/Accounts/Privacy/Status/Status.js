import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Status extends Component {
	constructor() {
        super();
            this.state = {
                // About
                    aboutStatus: 'My contacts',
        }
    }
	state = {
        // ABOUT
            aboutshow: false,
            aboutModalVisible: false,
	};
	// About
    setAboutModalVisible = (visible) => {
		this.setState({ aboutModalVisible: visible });
	};
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		// status
		const { aboutModalVisible } = this.state;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent 
							onPress={()=>{navigate('Privacy', {
								status:' this.state.aboutStatus'
							})}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Status privacy</Title>
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
								<Text style={{fontSize:18,color:"#075E54",marginBottom:5}}>Who can see my status updates</Text>
							</Body>
						</ListItem>
						<ListItem avatar noBorder button onPress={() => {this.setState({ aboutStatus: 'My contacts' });this.setAboutModalVisible(!aboutModalVisible);}}>
							<Left>
								<Radio
									onPress={() => {this.setAboutModalVisible(!aboutModalVisible);this.setState({ aboutStatus: 'My contacts' });}}
									color={"#808080"}
									selectedColor={"#075E54"}
									selected={this.state.aboutStatus == 'My contacts'}
								/>
							</Left>
							<Body>
								<Text style={{fontSize:17}}>My contacts</Text>
							</Body>
						</ListItem>
						<ListItem avatar noBorder button onPress={() => {navigate('Except');this.setState({ aboutStatus: 'My contacts except . . .' });this.setAboutModalVisible(!aboutModalVisible);}}>
							<Left>
								<Radio
									onPress={() => {this.setState({ aboutStatus: 'My contacts except . . .' });this.setAboutModalVisible(!aboutModalVisible);}}
									color={"#808080"}
									selectedColor={"#075E54"}
									selected={this.state.aboutStatus == 'My contacts except . . .'}
								/>
							</Left>
							<Body>
								<Text style={{fontSize:17}}>My contacts except . . .</Text>
							</Body>	
                        </ListItem>
						<ListItem avatar noBorder button onPress={() => {this.setState({ aboutStatus: 'Only share with . . .' });this.setAboutModalVisible(!aboutModalVisible);}}>
							<Left>
								<Radio
									onPress={() => {this.setState({ aboutStatus: 'Only share with . . .' });this.setAboutModalVisible(!aboutModalVisible);}}
									color={"#808080"}
									selectedColor={"#075E54"}
									selected={this.state.aboutStatus == 'Only share with . . .'}
								/>
							</Left>
							<Body>
								<Text style={{fontSize:17}}>Only share with . . .</Text>
							</Body>
                        </ListItem>
				</ScrollView>
					<Button full light style={{backgroundColor:"#075E54"}} 
						onPress={()=>{navigate('Privacy', {
							status: this.state.aboutStatus
					})}}>
                    <Text style={{color:"#ffffff"}}>DONE</Text>
                </Button>
			</Container>
		);
	}
}