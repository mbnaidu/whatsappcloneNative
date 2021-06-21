import React, { Component, useEffect, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon,Item, Input, Fab, View, ListItem, Thumbnail, Label } from 'native-base';
import { Platform, Text} from 'react-native';
import styles from '../Styles/First';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function QuickSchedule({navigation,route}) {
	var presentYear = new Date().getFullYear();
	var presentMonth = new Date().getMonth();
	var presentDate = new Date().getDate();
	const [message,setMessage] = useState(null);
	const [chatId,setChatId] = useState(null);
	React.useEffect(() => {
		const data = {
			number : '+91 91210 55809',
		} 
		axios.post('http://192.168.29.85:5000/messagecheck', {data}).then(
                function(res) {
                    if(res.data) {
						setTo(res.data._id);
						setFrom(route.params.senderid)
                    }
                }
            )
	},[]);
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [sendDate,setSendDate] = useState(null);
	const [sendTime,setSendTime] = useState(null);
	const [from,setFrom] = useState(null);
	const [to,setTo] = useState(null);
	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
		setSendTime(currentDate.getHours()+":"+currentDate.getMinutes())
		setSendDate(currentDate.getDate()+ "-"+(currentDate.getMonth()+1)+ "-"+currentDate.getFullYear());
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};
	const sendSpecialMessage = () => {
		const data = {
			from:from,
			to:to,
			special: { 
				message:message,
				date:sendDate,
				time:sendTime,
				from:from,
				to:to
			},
		} 
		axios.post('http://192.168.29.85:5000/setspecialmessagefrom', {data}).then(
			function(res) {
				if(res.data) {
					axios.post('http://192.168.29.85:5000/setspecialmessageto', {data}).then(
						function(res) {
							if(res.data) {
								navigation.navigate('Schedule')
							}
						}
					)
				}
			}
		)
	}
	return (
		<Container style={{backgroundColor:"#"}}>
			<Header style={styles.headerBackgroundColor} >
				<Left>
					<Button transparent onPress={()=>{navigation.navigate('Schedule')}}>
						<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#000000"}}/>
					</Button>
				</Left>
				<Body>
					<Text style={{color:"#000000",fontSize:18,fontWeight:"bold"}}  onPress={()=>{navigation.navigate('Schedule')}}>Quick Schedule</Text>
				</Body>
				<Right>
					<Button transparent>
						<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28,color:"black"}} />
					</Button>
				</Right>
			</Header>
			<ListItem noBorder button>
				<Item stackedLabel>
					<Icon name='message1' type="AntDesign" style={{fontSize: 28}}/>
					<Label style={{fontWeight:"bold"}}>Message</Label>
					<Input 
						placeholder="Enter your message here . . ."
						multiline
						onChangeText={(searchString) => {setMessage(searchString);}}
						underlineColorAndroid="transparent"
						value={message}
					/>
                </Item>
            </ListItem>
			<ListItem noBorder button>
				<Icon name='calendar-clock' type="MaterialCommunityIcons" style={{fontSize: 32}}/>
				<Body style={{alignItems: "center"}} onPress={showDatepicker}>
					<Text style={{letterSpacing:3,fontWeight:"bold",fontSize: 18}} onPress={showDatepicker}>{sendDate !== null ? sendDate : 'Set Upcoming Dates !'}</Text>
				</Body>
			</ListItem>
			<ListItem noBorder button>
				<Icon name='timer-sand' type="MaterialCommunityIcons" style={{fontSize: 32}}/>
				<Body style={{alignItems: "center"}} transparent onPress={showTimepicker}>
					<Text style={{letterSpacing:3,fontWeight:"bold",fontSize: 18}} transparent onPress={showTimepicker}>{sendTime !== null ? sendTime : 'Set Time!'}</Text>
				</Body>
			</ListItem>
			{show && (
				<DateTimePicker
				testID="dateTimePicker"
				value={date}
				mode={mode}
				minimumDate={new Date(presentYear, presentMonth, presentDate)}
				is24Hour={true}
				display="default"
				onChange={onChange}
				/>
			)}
			<Fab position="bottomRight" style={{backgroundColor:"#05F8EC"}} onPress={()=>{sendSpecialMessage()}}>
				<Icon name="send" type="MaterialIcons" style={{fontSize:28,color:"#000000"}}/>
			</Fab>
		</Container>
		);
}
