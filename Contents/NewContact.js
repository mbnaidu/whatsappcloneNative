import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class NewContact extends Component {
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
						<Button transparent onPress={()=>{navigate('Home')}}>
							<Icon name='close' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Create Contact</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
				<Item picker>
                    <Text>       Save contact to . . .   </Text>
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
					<ScrollView vertical={true}>
						<Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="person" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
							<Input placeholder="First Name" style={{borderBottomWidth: 2,borderBottomColor: '#000000'}}/>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
                            <Icon name="person" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
							<Input placeholder="Last Name" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="apartment" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
                            <Input placeholder="Company" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
						</Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="call" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
                            <Input placeholder="Contact Number" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
						</Header>
                        <View style={{height:60}}>
                            <Item picker style={{borderBottomWidth: 0,borderBottomColor:"#000000"}}>
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
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="email" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
                            <Input placeholder="E-mail" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
                        </Header>
                        <View style={{height:60}}>
                            <Item picker style={{borderBottomWidth: 0,borderBottomColor:"#000000"}}>
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
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="add-location" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
								<Input placeholder="Address" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
						</Header>
                        <View style={{height:60}}>
                            <Item picker style={{borderBottomWidth: 0,borderBottomColor:"#000000"}}>
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
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Icon name="vpn-lock" type="MaterialIcons" style={{fontSize:28,marginTop:15,marginRight:10}}/>
                            <Input placeholder="Website" style={{borderBottomWidth: 2,borderBottomColor: '#000000',width:200}}/>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
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
                        <View style={{height:60}}>
                            <Item picker style={{borderBottomWidth: 0,borderBottomColor:"#000000"}}>
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
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('Home')}}>
                    <Text style={{color:"#ffffff"}}>Save</Text>
                </Button>
			</Container>
		);
	}
}