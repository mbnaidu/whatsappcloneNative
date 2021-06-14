import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Item, Input, Fab, View, ListItem, Picker, Label } from 'native-base';
import { StatusBar, Text,Image } from 'react-native';
import styles from '../Styles/First';

export default class QuickReminder extends Component {
	state = {
        selected: undefined,
	};
	onValueChange(value) {
		this.setState({
            selected: value
		});
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
				<Container style={{backgroundColor:"#"}}>
					<Header style={styles.headerBackgroundColor} >
						<Left>
							<Button transparent onPress={()=>{navigate('Reminder')}}>
								<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
						</Left>
						<Body>
							<Text onPress={()=>{navigate('Reminder')}} style={{color:"#000000",fontSize:18,fontWeight:"bold"}}>Quick Reminder</Text>
						</Body>
						<Right>
							<Button transparent>
								<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
							</Button>
						</Right>
					</Header>
					<ListItem noBorder button>
						<Item stackedLabel>
                            <Icon name='tasks' type="FontAwesome5" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>What is to be done . . .?</Label>
                            <Input placeholder="Enter Task or Reminder"/>
                        </Item>
					</ListItem>
					<ListItem noBorder button>
						<Item stackedLabel>
                            <Icon name='calendar-times' type="FontAwesome5" style={{fontSize: 28}}/>
                            <Label style={{fontWeight:"bold"}}>Due date</Label>
                            <Input placeholder="Enter due date"/>
                        </Item>
					</ListItem>
					<View>
						<Item picker>
							<Text>       Add to list :    </Text>
								<Picker
									mode="dropdown"
									iosIcon={<Icon name="arrow-down" />}
									style={{ width: undefined,height: 50}}
									placeholder="Select your SIM"
									placeholderStyle={{ color: "#bfc6ea" }}
									placeholderIconColor="#007aff"
									selectedValue={this.state.selected}
									onValueChange={this.onValueChange.bind(this)}
								>
									<Picker.Item label="Personal" value="key0" />
									<Picker.Item label="Shopping" value="key1" />
									<Picker.Item label="Work" value="key2" />
								</Picker>
						</Item>
					</View>
					<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigate('Reminder')}}>
						<Icon name="check" type="MaterialIcons" style={{fontSize:28,color:"#000000"}}  onPress={()=>{navigate('Reminder')}}/>
					</Fab>
				</Container>
		);
	}
}