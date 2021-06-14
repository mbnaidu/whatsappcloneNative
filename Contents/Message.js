import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title,Item, Input,Card, Label } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Message extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Chat')}} style={{color:"black"}}>General Message</Title>
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
                </ScrollView>
                <Button full light style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigate('Chat')}}>
                    <Text style={{color:"black",letterSpacing:3,fontWeight:"bold"}}>SEND MESSAGE</Text>
                </Button>
			</Container>
		);
	}
}