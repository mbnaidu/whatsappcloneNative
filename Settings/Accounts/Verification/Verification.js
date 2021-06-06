import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title, Thumbnail,ListItem} from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';

export default class Verification extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Accounts')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body  style={{marginRight:108}}>
                        <Title onPress={()=>{navigate('Accounts')}}>Two-step verification</Title>
                    </Body>
				</Header>
					<ScrollView>
					<Body>
						<Thumbnail
								square
								style={{width: 150, height: 150,marginTop:30}}
								source={require('../../../Assets/verification.png')}
							>
							</Thumbnail>
					</Body>
                    <ListItem avatar button style={{marginTop:10}}>
                        <Body>
                            <Text style={{fontSize:16}}>For added security, enable two-step verification,{`\n`}which will require a PIN when registering your{`\n`}phone number with Piegeon again</Text>
                        </Body>
					</ListItem>
				</ScrollView>
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('TwoStep')}}>
                    <Text style={{color:"#ffffff",letterSpacing:3}}>ENABLE</Text>
                </Button>
			</Container>
		);
	}
}