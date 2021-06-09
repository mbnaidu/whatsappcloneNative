import React, { Component, useEffect, useRef, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Thumbnail, Footer,Content, Fab, View, ListItem, Item, Label, Input, Badge } from 'native-base';
import { StatusBar, Text, TextInput,Image, Modal, TouchableWithoutFeedback, ScrollView, FlatList, SafeAreaView } from 'react-native';
import styles from '../Styles/Second';
import axios from 'axios'
import { useNavigation } from '@react-navigation/core';


export default function ChatPage({route}) {
    const [modalVisible,setModalVisible] = useState(false);
    const [modalVisible2,setModalVisible2] = useState(false)
    const navigation = useNavigation();
    const [online,setOnline] = useState(true);
	const [username,setUsername] = useState('')
    const [plane,setPlane] = useState(true);
    const [entypo,setEntypo] = useState(true);
    const scrollViewRef = useRef();
    const [message,setMessage] = useState('');
    const [curHour,setCurHour] = useState('');
    const [curMin,setCurMin] = useState('');
    const [curStatus,setCurStatus] = useState('');
    const [curSec,setCurSec] = useState('');
	const [userId,setUserId] = useState(route.params.userId);
	const [chatId,setChatId] = useState('');
    const [messages,setMessages] = useState([
        {message:"hi",id:"2131",time:"7:00 PM"}
    ])
	// useEffect(() => {
	// 	const data = {
	// 		senderId : route.params.senderId,
	// 		userId :userId,
	// 	} 
	// 	axios.post('http://192.168.43.212:5000/getChat', {data}).then(
    //             function(res) {
    //                 if(res.data) {
	// 					setChatId(res.data[0]._id)
    //                 }
    //             }
    //         )
	// },[])
    // useEffect(() => {
    //     setInterval(function(){
	// 		const data1 = {
	// 		senderId : route.params.senderId,
	// 		userId :userId,
	// 	} 
	// 	axios.post('http://192.168.43.212:5000/getChat', {data1}).then(
    //             function(res) {
    //                 if(res.data) {
	// 					setChatId(res.data[0]._id);
	// 					setMessages(res.data[0].messages)
    //                 }
    //             }
    //         )
	// 		var a = new Date().getHours();
	// 		if(a >= 12){
    //             setCurStatus("PM");
    //             setCurSec(new Date().getMilliseconds());
    //             setCurMin(new Date().getMinutes(),);
    //             setCurHour(a-12);
	// 		}
	// 		else{
	// 			setCurStatus("AM");
    //             setCurSec(new Date().getMilliseconds());
    //             setCurMin(new Date().getMinutes(),);
    //             setCurHour(a);
	// 		}
	// 	}.bind(this), 1000);
    // }, [])
    const sendData = () =>{
		// const data = {
		// 	senderId : route.params.senderId,
		// 	messageId : curHour+curMin+curSec+message,
		// 	message: message,
		// 	time:curHour+":"+curMin+" "+curStatus,
		// 	userId :userId,
		// } 
		// axios.post('http://192.168.43.212:5000/addMessage', {data}).then(
        //         function(res) {
        //             if(res.data.length == 0) {
		// 				console.log(res.data)
        //             }
        //         }
        //     )
		const data1 = {
			senderId : route.params.senderId,
			userId :userId,
		} 
		axios.post('http://192.168.43.212:5000/getChat', {data1}).then(
                function(res) {
                    if(res.data) {
						const data = {
							chatId:res.data[0]._id,
							message: { 
								message:message,
								messageId: curHour+curMin+curSec+message,
								senderId : route.params.senderId,
								userId :userId,
								time:curHour+":"+curMin+" "+curStatus,
							},
						} 
						axios.post('http://192.168.43.212:5000/addMessage', {data}).then(
								function(res) {
									if(res.data) {
										setMessage('')
									}
								}
							)
                    }
                }
            )
	}
    StatusBar.setBackgroundColor('#128C7E',true);
    return (
        <Container>
				<Header style={styles.headerBackgroundColor} button>
					<Left>
						<Button transparent onPress={()=>{navigation.navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
							<Thumbnail
								style={{width: 45, height: 45,}}
								source={{uri:'data:image/jpeg;base64,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'}}
							>
							</Thumbnail>
						</Button>
					</Left>
					<Body style={styles.chatBody}>
						<ListItem noBorder button onPress={()=>{navigation.navigate('BioPage')}}>
							<View>
								<Text style={styles.chatBodyTextHeading1}>
									Username
								</Text>
							<View>
								<Text style={styles.chatBodyTextHeading2}>
									Active now
								</Text>
							</View>
						</View>
						</ListItem>
					</Body>
					<Right>
						<Button transparent>
							<Thumbnail
								style={{width: 35, height: 35,}}
								source={require('../Assets/pigeon.png')}
							>
							</Thumbnail>
						</Button>
						<Button transparent>
							<Icon name='search' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}} onPress={()=>{setModalVisible(!modalVisible)}}/>
							<View style={styles.centeredView}>
								<Modal
								animationType="fade"
								transparent={true}
								visible={modalVisible}
								onRequestClose={() => {
									setModalVisible(!modalVisible);
								}}
								>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<ListItem noBorder button onPress={() => setModalVisible(!modalVisible)}>
											<Text style={styles.textStyle}>View contact</Text>
										</ListItem>
										<ListItem noBorder button onPress={()=>{setModalVisible(!modalVisible);navigation.navigate('MediaPage')}}>
											<Text style={styles.textStyle}>Media, links, and docs</Text>
										</ListItem>
										<ListItem noBorder button onPress={() => setModalVisible(!modalVisible)}>
											<Text style={styles.textStyle}>Search</Text>
										</ListItem>
										<ListItem noBorder button onPress={() => setModalVisible(!modalVisible)}>
											<Text style={styles.textStyle}>Unmute notifications</Text>
										</ListItem>
										<ListItem noBorder button onPress={() => setModalVisible(!modalVisible)}>
											<Text style={styles.textStyle}>Wallpaper</Text>
										</ListItem>
										<ListItem noBorder button onPress={() => {swapModals();setModalVisible2(!modalVisible2)}}>
											<Left>
												<Text style={styles.textStyle}>More</Text>
											</Left>
										<Right>
											<Icon name="arrow-right" type="MaterialIcons" style={styles.moreIcon}/>
										<View style={styles.centeredView}>
											<Modal
											animationType="fade"
											transparent={true}
											visible={modalVisible2}
											onRequestClose={() => {
												setModalVisible2(!modalVisible2);
											}}
											>
											<View style={styles.centeredView}>
												<View style={styles.modalView}>
													<ListItem noBorder button onPress={() => setModalVisible2(!modalVisible2)}>
														<Text style={styles.textStyle}>Report</Text>
													</ListItem>
													<ListItem noBorder button onPress={() => setModalVisible2(!modalVisible2)}>
														<Text style={styles.textStyle}>Block</Text>
													</ListItem>
													<ListItem noBorder button onPress={() => setModalVisible2(!modalVisible2)}>
														<Text style={styles.textStyle}>Clear chat</Text>
													</ListItem>
													<ListItem noBorder button onPress={() => setModalVisible2(!modalVisible2)}>
														<Text style={styles.textStyle}>Export chat</Text>
													</ListItem>
													<ListItem noBorder button onPress={() => setModalVisible2(!modalVisible2)}>
														<Text style={styles.textStyle}>Add shortcut</Text>
													</ListItem>
												</View>
											</View>
											</Modal>
										</View>
										</Right>
										</ListItem>
									</View>
								</View>
								</Modal>
							</View>
						</Button>
					</Right>
				</Header>
                <View>
                    <ScrollView horizontal={true} style={{backgroundColor:"snow"}}>
					<Header noLeft style={styles.chatPageSecondHeader} noBorder>
						{online ? (
							<Button transparent onPress={() =>{setOnline(!online)}}>
								<Icon name="lightbulb" type="MaterialCommunityIcons" style={{fontSize: 30,color:"white",marginBottom: 10,marginBottom: 10}}/>
							</Button>
							) : (
							<Button transparent onPress={() =>{setOnline(!online)}}>
								<Icon name="lightbulb-off" type="MaterialCommunityIcons" style={{fontSize: 30,color:"grey",marginBottom: 10}}/>
							</Button>
						)}
						{plane ? (
							<Button transparent onPress={() =>{setPlane(!plane)}}>
								<Icon name="plane" type="FontAwesome5" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
							</Button>
							) : (
							<Button transparent onPress={() =>{setPlane(!plane)}}>
								<Icon name="plane-slash" type="FontAwesome5" style={{fontSize: 30,color:"grey",marginBottom: 10}}/>
							</Button>
						)}
						<Button transparent>
							<Icon name="call" type="MaterialIcons" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
						</Button>
						<Button transparent>
							<Icon name='videocam' type="MaterialIcons" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
						</Button>
						{entypo ? (
							<Button transparent onPress={() =>{setEntypo(!entypo)}}>
								<Icon name="pin" type="Entypo" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
							</Button>
							) : (
							<Button transparent onPress={() =>{setEntypo(!entypo)}}>
								<Icon name="pin" type="Entypo" style={{fontSize: 30,color:"grey",marginBottom: 10}}/>
							</Button>
						)}
						<Button transparent>
							<Icon name="account-edit" type="MaterialCommunityIcons" style={{fontSize: 32,color:"white",marginBottom: 10}}/>
						</Button>
						<Button transparent>
							<Icon name="delete-alert" type="MaterialCommunityIcons" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
						</Button>
						<Button transparent >
							<Icon name="history" type="MaterialCommunityIcons" style={{fontSize: 30,color:"white",marginBottom: 10}}/>
						</Button>
					</Header>
				</ScrollView>
                </View>
				<ScrollView 
					vertical={true}
					style={{backgroundColor:"snow"}}
					ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
					{messages.map((m=>{
						return(
							<View key={m.key}>
								{m.userId == userId ? (
									<Body style={[styles.messageSenderBox]}>
										<Text style={{fontWeight:"bold"}}>{m.message}</Text>
										<Text note style={{fontSize:12,marginLeft:5,alignSelf:'flex-end'}}>{m.time}<Icon name="loader" type="Feather" style={{fontSize: 11,fontWeight:"bold"}}/></Text>
									</Body>
								) : (
									<Body style={[styles.messageUserBox]}>
										<Text style={{fontWeight:"bold"}}>{m.message}</Text>
										<Text note style={{fontSize:12,marginLeft:5,alignSelf:'flex-end'}}>{m.time}</Text>
									</Body>
								)}
							</View>
						)
					}))}
				</ScrollView>
                {message.length == 0 ? (
					<Footer style={{backgroundColor:"snow"}}>
						<View style={styles.searchSection}>
							<Icon style={styles.emojiicon} name="emoji-emotions" type="MaterialIcons"/>
							<TextInput
								style={styles.input}
								placeholder="Type a message"
								onChangeText={(searchString) => {setMessage(searchString)}}
								underlineColorAndroid="transparent"
							/>
							<Icon name="paperclip" type="Foundation" style={styles.emojiicon}/>
							<Icon name="camera" type="Ionicons" style={styles.emojiicon}/>
						</View>
							<Button transparent>
								<Icon name="keyboard-voice" type="MaterialIcons" style={styles.voiceIcon}/>
							</Button>
					</Footer>
				) : (
					<Footer style={{backgroundColor:"snow"}}>
						<View style={styles.searchSection}>
							<Icon style={styles.emojiicon} name="emoji-emotions" type="MaterialIcons"/>
							<TextInput
								style={styles.input}
								multiline
								defaultValue={message}
								onChangeText={(searchString) => {setMessage(searchString);}}
								underlineColorAndroid="transparent"
							/>
							<Right>
								<Icon name="paperclip" type="Foundation" style={styles.emojiicon}/>
							</Right>
						</View>
							<Button transparent onPress={() =>{sendData();}}>
								<Icon name="send" type="MaterialIcons" style={styles.onSendEmoji} />
							</Button>
					</Footer>
				)}
            </Container>
    )
}
