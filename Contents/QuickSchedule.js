import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon,Item, Input, Fab, View, ListItem, Picker, Label } from 'native-base';
import { StatusBar, Text} from 'react-native';
import styles from '../Styles/First';

export default class QuickSchedule extends Component {
	state = {
        contains: undefined,
		show:false,
	};
	setShow = () =>{
		this.setState({show:!this.state.show})
	}
	onValueChange(value) {
		this.setState({
		contains: value
		});
	}
	render() {
		const {show} = this.state;
		const { navigate } = this.props.navigation;
		return (
				<Container style={{backgroundColor:"#"}}>
					<Header style={styles.headerBackgroundColor} >
						<Left>
							<Button transparent onPress={()=>{navigate('Schedule')}}>
								<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#ffffff"}}/>
							</Button>
						</Left>
						<Body>
							<Text style={{color:"#ffffff",fontSize:18,fontWeight:"bold"}}  onPress={()=>{navigate('Schedule')}}>Quick Schedule</Text>
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
                                    selectedValue={this.state.contains}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Starts with" value="key0" />
                                    <Picker.Item label="Contains" value="key1" />
                                    <Picker.Item label="Ends with" value="key2" />
								</Picker>
						</Item>
					</View>
					<Fab position="bottomRight" style={{backgroundColor:"#075E54"}}  onPress={()=>{navigate('Schedule')}}>
						<Icon name="check" type="MaterialIcons" style={{fontSize:28}}/>
					</Fab>
				</Container>
		);
	}
}