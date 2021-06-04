import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, TabHeading, Badge, Thumbnail, ListItem, Fab, View, Card, CardItem, Item, Picker, Form, Label, Input, DatePicker } from 'native-base';
import { ScrollView, StatusBar, Text,Image, Modal } from 'react-native';
import styles from '../Styles/First';
import Calls from '../Screens/Calls';
import Status from '../Screens/Status';

export default class Home extends Component {
	constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
	state = {
		modalVisible: false,
		modalVisible2: false,
		searchmodalvisible:false,
		selected2: undefined,
		selected: undefined,
		selected3: undefined,
		selected4: undefined,
		search:false,
		contact:false,
		aeroplanemode:false,
	};
	setDate(newDate) {
		this.setState({ chosenDate: newDate });
	}
	setAeroplanemode = () =>{
		this.setState({aeroplanemode:!this.state.aeroplanemode})
	}
	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	};
	setModalVisible2 = (visible) => {
		this.setState({ modalVisible2: visible });
	};
	setSearch = () =>{
		this.setState({search:!this.state.search})
	}
	setSearchModalVisible = (visible) => {
		this.setState({ searchmodalvisible: visible });
	};
	onValueChange2(value) {
		this.setState({
		selected2: value
		});
	}
	setContact = () =>{
		this.setState({contact:!this.state.contact})
	}
	onValueChange(value) {
		this.setState({
		selected: value
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
	render() {
		const { modalVisible } = this.state;
		const { modalVisible2 } = this.state;
		const { searchmodalvisible } = this.state;
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
		<Container>
			<View >
				<Header noLeft style={styles.headerBackgroundColor} noBorder>
					<Body>
						<Title style={styles.appTitle} >PIGEON</Title>
					</Body>
					<Right>
						<Button transparent>
							<Image style={styles.searchIcon} source={require('../Assets/pigeon.png')} style={styles.pigeon}/>
						</Button>
						<Button transparent>
							<Image style={styles.searchIcon} source={require('../Assets/status.png')} style={styles.status}/>
						</Button>
						<Button transparent>
							<Image style={styles.searchIcon} source={require('../Assets/moreVert.png')} style={styles.status}/>
						</Button>
					</Right>
				</Header>
			</View>
			<View>
				<ScrollView horizontal={true}>
					<Header noLeft style={styles.chatPageSecondHeader} noBorder>
					<Body>
						<Button transparent onPress={() =>{navigate('NewGroup')}}>
							<Thumbnail
							square
							style={{width: 55, height: 55,marginLeft: 13,marginBottom:4}}
							source={require('../Assets/addGroup.png')}
						>
						</Thumbnail>
						</Button>
						{/* <Text style={{color:"snow",fontSize: 16}}>Add Group</Text> */}
					</Body>
					<Body onPress={() =>{this.setModalVisible(!modalVisible)}} >
						<Button transparent onPress={() =>{this.setContact();this.setModalVisible(!modalVisible)}} style={{marginTop:19}}>
							<Thumbnail
								square
								style={{width: 50, height: 50,marginLeft: 20}}
								source={require('../Assets/addContact.png')}
							>
							</Thumbnail>
						</Button>
						{!this.state.contact ? (<View></View>) : (
							<View style={styles.centeredView}>
							<Modal
								animationType="fade"
								transparent={true}
								visible={modalVisible}
								onRequestClose={() => {
									this.setModalVisible(!modalVisible);
								}}
							>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<Header style={{backgroundColor:"#ffffff"}} noBorder>
											<Left>
												<Button transparent onPress={()=>{this.setContact();this.setModalVisible(!modalVisible)}}>
													<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#075E54"}}/>
												</Button>
											</Left>
											<Body>
												<Title style={styles.createContact}>Create Contact</Title>
											</Body>
											<Right>
												<Button transparent>
													<Image source={require('../Assets/ellipsis.png')} style={styles.ellipsis}/>
												</Button>
											</Right>
										</Header>
										<Body>
											<Modal
												animationType="fade"
												transparent={true}
												visible={modalVisible2}
												onRequestClose={() => {
													this.setModalVisible2(!modalVisible2);
												}}
											>
												<View style={styles.dropdown}>
													<View style={styles.dropdownmodel}>
														<ListItem button onPress={() =>{this.setModalVisible2(!modalVisible2)}}>
															<Title style={styles.createContact}>Device</Title>
														</ListItem>
														<ListItem button onPress={() =>{this.setModalVisible2(!modalVisible2)}}>
															<Title style={styles.createContact} scrollX>madhucharliehash@gmail.com</Title>
														</ListItem>
													</View>
												</View>
											</Modal>
											<Item picker>
												<Text>Save contact to ...</Text>
												<Picker
													mode="dropdown"
													iosIcon={<Icon name="arrow-down" />}
													style={{ width: undefined }}
													placeholder="Select your SIM"
													placeholderStyle={{ color: "#bfc6ea" }}
													placeholderIconColor="#007aff"
													selectedValue={this.state.selected2}
													onValueChange={this.onValueChange2.bind(this)}
												>
													<Picker.Item label="Device" value="key0" />
													<Picker.Item label="madhucharliehash@gmail.com" value="key2" />
													<Picker.Item label="18pa1a1213@vishnu.edu.in" value="key3" />
													<Picker.Item label="madhubabu@gmail.com" value="key4" />
												</Picker>
											</Item>
											<ScrollView>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="person" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="First Name" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="person" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Last Name" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="apartment" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Company" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="call" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Contact Number" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Icon name="place" type="MaterialIcons" style={{fontSize:28,marginTop:10,marginLeft:10}}/>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
															placeholder="Select your SIM"
															placeholderStyle={{ color: "#bfc6ea" }}
															placeholderIconColor="#007aff"
															selectedValue={this.state.selected}
															onValueChange={this.onValueChange.bind(this)}
														>
															<Picker.Item label="Place" value="key0" />
															<Picker.Item label="Home" value="key1" />
															<Picker.Item label="Pager" value="key2" />
															<Picker.Item label="Home pager" value="key3" />
															<Picker.Item label="Office pager" value="key4" />
														</Picker>
													</Item>
												</View>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="email" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="E-mail" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Icon name="place" type="MaterialIcons" style={{fontSize:28,marginTop:10,marginLeft:10}}/>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
															placeholder="Select your SIM"
															placeholderStyle={{ color: "#bfc6ea" }}
															placeholderIconColor="#007aff"
															selectedValue={this.state.selected3}
															onValueChange={this.onValueChange3.bind(this)}
														>
															<Picker.Item label="Place" value="key0" />
															<Picker.Item label="Home" value="key1" />
															<Picker.Item label="Pager" value="key2" />
															<Picker.Item label="Home pager" value="key3" />
															<Picker.Item label="Office pager" value="key4" />
														</Picker>
													</Item>
												</View>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="add-location" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Address" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Icon name="place" type="MaterialIcons" style={{fontSize:28,marginTop:10,marginLeft:10}}/>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
															placeholder="Select your SIM"
															placeholderStyle={{ color: "#bfc6ea" }}
															placeholderIconColor="#007aff"
															selectedValue={this.state.selected4}
															onValueChange={this.onValueChange4.bind(this)}
														>
															<Picker.Item label="Work" value="key0" />
															<Picker.Item label="Home" value="key1" />
															<Picker.Item label="Other" value="key2" />
														</Picker>
													</Item>
												</View>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="vpn-lock" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Website" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<Header noBorder transparent>
													<Icon name="calendar-today" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<DatePicker
														defaultDate={new Date(2018, 4, 4)}
														minimumDate={new Date(2018, 1, 1)}
														maximumDate={new Date(2018, 12, 31)}
														locale={"en"}
														timeZoneOffsetInMinutes={undefined}
														modalTransparent={false}
														animationType={"fade"}
														androidMode={"default"}
														placeHolderText="Select date"
														textStyle={{ color: "green" }}
														placeHolderTextStyle={{ color: "#000000" }}
														onDateChange={this.setDate}
														disabled={false}
														/>
												</Header>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Icon name="place" type="MaterialIcons" style={{fontSize:28,marginTop:10,marginLeft:10}}/>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
															placeholder="Select your SIM"
															placeholderStyle={{ color: "#bfc6ea" }}
															placeholderIconColor="#007aff"
															selectedValue={this.state.selected4}
															onValueChange={this.onValueChange4.bind(this)}
														>
															<Picker.Item label="Birthday" value="key0" />
															<Picker.Item label="Marriage Anniversary" value="key1" />
															<Picker.Item label="Death Anniversary" value="key2" />
															<Picker.Item label="Other" value="key3" />
														</Picker>
													</Item>
												</View>
											</ScrollView>
											<Button full light success onPress={() =>{this.setContact();this.setModalVisible(!modalVisible)}}>
												<Text>Save</Text>
											</Button>
										</Body>
									</View>
								</View>
							</Modal>
						</View>
						)}
						{/* <Text style={{color:"snow",fontSize: 15,marginRight:5}}>Add Contact</Text> */}
					</Body>
					<Body>
						{!this.state.aeroplanemode ? (
							<Button transparent onPress={() =>{this.setAeroplanemode()}}>
								<Thumbnail
									square
									style={{width: 60, height: 60,marginLeft: 25}}
									source={require('../Assets/flight.png')}
								>
								</Thumbnail>
							</Button>
							) : (
							<Button transparent onPress={() =>{this.setAeroplanemode()}}>
								<Thumbnail
									square
									style={{width: 60, height: 60,marginLeft: 25}}
									source={require('../Assets/flightOff.png')}
								>
								</Thumbnail>
							</Button>
						)}
						{/* <Text style={{color:"snow",fontSize: 15,marginLeft:12}}>Flight Mode</Text> */}
					</Body>
					<Body onPress={() =>{this.setSearchModalVisible(!searchmodalvisible)}} >
						<Button transparent onPress={() =>{this.setSearch();this.setSearchModalVisible(!searchmodalvisible)}} style={{marginTop:19}}>
							<Thumbnail
								square
								style={{width: 50, height: 50,marginLeft: 20}}
								source={require('../Assets/search.png')}
							>
							</Thumbnail>
						</Button>
						{!this.state.search ? (<View></View>) : (
							<View style={styles.centeredView}>
							<Modal
								animationType="fade"
								transparent={true}
								visible={searchmodalvisible}
								onRequestClose={() => {
									this.setSearchModalVisible(!searchmodalvisible)
								}}
							>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<Header style={{backgroundColor:"#ffffff"}} noBorder>
											<Left>
												<Button transparent onPress={()=>{this.setSearch();this.setSearchModalVisible(!searchmodalvisible)}}>
													<Icon name='close' type="MaterialIcons" style={{fontSize: 28,color:"#075E54"}}/>
												</Button>
											</Left>
											<Body>
												<Title style={styles.createContact}>Search</Title>
											</Body>
											<Right>
												<Button transparent>
													<Image source={require('../Assets/ellipsis.png')} style={styles.ellipsis}/>
												</Button>
											</Right>
										</Header>
										<Body>
											<ScrollView>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="person" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="Contact" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<Header noBorder transparent style={{width:"100%",marginRight:150}}>
													<Icon name="insert-drive-file" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
													<Input placeholder="File Name" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
												</Header>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Text style={{fontSize:20}}>Format : </Text>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
															placeholder="Select your format"
															placeholderStyle={{ color: "#bfc6ea" }}
															placeholderIconColor="#007aff"
															selectedValue={this.state.selected}
															onValueChange={this.onValueChange.bind(this)}
														>
															<Picker.Item label="PDF" value="key0" />
															<Picker.Item label="PNG" value="key1" />
															<Picker.Item label="JPG" value="key2" />
															<Picker.Item label="DOC" value="key3" />
															<Picker.Item label="XLSX" value="key4" />
														</Picker>
													</Item>
												</View>
												<View>
													<Item picker style={{marginTop:10,borderBottomWidth: 2,borderBottomColor:"#000000"}}>
														<Text style={{fontSize:20}}>Contains : </Text>
														<Picker
															mode="dropdown"
															iosIcon={<Icon name="arrow-down" />}
															style={{ width: undefined }}
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
											</ScrollView>
											<Button full light success onPress={() =>{this.setSearch();this.setSearchModalVisible(!searchmodalvisible)}}>
												<Text>Search</Text>
											</Button>
										</Body>
									</View>
								</View>
							</Modal>
						</View>
						)}
						{/* <Text style={{color:"snow",fontSize: 15,marginLeft:30,marginTop:10}}>Search</Text> */}
					</Body>
					<Body>
						<Thumbnail
							square
							style={{width: 50, height: 50,marginLeft: 28,marginBottom:4,marginRight:10}}
							source={require('../Assets/reminder.png')}
						>
						</Thumbnail>
						{/* <Text style={{color:"snow",fontSize: 16}}>Reminder</Text> */}
					</Body>
					<Body>
						<Thumbnail
							square
							style={{width: 55, height: 55,marginLeft: 20,marginBottom:4}}
							source={require('../Assets/message.png')}
						>
						</Thumbnail>
						{/* <Text style={{color:"snow",fontSize: 15,marginRight:5}}>Add Contact</Text> */}
					</Body>
					<Body>
						<Thumbnail
							square
							style={{width: 50, height: 50,marginLeft: 25}}
							source={require('../Assets/general.png')}
						>
						</Thumbnail>
						{/* <Text style={{color:"snow",fontSize: 15,marginLeft:12}}>Flight Mode</Text> */}
					</Body>
					<Body>
						<Thumbnail
							square
							style={{width: 45, height: 45,marginLeft: 30}}
							source={require('../Assets/bluetooth.png')}
						>
						</Thumbnail>
						{/* <Text style={{color:"snow",fontSize: 15,marginLeft:30,marginTop:10}}>Search</Text> */}
					</Body>
				</Header>
				</ScrollView>
			</View>
			<Tabs initialPage={0}
				tabBarBackgroundColor="#075E54"
				tabContainerStyle={{elevation:0}}
				tabBarUnderlineStyle={styles.tabBarUnderline}
			>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>CHATS </Text>
							<Badge style={styles.badge}>
								<Text style={styles.badgeText}>2</Text>
							</Badge>
						</TabHeading>}>
						<Container>
							<ScrollView>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,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'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="nightlight-round"
											style={{color:"#193674"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-on"
											style={styles.aeroplanemodeon}
										/>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,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'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="wb-sunny"
											style={{color:"#FF5733"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-off"
											style={styles.aeroplanemodeoff}
										>
										</Icon>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBAPDxAQEBAQFQ8PDw8PDxUPFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQFy0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBQQGB//EADsQAAIBAgQDBgQEAwgDAAAAAAABAgMRBBIhMQVBYQYTIlFxgTKRobEHQsHwFFJiIzNyorLC0eFDgpL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMBEAAgIBAgQDCAICAwAAAAAAAAECEQMEIRIxQVEFcfATImGBkaHB0bHhFDIGI1L/2gAMAwEAAhEDEQA/APkVhrDWCkTACQyQUgpBQiIYiQwxWLYKQ1ibagIScrHDiK/JCYjEOTstkUJEG7JxiMmWRtrJi5QVH8l+7lfMtrhQ2e+rFSvy90R6eo68kg5CSb5ltDDr80rfJfozTw2De8K9N7eFd5m+yMl1cqtv05JlLrS/mfonZEHCUupNTjDp6+p6V4asryUe9jzU3K3opKX3Z1Uo95BxcHSk7eK0q8UlvZSd/wDMeSp4mad1KSfmm7mtheOVYu8/E+dkk2ultmUZMM+lfdfbkX488L3teu/MsdPu1a6k80kpxV4y287W356nBXl55pJO29mvvc08XNTXeR2tdSW7S2v1Wv2ODJJvVXi/JrboTxvqyGRb0iiditnRHDNJq17LfVXKGjRB2jNNUxADAaJEBRWOBgBWwDNAsAzUSCkFIZIsItipDpBCkBEiQbBQRhYLHJxCpZJLn9jrMziEryt5IjLkOKtnPFBiPTBSV30WpT3NcI8q5sfb1f0XNlUY3fQuo0nOX72O14dK9tlb1dyLlRqhppZVxdL+pn5PqXd1odNCjmn/AEw+J8iYirmdo/MjZZ/jxjFyl8viccqaFVHpc7aWEk+TNfB8Jk91b1ITzRgrbK46eWXlE87Tp2d5LRK9vsitRcpdXyX/AAavEqai2kcWHtFuXMmp2rM0sfC67FsJumnC7aeuj2e11+/sa3CcJlpd41nm24wpfCm97trZWd/dGL3ibu9kbdLiso06fd6TSnFct1HX2t72RTlUmqXXmXYeFO3yXIEqOIu514pLwpeBRgldLwrdmVjaCjKSTur32a9rMGKrVJf3k5Te3ik3p08tiuxbii1vt8uRRmmntT+b3KmgWLGhGjQZhbAsOxLAALCsdigBqIZIgyLSBLBsEiGIiRCXJcQC1JWTZkVHdtvc7sXXSVuZnlc3uW40FMvwkfszmO/A0nKWnIqnsjdpE55FS8jt4Zh9L2+J29uZZOppyi5ayl0/LY7MNFyShSV5VFbO9FGPM0cPwKNm5NyduT2fQxzypP3j1WLSS9moQ7c+nry6OrPLuSvkanBR/wDGnq3/AFGzwunhtPPyludmKmoxyzfeJbStZlfDsFCcrrRWeiIymnHe0KGk4MmzUvNbr18DfwdOjZWVr9Di4ziVGLUd9jnlg5w8Tl6JHnuKYqTk1K/psZcelUp8V2iGs1LxQ4XGmzmqpyemrf0O2jwOplzOLhHfNJeJ+kT0HYfimFjNU61OMc1rVOvU+hcX4XDIpRScWuW1h6jWyxT4OE4mPBCe7Z8LqYJqVknZq/XTc65wyON7OLSdv0+n1PV8d4dGE6b+F21001XMwMRh8ym1vC11y3f/AGvkaoZ/aJPoVzwcDaMivPNJyta/LQrsX4inKLu1dPoVJG3G1VI52VO9ytoVotcRWi6iorsRoewrQUJMRoRlzRW0IZpRY1xEEssgG4bihQNiGQs5WTYRK/wv0DoBlzldgRJIKKWXxAzf4NQ0TtuYTWp6/hdPLFdEZ88qid7wTDx5pS7GphMNkWZab/XcpxPHFC8VTqy6xpySL1UZRW15nPVN+9uevcHw1B18rPP8T4up/lnHo9C7s1Uk5OW0YcvM7qmDi3qtPqdEIRpq0Y2/fNlznHg4Ujnw0Wb2/tck7S+FG5gcQp1YJxvHnzOP8TuFRpSw1eCShVjKnJLlUjqvmm//AJODAcT7qalfMr6o9r2gwsOJcOXcyvXpyVSMfOcbq3unJetjJL/pyxm9o8mYfFPfWx8qwWBqVZWpRk5eUT6d2YxVelFUcTGSWlnK7PnHBsZOhWjOSl4HqotwmfVMPxCli6Oek87hZtSjkqR6SS091o+geIOW0Wvd79jmabg+Z5jtxUUZx2skvlyuYNGEpOLW1SnKTlfTLFNNfb6HR+ItW2JycnRpS92nyMrBVsqzSb0jazetuUUuSvqy7BB+xiyrLkTytdjlx9SUNrrNe9tmrLc5abuvX7hxOMzSbkrp+XmLQR0MSpo5uV2nQziI4lzEZqMpW0I0WNCtABW0K0WMVgB1jChJCCQBAENcD1QCABmTWrLVhZ2vZfPU6qlNXUua+72O2jRST09zPOVbHX0WiWdcUjIwkLziup6/BPkYdLDJSUkbGHlYzZ5Wj0fg2meFST6v7UaLkVSYqkJUkYkj0NglPUyuMU6k3GMHbp8J2TmVVJ+bsX41Tswavhy4njd0+zo4XSyRadRzfXz6Gr2N7R1aOIpQivBKai4+d3Y1sF2VVWVCrSrU61OVu8u1CUJX1Ti90e9p9h8L/EwxKgoShD4I2VNz5Ta89ynPqsXC4yXFafyfatjzmZOORNbJdN+S+5pcR7L4PEPNUpRd+aVnd67o5aPZGhQeahmjLXXM3ePOL80aWCrNJwlvBuPstjsjik1qcRZGlw268ypqcX3Phn4pUZQxcXLTNQhb0jJr7s8znSp/1S165T3n41Q/tsJJc6daPylB/qfOZTb/AHyPR6P3tPA52odZZeuiHjC6v7l2HvzuGnDYtkzfGO5jlLagMRhbEbLCojYjYWxGA6I2KwtiNisZ3EsFIKRMrACw9gpBQCJByjJDpABVOOj9pfK7LakZSTitF9xaidm1q7EoY+nbV26SuzPli7tHe8Kz43B45yr51a5/zZ2SjbL6HXTM3D4nO9I2jHbqaMGZJpnqdHOM/ei7RfcrrTtqTMJNXKaN03a2OKeMdnkV38ijD4LEVZWXd3f80jvqsza85LZ5S+Hw2ONrI0lxybrotjUqdneI0vF3M8tvioTUtPTf6Hvvw67UTkv4SvJucE+7lL4rLeL6o+e8M7TYui45a0rR2UvEreWp7CljocSSqUFTocQpNNP4IzWzUml5bO2m2zMmrjNwrIlX/pdPNdjnp45J02/Pn/Z9GxEdXJfmSfuc12mUcElW7lRr272N1KzVrl1Q4DVSohHbY+Xfi7jL1aFNbwpyk/8A3at/pPBUY3aR7rtrGpDFTxEqDnC8YKdSLdLayS67nm+JUoqtNxioKSpyyLZOUIuVul2z1Oi2xRiu3pHM1uNpvI+9evoc9xWwNitnROWRsVsLYrFZJEbEbCxGIANithYoAaqQbDJDWLSsWxFEexEgACiMojJDJAJsTKYmLp5ZSXK916M3rGbxaltJej/QjLkSiyzAy8Kf8pq0qhlcK+B9JF8s0dtjFkVs9poczhghLo0v0aOYsWxlwxfmXxxJS4HUx6vG+pbUTDhcFCo7SnlXmU1MVocM8SxqDrsYtXnxrlufQcH+HFCrTcqeKlntezgsvowcD4DPBVm56va5ndju07hJQnJ2fntc+gYvFU6sbu17XOTq8ufG3CbtM5sIRb4or+iYbG6vqXOvdnnqlfK7Jgr8TVKlUqt/DG69dl9bGOGJt7dS2ktzO7QPEYjD4iM4SptYullpyTTjBK19eVlc8FxGqpVJyj8N7L/Ckkvoj23bDtUp0e5pTUnWUZTcVbJGyvC/NvX0R4FnpNBjkoOTVdl9P0cbxHMpNY49OfnXL9iMDGYGbTmiMVjMDABWKxmKwARijMVgBtRQ9hYjpFpURIKQyCMQEg2IQQEEqwUk09mhyABycMpOOeL5SXy1OuURaC8cuuX9S+aMOXaTPc+FVPRwfn9mymVFFM6VjpuJWRWa8uONWkZtZnNKRfiDkmy6J5vVTpsKqtNNO1j0XDu09SCUZO+ljzSO3B4CU9iOWEJL3zJinkUvdZ6KHHJTatuPxzHSdOFJvV2nP/av1+RrdlOyibU6uyd7c3Yq/Ebhyp14VIxywq00lbbNTtH7ZTDp8mGWpUI9L+vq35pGnU+0WBt9efl/ey8rPIMRljK2dk4gjAwsRiZJMDAwsDEMVisdiMAEYrGYrADbix0VxY6LSoe4biDJjEEIqDcQBCAlwANPd+/2LzlzpNLzTt8mdETHn/2Paf8AH5Xpmu0n+H+QZCVIFgUZrO64KjKxNJGfKk3srmxXp3ZtcF4fC15L56E5ZVCNs89rNLxS22PJ4Xh829rHsuFcPyJPTk/c0u5pxV1b19CKquVjFl1Esi2RVg0kYG1w3FJWT0Mb8VMbF0cPT3qSnKafPLGNn9ZIbD1dVyPEdp+LrEYqTT/s6a7qGujt8T93f5Iz6XTt51Lot/0LXyWPF8ZbfszaFV/m2ezL2V4iySikPQg0tdvJnbWaluefli3EYjJWqrePyFjVTLlNNEOBoLAwsDGIVisYVgAjEY7EYAbMWPFlMWOpFpWW3CmVqREx0BZcNyq41woVD3C2Jcz8fi94R93+gnsNIH8RmrQfJOyN2kzy9D4o/wCJfc9JTe5izb7nrfAJVjkvj+C2bKZTLmzlqFCO9mltZJVbK5fheI7K79tjLxMjnptpk3BSRwdXnk5Uuh6t4/Tr5XJhcZfcwIVXzZeq2VXKfYqqHCbStmr2h4uqdFxg/HNZU+aXNnhqZ0Y/EOcrv0XoVUFqasONY4bHE1md5cl9FyNGg9FcOIr6WElKyOOc7kIwt2UXQYvX6Ct2APX2uuepd1IMKZZFPzuc1OR1U5ITuPIFuK35qwrOpJME8PcSzdweM5WIy+eHZRKL8i1TT5EHFo0Ux0ypMZSNCKS5MKkUpjZgAsuLUrRju7HHWxqWkdevI45zbd3qyLn2JKPc6cRjJS0Wi+rOVkI2V3Zdw8KIekpVM0U1+aLZ5pM0+DYqz7p7PZ9fIpyxtX2Ov4PqFjy8EuU9vmuX1ujXiymu7Fk9CjEMzLmelzSaizlnK5Va5dGNzqpYYs4qOWsEsjKFE5sRJvQ0KtM4MfLLHq9EODsWqx8EG3yRmVXqWUSgshIvktjzN27LZzuIAIlsBB7+F9GI2SMt09mgoVlaZdTmUMMGSkhJnUpeR006xnxmNnKZQssUjWepTVgmJQraCzqFUYtMm2TMMmVoqrVraLf7HSujEi2tiFHTd+Rx1Kspbv25CkRW5WWKNECiDoiSjHcUDGA0IsatCIlhmgARUe5v8NxiqrJL+8X+b+otrQ09DzkJuLUk7NanpcFiVVjf817Sj1MuWHBuuR6jw7Wf5MfZZH76X1X7XX6lXD6V36HfJeRTgo2v1OmUSmbuR2NNi4cSOecDzfEK2ab8lovQ3eLV8kG1u/BE83lNOBbWef8AHM1NYV5v8fv6CjJgaCaDzr2IpDXAQZEBGQMgBIVkIEBi3JJgAwEdEalkF1TmCQ4US4jrrVLaLdnMSTu7kRY2EYkQyIQiSoKGQtw3ExrYIRLkaCh8XZEYGgoYTGt1uV2L8HiHCSmvdeaKmKD32JQlKElKLpo9nhGpJSjfxdCvF4ynDRu8uUIazPN8PnBSSqpOD05+E360adCE5xhGOXbf438JiniUZdz2Wk171GBzVR4f9nd1td1S893/AAYHFMTKc7S8OTRR8vM5UDq939wG6MaVI8XnzSyTc5c339dgyZCIhLkUrfdkIQADoYEwBkIOgAMIoyJAEZAAgAgAB0EAwixEIREAYQgIgGgkAMhDQCEIAAuQgGgSE7IdVbGSlShSe0G5X6ckcgGw4U2OOacFJRdcSp/FBIRESJFFWMKEAiZCEAAEGFJcAAALAMiQhCAIBCAYAf/Z'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="nightlight-round"
											style={{color:"#193674"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-on"
											style={styles.aeroplanemodeon}
										/>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBAPDxAQEBAQFQ8PDw8PDxUPFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQFy0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBQQGB//EADsQAAIBAgQDBgQEAwgDAAAAAAABAgMRBBIhMQVBYQYTIlFxgTKRobEHQsHwFFJiIzNyorLC0eFDgpL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMBEAAgIBAgQDCAICAwAAAAAAAAECEQMEIRIxQVEFcfATImGBkaHB0bHhFDIGI1L/2gAMAwEAAhEDEQA/APkVhrDWCkTACQyQUgpBQiIYiQwxWLYKQ1ibagIScrHDiK/JCYjEOTstkUJEG7JxiMmWRtrJi5QVH8l+7lfMtrhQ2e+rFSvy90R6eo68kg5CSb5ltDDr80rfJfozTw2De8K9N7eFd5m+yMl1cqtv05JlLrS/mfonZEHCUupNTjDp6+p6V4asryUe9jzU3K3opKX3Z1Uo95BxcHSk7eK0q8UlvZSd/wDMeSp4mad1KSfmm7mtheOVYu8/E+dkk2ultmUZMM+lfdfbkX488L3teu/MsdPu1a6k80kpxV4y287W356nBXl55pJO29mvvc08XNTXeR2tdSW7S2v1Wv2ODJJvVXi/JrboTxvqyGRb0iiditnRHDNJq17LfVXKGjRB2jNNUxADAaJEBRWOBgBWwDNAsAzUSCkFIZIsItipDpBCkBEiQbBQRhYLHJxCpZJLn9jrMziEryt5IjLkOKtnPFBiPTBSV30WpT3NcI8q5sfb1f0XNlUY3fQuo0nOX72O14dK9tlb1dyLlRqhppZVxdL+pn5PqXd1odNCjmn/AEw+J8iYirmdo/MjZZ/jxjFyl8viccqaFVHpc7aWEk+TNfB8Jk91b1ITzRgrbK46eWXlE87Tp2d5LRK9vsitRcpdXyX/AAavEqai2kcWHtFuXMmp2rM0sfC67FsJumnC7aeuj2e11+/sa3CcJlpd41nm24wpfCm97trZWd/dGL3ibu9kbdLiso06fd6TSnFct1HX2t72RTlUmqXXmXYeFO3yXIEqOIu514pLwpeBRgldLwrdmVjaCjKSTur32a9rMGKrVJf3k5Te3ik3p08tiuxbii1vt8uRRmmntT+b3KmgWLGhGjQZhbAsOxLAALCsdigBqIZIgyLSBLBsEiGIiRCXJcQC1JWTZkVHdtvc7sXXSVuZnlc3uW40FMvwkfszmO/A0nKWnIqnsjdpE55FS8jt4Zh9L2+J29uZZOppyi5ayl0/LY7MNFyShSV5VFbO9FGPM0cPwKNm5NyduT2fQxzypP3j1WLSS9moQ7c+nry6OrPLuSvkanBR/wDGnq3/AFGzwunhtPPyludmKmoxyzfeJbStZlfDsFCcrrRWeiIymnHe0KGk4MmzUvNbr18DfwdOjZWVr9Di4ziVGLUd9jnlg5w8Tl6JHnuKYqTk1K/psZcelUp8V2iGs1LxQ4XGmzmqpyemrf0O2jwOplzOLhHfNJeJ+kT0HYfimFjNU61OMc1rVOvU+hcX4XDIpRScWuW1h6jWyxT4OE4mPBCe7Z8LqYJqVknZq/XTc65wyON7OLSdv0+n1PV8d4dGE6b+F21001XMwMRh8ym1vC11y3f/AGvkaoZ/aJPoVzwcDaMivPNJyta/LQrsX4inKLu1dPoVJG3G1VI52VO9ytoVotcRWi6iorsRoewrQUJMRoRlzRW0IZpRY1xEEssgG4bihQNiGQs5WTYRK/wv0DoBlzldgRJIKKWXxAzf4NQ0TtuYTWp6/hdPLFdEZ88qid7wTDx5pS7GphMNkWZab/XcpxPHFC8VTqy6xpySL1UZRW15nPVN+9uevcHw1B18rPP8T4up/lnHo9C7s1Uk5OW0YcvM7qmDi3qtPqdEIRpq0Y2/fNlznHg4Ujnw0Wb2/tck7S+FG5gcQp1YJxvHnzOP8TuFRpSw1eCShVjKnJLlUjqvmm//AJODAcT7qalfMr6o9r2gwsOJcOXcyvXpyVSMfOcbq3unJetjJL/pyxm9o8mYfFPfWx8qwWBqVZWpRk5eUT6d2YxVelFUcTGSWlnK7PnHBsZOhWjOSl4HqotwmfVMPxCli6Oek87hZtSjkqR6SS091o+geIOW0Wvd79jmabg+Z5jtxUUZx2skvlyuYNGEpOLW1SnKTlfTLFNNfb6HR+ItW2JycnRpS92nyMrBVsqzSb0jazetuUUuSvqy7BB+xiyrLkTytdjlx9SUNrrNe9tmrLc5abuvX7hxOMzSbkrp+XmLQR0MSpo5uV2nQziI4lzEZqMpW0I0WNCtABW0K0WMVgB1jChJCCQBAENcD1QCABmTWrLVhZ2vZfPU6qlNXUua+72O2jRST09zPOVbHX0WiWdcUjIwkLziup6/BPkYdLDJSUkbGHlYzZ5Wj0fg2meFST6v7UaLkVSYqkJUkYkj0NglPUyuMU6k3GMHbp8J2TmVVJ+bsX41Tswavhy4njd0+zo4XSyRadRzfXz6Gr2N7R1aOIpQivBKai4+d3Y1sF2VVWVCrSrU61OVu8u1CUJX1Ti90e9p9h8L/EwxKgoShD4I2VNz5Ta89ynPqsXC4yXFafyfatjzmZOORNbJdN+S+5pcR7L4PEPNUpRd+aVnd67o5aPZGhQeahmjLXXM3ePOL80aWCrNJwlvBuPstjsjik1qcRZGlw268ypqcX3Phn4pUZQxcXLTNQhb0jJr7s8znSp/1S165T3n41Q/tsJJc6daPylB/qfOZTb/AHyPR6P3tPA52odZZeuiHjC6v7l2HvzuGnDYtkzfGO5jlLagMRhbEbLCojYjYWxGA6I2KwtiNisZ3EsFIKRMrACw9gpBQCJByjJDpABVOOj9pfK7LakZSTitF9xaidm1q7EoY+nbV26SuzPli7tHe8Kz43B45yr51a5/zZ2SjbL6HXTM3D4nO9I2jHbqaMGZJpnqdHOM/ei7RfcrrTtqTMJNXKaN03a2OKeMdnkV38ijD4LEVZWXd3f80jvqsza85LZ5S+Hw2ONrI0lxybrotjUqdneI0vF3M8tvioTUtPTf6Hvvw67UTkv4SvJucE+7lL4rLeL6o+e8M7TYui45a0rR2UvEreWp7CljocSSqUFTocQpNNP4IzWzUml5bO2m2zMmrjNwrIlX/pdPNdjnp45J02/Pn/Z9GxEdXJfmSfuc12mUcElW7lRr272N1KzVrl1Q4DVSohHbY+Xfi7jL1aFNbwpyk/8A3at/pPBUY3aR7rtrGpDFTxEqDnC8YKdSLdLayS67nm+JUoqtNxioKSpyyLZOUIuVul2z1Oi2xRiu3pHM1uNpvI+9evoc9xWwNitnROWRsVsLYrFZJEbEbCxGIANithYoAaqQbDJDWLSsWxFEexEgACiMojJDJAJsTKYmLp5ZSXK916M3rGbxaltJej/QjLkSiyzAy8Kf8pq0qhlcK+B9JF8s0dtjFkVs9poczhghLo0v0aOYsWxlwxfmXxxJS4HUx6vG+pbUTDhcFCo7SnlXmU1MVocM8SxqDrsYtXnxrlufQcH+HFCrTcqeKlntezgsvowcD4DPBVm56va5ndju07hJQnJ2fntc+gYvFU6sbu17XOTq8ufG3CbtM5sIRb4or+iYbG6vqXOvdnnqlfK7Jgr8TVKlUqt/DG69dl9bGOGJt7dS2ktzO7QPEYjD4iM4SptYullpyTTjBK19eVlc8FxGqpVJyj8N7L/Ckkvoj23bDtUp0e5pTUnWUZTcVbJGyvC/NvX0R4FnpNBjkoOTVdl9P0cbxHMpNY49OfnXL9iMDGYGbTmiMVjMDABWKxmKwARijMVgBtRQ9hYjpFpURIKQyCMQEg2IQQEEqwUk09mhyABycMpOOeL5SXy1OuURaC8cuuX9S+aMOXaTPc+FVPRwfn9mymVFFM6VjpuJWRWa8uONWkZtZnNKRfiDkmy6J5vVTpsKqtNNO1j0XDu09SCUZO+ljzSO3B4CU9iOWEJL3zJinkUvdZ6KHHJTatuPxzHSdOFJvV2nP/av1+RrdlOyibU6uyd7c3Yq/Ebhyp14VIxywq00lbbNTtH7ZTDp8mGWpUI9L+vq35pGnU+0WBt9efl/ey8rPIMRljK2dk4gjAwsRiZJMDAwsDEMVisdiMAEYrGYrADbix0VxY6LSoe4biDJjEEIqDcQBCAlwANPd+/2LzlzpNLzTt8mdETHn/2Paf8AH5Xpmu0n+H+QZCVIFgUZrO64KjKxNJGfKk3srmxXp3ZtcF4fC15L56E5ZVCNs89rNLxS22PJ4Xh829rHsuFcPyJPTk/c0u5pxV1b19CKquVjFl1Esi2RVg0kYG1w3FJWT0Mb8VMbF0cPT3qSnKafPLGNn9ZIbD1dVyPEdp+LrEYqTT/s6a7qGujt8T93f5Iz6XTt51Lot/0LXyWPF8ZbfszaFV/m2ezL2V4iySikPQg0tdvJnbWaluefli3EYjJWqrePyFjVTLlNNEOBoLAwsDGIVisYVgAjEY7EYAbMWPFlMWOpFpWW3CmVqREx0BZcNyq41woVD3C2Jcz8fi94R93+gnsNIH8RmrQfJOyN2kzy9D4o/wCJfc9JTe5izb7nrfAJVjkvj+C2bKZTLmzlqFCO9mltZJVbK5fheI7K79tjLxMjnptpk3BSRwdXnk5Uuh6t4/Tr5XJhcZfcwIVXzZeq2VXKfYqqHCbStmr2h4uqdFxg/HNZU+aXNnhqZ0Y/EOcrv0XoVUFqasONY4bHE1md5cl9FyNGg9FcOIr6WElKyOOc7kIwt2UXQYvX6Ct2APX2uuepd1IMKZZFPzuc1OR1U5ITuPIFuK35qwrOpJME8PcSzdweM5WIy+eHZRKL8i1TT5EHFo0Ux0ypMZSNCKS5MKkUpjZgAsuLUrRju7HHWxqWkdevI45zbd3qyLn2JKPc6cRjJS0Wi+rOVkI2V3Zdw8KIekpVM0U1+aLZ5pM0+DYqz7p7PZ9fIpyxtX2Ov4PqFjy8EuU9vmuX1ujXiymu7Fk9CjEMzLmelzSaizlnK5Va5dGNzqpYYs4qOWsEsjKFE5sRJvQ0KtM4MfLLHq9EODsWqx8EG3yRmVXqWUSgshIvktjzN27LZzuIAIlsBB7+F9GI2SMt09mgoVlaZdTmUMMGSkhJnUpeR006xnxmNnKZQssUjWepTVgmJQraCzqFUYtMm2TMMmVoqrVraLf7HSujEi2tiFHTd+Rx1Kspbv25CkRW5WWKNECiDoiSjHcUDGA0IsatCIlhmgARUe5v8NxiqrJL+8X+b+otrQ09DzkJuLUk7NanpcFiVVjf817Sj1MuWHBuuR6jw7Wf5MfZZH76X1X7XX6lXD6V36HfJeRTgo2v1OmUSmbuR2NNi4cSOecDzfEK2ab8lovQ3eLV8kG1u/BE83lNOBbWef8AHM1NYV5v8fv6CjJgaCaDzr2IpDXAQZEBGQMgBIVkIEBi3JJgAwEdEalkF1TmCQ4US4jrrVLaLdnMSTu7kRY2EYkQyIQiSoKGQtw3ExrYIRLkaCh8XZEYGgoYTGt1uV2L8HiHCSmvdeaKmKD32JQlKElKLpo9nhGpJSjfxdCvF4ynDRu8uUIazPN8PnBSSqpOD05+E360adCE5xhGOXbf438JiniUZdz2Wk171GBzVR4f9nd1td1S893/AAYHFMTKc7S8OTRR8vM5UDq939wG6MaVI8XnzSyTc5c339dgyZCIhLkUrfdkIQADoYEwBkIOgAMIoyJAEZAAgAgAB0EAwixEIREAYQgIgGgkAMhDQCEIAAuQgGgSE7IdVbGSlShSe0G5X6ckcgGw4U2OOacFJRdcSp/FBIRESJFFWMKEAiZCEAAEGFJcAAALAMiQhCAIBCAYAf/Z'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="wb-sunny"
											style={{color:"#FF5733"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-off"
											style={styles.aeroplanemodeoff}
										>
										</Icon>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,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'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="nightlight-round"
											style={{color:"#193674"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-on"
											style={styles.aeroplanemodeon}
										/>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,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'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="wb-sunny"
											style={{color:"#FF5733"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-off"
											style={styles.aeroplanemodeoff}
										>
										</Icon>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBAPDxAQEBAQFQ8PDw8PDxUPFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQFy0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBQQGB//EADsQAAIBAgQDBgQEAwgDAAAAAAABAgMRBBIhMQVBYQYTIlFxgTKRobEHQsHwFFJiIzNyorLC0eFDgpL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMBEAAgIBAgQDCAICAwAAAAAAAAECEQMEIRIxQVEFcfATImGBkaHB0bHhFDIGI1L/2gAMAwEAAhEDEQA/APkVhrDWCkTACQyQUgpBQiIYiQwxWLYKQ1ibagIScrHDiK/JCYjEOTstkUJEG7JxiMmWRtrJi5QVH8l+7lfMtrhQ2e+rFSvy90R6eo68kg5CSb5ltDDr80rfJfozTw2De8K9N7eFd5m+yMl1cqtv05JlLrS/mfonZEHCUupNTjDp6+p6V4asryUe9jzU3K3opKX3Z1Uo95BxcHSk7eK0q8UlvZSd/wDMeSp4mad1KSfmm7mtheOVYu8/E+dkk2ultmUZMM+lfdfbkX488L3teu/MsdPu1a6k80kpxV4y287W356nBXl55pJO29mvvc08XNTXeR2tdSW7S2v1Wv2ODJJvVXi/JrboTxvqyGRb0iiditnRHDNJq17LfVXKGjRB2jNNUxADAaJEBRWOBgBWwDNAsAzUSCkFIZIsItipDpBCkBEiQbBQRhYLHJxCpZJLn9jrMziEryt5IjLkOKtnPFBiPTBSV30WpT3NcI8q5sfb1f0XNlUY3fQuo0nOX72O14dK9tlb1dyLlRqhppZVxdL+pn5PqXd1odNCjmn/AEw+J8iYirmdo/MjZZ/jxjFyl8viccqaFVHpc7aWEk+TNfB8Jk91b1ITzRgrbK46eWXlE87Tp2d5LRK9vsitRcpdXyX/AAavEqai2kcWHtFuXMmp2rM0sfC67FsJumnC7aeuj2e11+/sa3CcJlpd41nm24wpfCm97trZWd/dGL3ibu9kbdLiso06fd6TSnFct1HX2t72RTlUmqXXmXYeFO3yXIEqOIu514pLwpeBRgldLwrdmVjaCjKSTur32a9rMGKrVJf3k5Te3ik3p08tiuxbii1vt8uRRmmntT+b3KmgWLGhGjQZhbAsOxLAALCsdigBqIZIgyLSBLBsEiGIiRCXJcQC1JWTZkVHdtvc7sXXSVuZnlc3uW40FMvwkfszmO/A0nKWnIqnsjdpE55FS8jt4Zh9L2+J29uZZOppyi5ayl0/LY7MNFyShSV5VFbO9FGPM0cPwKNm5NyduT2fQxzypP3j1WLSS9moQ7c+nry6OrPLuSvkanBR/wDGnq3/AFGzwunhtPPyludmKmoxyzfeJbStZlfDsFCcrrRWeiIymnHe0KGk4MmzUvNbr18DfwdOjZWVr9Di4ziVGLUd9jnlg5w8Tl6JHnuKYqTk1K/psZcelUp8V2iGs1LxQ4XGmzmqpyemrf0O2jwOplzOLhHfNJeJ+kT0HYfimFjNU61OMc1rVOvU+hcX4XDIpRScWuW1h6jWyxT4OE4mPBCe7Z8LqYJqVknZq/XTc65wyON7OLSdv0+n1PV8d4dGE6b+F21001XMwMRh8ym1vC11y3f/AGvkaoZ/aJPoVzwcDaMivPNJyta/LQrsX4inKLu1dPoVJG3G1VI52VO9ytoVotcRWi6iorsRoewrQUJMRoRlzRW0IZpRY1xEEssgG4bihQNiGQs5WTYRK/wv0DoBlzldgRJIKKWXxAzf4NQ0TtuYTWp6/hdPLFdEZ88qid7wTDx5pS7GphMNkWZab/XcpxPHFC8VTqy6xpySL1UZRW15nPVN+9uevcHw1B18rPP8T4up/lnHo9C7s1Uk5OW0YcvM7qmDi3qtPqdEIRpq0Y2/fNlznHg4Ujnw0Wb2/tck7S+FG5gcQp1YJxvHnzOP8TuFRpSw1eCShVjKnJLlUjqvmm//AJODAcT7qalfMr6o9r2gwsOJcOXcyvXpyVSMfOcbq3unJetjJL/pyxm9o8mYfFPfWx8qwWBqVZWpRk5eUT6d2YxVelFUcTGSWlnK7PnHBsZOhWjOSl4HqotwmfVMPxCli6Oek87hZtSjkqR6SS091o+geIOW0Wvd79jmabg+Z5jtxUUZx2skvlyuYNGEpOLW1SnKTlfTLFNNfb6HR+ItW2JycnRpS92nyMrBVsqzSb0jazetuUUuSvqy7BB+xiyrLkTytdjlx9SUNrrNe9tmrLc5abuvX7hxOMzSbkrp+XmLQR0MSpo5uV2nQziI4lzEZqMpW0I0WNCtABW0K0WMVgB1jChJCCQBAENcD1QCABmTWrLVhZ2vZfPU6qlNXUua+72O2jRST09zPOVbHX0WiWdcUjIwkLziup6/BPkYdLDJSUkbGHlYzZ5Wj0fg2meFST6v7UaLkVSYqkJUkYkj0NglPUyuMU6k3GMHbp8J2TmVVJ+bsX41Tswavhy4njd0+zo4XSyRadRzfXz6Gr2N7R1aOIpQivBKai4+d3Y1sF2VVWVCrSrU61OVu8u1CUJX1Ti90e9p9h8L/EwxKgoShD4I2VNz5Ta89ynPqsXC4yXFafyfatjzmZOORNbJdN+S+5pcR7L4PEPNUpRd+aVnd67o5aPZGhQeahmjLXXM3ePOL80aWCrNJwlvBuPstjsjik1qcRZGlw268ypqcX3Phn4pUZQxcXLTNQhb0jJr7s8znSp/1S165T3n41Q/tsJJc6daPylB/qfOZTb/AHyPR6P3tPA52odZZeuiHjC6v7l2HvzuGnDYtkzfGO5jlLagMRhbEbLCojYjYWxGA6I2KwtiNisZ3EsFIKRMrACw9gpBQCJByjJDpABVOOj9pfK7LakZSTitF9xaidm1q7EoY+nbV26SuzPli7tHe8Kz43B45yr51a5/zZ2SjbL6HXTM3D4nO9I2jHbqaMGZJpnqdHOM/ei7RfcrrTtqTMJNXKaN03a2OKeMdnkV38ijD4LEVZWXd3f80jvqsza85LZ5S+Hw2ONrI0lxybrotjUqdneI0vF3M8tvioTUtPTf6Hvvw67UTkv4SvJucE+7lL4rLeL6o+e8M7TYui45a0rR2UvEreWp7CljocSSqUFTocQpNNP4IzWzUml5bO2m2zMmrjNwrIlX/pdPNdjnp45J02/Pn/Z9GxEdXJfmSfuc12mUcElW7lRr272N1KzVrl1Q4DVSohHbY+Xfi7jL1aFNbwpyk/8A3at/pPBUY3aR7rtrGpDFTxEqDnC8YKdSLdLayS67nm+JUoqtNxioKSpyyLZOUIuVul2z1Oi2xRiu3pHM1uNpvI+9evoc9xWwNitnROWRsVsLYrFZJEbEbCxGIANithYoAaqQbDJDWLSsWxFEexEgACiMojJDJAJsTKYmLp5ZSXK916M3rGbxaltJej/QjLkSiyzAy8Kf8pq0qhlcK+B9JF8s0dtjFkVs9poczhghLo0v0aOYsWxlwxfmXxxJS4HUx6vG+pbUTDhcFCo7SnlXmU1MVocM8SxqDrsYtXnxrlufQcH+HFCrTcqeKlntezgsvowcD4DPBVm56va5ndju07hJQnJ2fntc+gYvFU6sbu17XOTq8ufG3CbtM5sIRb4or+iYbG6vqXOvdnnqlfK7Jgr8TVKlUqt/DG69dl9bGOGJt7dS2ktzO7QPEYjD4iM4SptYullpyTTjBK19eVlc8FxGqpVJyj8N7L/Ckkvoj23bDtUp0e5pTUnWUZTcVbJGyvC/NvX0R4FnpNBjkoOTVdl9P0cbxHMpNY49OfnXL9iMDGYGbTmiMVjMDABWKxmKwARijMVgBtRQ9hYjpFpURIKQyCMQEg2IQQEEqwUk09mhyABycMpOOeL5SXy1OuURaC8cuuX9S+aMOXaTPc+FVPRwfn9mymVFFM6VjpuJWRWa8uONWkZtZnNKRfiDkmy6J5vVTpsKqtNNO1j0XDu09SCUZO+ljzSO3B4CU9iOWEJL3zJinkUvdZ6KHHJTatuPxzHSdOFJvV2nP/av1+RrdlOyibU6uyd7c3Yq/Ebhyp14VIxywq00lbbNTtH7ZTDp8mGWpUI9L+vq35pGnU+0WBt9efl/ey8rPIMRljK2dk4gjAwsRiZJMDAwsDEMVisdiMAEYrGYrADbix0VxY6LSoe4biDJjEEIqDcQBCAlwANPd+/2LzlzpNLzTt8mdETHn/2Paf8AH5Xpmu0n+H+QZCVIFgUZrO64KjKxNJGfKk3srmxXp3ZtcF4fC15L56E5ZVCNs89rNLxS22PJ4Xh829rHsuFcPyJPTk/c0u5pxV1b19CKquVjFl1Esi2RVg0kYG1w3FJWT0Mb8VMbF0cPT3qSnKafPLGNn9ZIbD1dVyPEdp+LrEYqTT/s6a7qGujt8T93f5Iz6XTt51Lot/0LXyWPF8ZbfszaFV/m2ezL2V4iySikPQg0tdvJnbWaluefli3EYjJWqrePyFjVTLlNNEOBoLAwsDGIVisYVgAjEY7EYAbMWPFlMWOpFpWW3CmVqREx0BZcNyq41woVD3C2Jcz8fi94R93+gnsNIH8RmrQfJOyN2kzy9D4o/wCJfc9JTe5izb7nrfAJVjkvj+C2bKZTLmzlqFCO9mltZJVbK5fheI7K79tjLxMjnptpk3BSRwdXnk5Uuh6t4/Tr5XJhcZfcwIVXzZeq2VXKfYqqHCbStmr2h4uqdFxg/HNZU+aXNnhqZ0Y/EOcrv0XoVUFqasONY4bHE1md5cl9FyNGg9FcOIr6WElKyOOc7kIwt2UXQYvX6Ct2APX2uuepd1IMKZZFPzuc1OR1U5ITuPIFuK35qwrOpJME8PcSzdweM5WIy+eHZRKL8i1TT5EHFo0Ux0ypMZSNCKS5MKkUpjZgAsuLUrRju7HHWxqWkdevI45zbd3qyLn2JKPc6cRjJS0Wi+rOVkI2V3Zdw8KIekpVM0U1+aLZ5pM0+DYqz7p7PZ9fIpyxtX2Ov4PqFjy8EuU9vmuX1ujXiymu7Fk9CjEMzLmelzSaizlnK5Va5dGNzqpYYs4qOWsEsjKFE5sRJvQ0KtM4MfLLHq9EODsWqx8EG3yRmVXqWUSgshIvktjzN27LZzuIAIlsBB7+F9GI2SMt09mgoVlaZdTmUMMGSkhJnUpeR006xnxmNnKZQssUjWepTVgmJQraCzqFUYtMm2TMMmVoqrVraLf7HSujEi2tiFHTd+Rx1Kspbv25CkRW5WWKNECiDoiSjHcUDGA0IsatCIlhmgARUe5v8NxiqrJL+8X+b+otrQ09DzkJuLUk7NanpcFiVVjf817Sj1MuWHBuuR6jw7Wf5MfZZH76X1X7XX6lXD6V36HfJeRTgo2v1OmUSmbuR2NNi4cSOecDzfEK2ab8lovQ3eLV8kG1u/BE83lNOBbWef8AHM1NYV5v8fv6CjJgaCaDzr2IpDXAQZEBGQMgBIVkIEBi3JJgAwEdEalkF1TmCQ4US4jrrVLaLdnMSTu7kRY2EYkQyIQiSoKGQtw3ExrYIRLkaCh8XZEYGgoYTGt1uV2L8HiHCSmvdeaKmKD32JQlKElKLpo9nhGpJSjfxdCvF4ynDRu8uUIazPN8PnBSSqpOD05+E360adCE5xhGOXbf438JiniUZdz2Wk171GBzVR4f9nd1td1S893/AAYHFMTKc7S8OTRR8vM5UDq939wG6MaVI8XnzSyTc5c339dgyZCIhLkUrfdkIQADoYEwBkIOgAMIoyJAEZAAgAgAB0EAwixEIREAYQgIgGgkAMhDQCEIAAuQgGgSE7IdVbGSlShSe0G5X6ckcgGw4U2OOacFJRdcSp/FBIRESJFFWMKEAiZCEAAEGFJcAAALAMiQhCAIBCAYAf/Z'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="nightlight-round"
											style={{color:"#193674"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-on"
											style={styles.aeroplanemodeon}
										/>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
								<ListItem avatar noBorder button onPress={() =>{navigate('ChatPage')}}>
									<Left>
										<Thumbnail
											source={{uri:'data:image/jpeg;base64,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'}}
										></Thumbnail>
										<Icon
											type="MaterialIcons"
											name="wb-sunny"
											style={{color:"#FF5733"}}
										/>
										<Icon
											type="MaterialIcons"
											name="airplanemode-off"
											style={styles.aeroplanemodeoff}
										>
										</Icon>
									</Left>
									<Body>
										<Text>Hanuman</Text>
										<Text note>Hi</Text>
									</Body>
									<Right>
										<Text note style={{color:"#25D366"}}>3:23 pm</Text>
										<Badge style={styles.badgeChats}>
											<Text style={styles.badgeChatsText}>1</Text>
										</Badge>
									</Right>
								</ListItem>
							</ScrollView>
							<Fab position="bottomRight" style={{backgroundColor:"#25D366"}}>
								<Icon name="chat" type="MaterialIcons"/>
							</Fab>
						</Container>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>STATUS</Text>
						</TabHeading>}>
						<Status/>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#075E54"}}>
							<Text style={styles.textColor}>CALLS</Text>
						</TabHeading>}>
						<Calls/>
				</Tab>
			</Tabs>
		</Container>
		);
	}
}