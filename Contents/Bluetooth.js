import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Bluetooth extends Component {
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
							<Icon name='close' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Bluetooth Message</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
                <ScrollView vertical={true}>
                    <Card>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='contacts' type="AntDesign" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Contact</Label>
                                <Input placeholder="Enter Contact Number"/>
                            </Item>
                        </Header>
                    </Card>
                    <Card>
                        <Header noLeft style={styles.newcontactheader} noBorder>
							<Item stackedLabel>
                                <Icon name='message1' type="AntDesign" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Message</Label>
                                <Input placeholder="Enter Message Here. . ."/>
                            </Item>
                        </Header>
                    </Card>
                    <Card>
                        <View>
                            <Item picker style={{marginTop:10}}>
                                <Icon name='unknowfile1' type="AntDesign" style={{fontSize: 28,marginLeft:20}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Format : </Text>
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
                                    <Picker.Item label="PDF" value="key0" />
                                    <Picker.Item label="PNG" value="key1" />
                                    <Picker.Item label="JPG" value="key2" />
                                    <Picker.Item label="DOC" value="key3" />
                                    <Picker.Item label="XLSX" value="key4" />
                                </Picker>
                            </Item>
                        </View>
                    </Card>
                </ScrollView>
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('Chat')}}>
                    <Text style={{color:"#ffffff"}}>SEND MESSAGE</Text>
                </Button>
			</Container>
		);
	}
}