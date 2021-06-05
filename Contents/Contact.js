import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Contact extends Component {
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
						<Button transparent onPress={()=>{navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
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
                        style={{ width: undefined,height: 50}}
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
							<Item stackedLabel>
                                <Icon name='person' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>First Name</Label>
                                <Input placeholder="Enter First name"/>
                            </Item>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='person' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Last Name</Label>
                                <Input placeholder="Enter Last name"/>
                            </Item>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='apartment' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Company</Label>
                                <Input placeholder="Enter Company name"/>
                            </Item>
                        </Header>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='call' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Contact</Label>
                                <Input placeholder="Contact Number"/>
                            </Item>
                        </Header>
                        <View>
                            <Item picker>
                                <Icon name='place' type="MaterialIcons" style={{fontSize: 28,marginLeft:10}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Place : </Text>
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
                                    <Picker.Item label="Place" value="key0" />
                                    <Picker.Item label="Home" value="key1" />
                                    <Picker.Item label="Pager" value="key2" />
                                    <Picker.Item label="Home pager" value="key3" />
                                    <Picker.Item label="Office pager" value="key4" />
                                </Picker>
                            </Item>
                        </View>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='email' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>E-mail</Label>
                                <Input placeholder="E-mail"/>
                            </Item>
                        </Header>
                        <View>
                            <Item picker>
                                <Icon name='place' type="MaterialIcons" style={{fontSize: 28,marginLeft:10}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Place : </Text>
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
                                    <Picker.Item label="Place" value="key0" />
                                    <Picker.Item label="Home" value="key1" />
                                    <Picker.Item label="Pager" value="key2" />
                                    <Picker.Item label="Home pager" value="key3" />
                                    <Picker.Item label="Office pager" value="key4" />
                                </Picker>
                            </Item>
                        </View>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='add-location' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Address</Label>
                                <Input placeholder="Address"/>
                            </Item>
                        </Header>
                        <View>
                            <Item picker>
                                <Icon name='place' type="MaterialIcons" style={{fontSize: 28,marginLeft:10}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Place : </Text>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined,height: 50}}
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
							<Item stackedLabel>
                                <Icon name="globe" type="Entypo" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Website</Label>
                                <Input placeholder="Website Link"/>
                            </Item>
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
                        <View>
                            <Item picker>
                                <Icon name='place' type="MaterialIcons" style={{fontSize: 28,marginLeft:10}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Occasion : </Text>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined,height: 50}}
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
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('Chat')}}>
                    <Text style={{color:"#ffffff"}}>Save</Text>
                </Button>
			</Container>
		);
	}
}