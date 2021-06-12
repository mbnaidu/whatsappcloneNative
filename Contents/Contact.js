import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, View, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Contact extends Component {
    constructor(props) {
		super(props);
		this.state = { chosenDate: new Date() };
		this.setDate = this.setDate.bind(this);
	}
	state = {
        device:undefined,
        place1:undefined,
        place2: undefined,
		place3: undefined,
		occasion: undefined,
	};
	onDeviceValueChange(value) {
		this.setState({
            device:value
		});
	}
    onPlace1ValueChange(value) {
		this.setState({
            place1: value
		});
	}
	onPlace2ValueChange(value) {
		this.setState({
            place2: value
		});
	}
	onPlace3ValueChange(value) {
		this.setState({
            place3: value
		});
	}
    onOccasionValueChange(value) {
		this.setState({
            occasion: value
		});
	}
    setDate(newDate) {
		this.setState({ chosenDate: newDate });
	}
	render() {
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
                        <Title onPress={()=>{navigate('Chat')}}>Create Contact</Title>
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
                        selectedValue={this.state.device}
                        onValueChange={this.onDeviceValueChange.bind(this)}
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
                                    selectedValue={this.state.place1}
                                    onValueChange={this.onPlace1ValueChange.bind(this)}
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
                                    selectedValue={this.state.place2}
                                    onValueChange={this.onPlace2ValueChange.bind(this)}
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
                                    selectedValue={this.state.place3}
                                    onValueChange={this.onPlace3ValueChange.bind(this)}
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
                                    selectedValue={this.state.occasion}
                                    onValueChange={this.onOccasionValueChange.bind(this)}
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