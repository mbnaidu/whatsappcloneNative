import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem} from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';

export default class TwoStep extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Verification')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body  style={{marginRight:108}}>
                        <Title onPress={()=>{navigate('Verification')}}>Two-step verification</Title>
                    </Body>
				</Header>
					<ScrollView>
                        <ListItem avatar button style={{marginTop:10}}>
                            <Body>
                                <Text style={{fontSize:16}}>Enter a 6-digit PIN which you'll be asked for{`\n`}when you register your phone number with{`\n`}PIEGEON:</Text>
                            </Body>
                        </ListItem>
                    </ScrollView>
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('Verification')}}>
                    <Text style={{color:"#ffffff",letterSpacing:3}}>NEXT</Text>
                </Button>
			</Container>
		);
	}
}