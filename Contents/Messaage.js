import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, View, ListItem, Picker,Label } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';

export default class NewMessage extends Component {
	state = {
		contains: undefined,
		format: undefined,
	};
	onContainValueChange(value) {
		this.setState({
		contains: value
		});
	}
	onFormatValueChange(value) {
		this.setState({
            format: value
		});
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
                        <Title onPress={()=>{navigate('Chat')}}>Search</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Right>
				</Header>
					<ScrollView>
                        <ListItem noBorder button>
                            <Item stackedLabel>
                                <Icon name='person' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>Contact</Label>
                                <Input placeholder="Enter contact name"/>
                            </Item>
                        </ListItem>
                        <ListItem noBorder button>
                            <Item stackedLabel>
                                <Icon name='insert-drive-file' type="MaterialIcons" style={{fontSize: 28}}/>
                                <Label style={{fontWeight:"bold"}}>File Name</Label>
                                <Input placeholder="Enter File name"/>
                            </Item>
                        </ListItem>
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
                                    selectedValue={this.state.format}
                                    onValueChange={this.onFormatValueChange.bind(this)}
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
                            <Item picker style={{marginTop:10}}>
                                <Icon name='contain' type="MaterialCommunityIcons" style={{fontSize: 28,marginLeft:20}}/>
                                <Text style={{fontSize:15,fontWeight:"bold"}}> Contains : </Text>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined,height: 50}}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.contains}
                                    onValueChange={this.onContainValueChange.bind(this)}
                                >
                                    <Picker.Item label="Starts with" value="key0" />
                                    <Picker.Item label="Contains" value="key1" />
                                    <Picker.Item label="Ends with" value="key2" />
                                </Picker>
                            </Item>
                        </View>
				</ScrollView>
			</Container>
		);
	}
}