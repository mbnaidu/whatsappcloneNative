import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title, Item, Input,View, Card, Picker, Label } from 'native-base';
import { StatusBar, Text,ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Bluetooth extends Component {
	state = {
        pdf: undefined,
	};
	onValueChange(value) {
		this.setState({
			pdf: value
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
                        <Title onPress={()=>{navigate('Chat')}}>Bluetooth Message</Title>
                    </Body>
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
                                    pdfValue={this.state.pdf}
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
                    <Text style={{color:"#ffffff",letterSpacing:3}}>SEND MESSAGE</Text>
                </Button>
			</Container>
		);
	}
}