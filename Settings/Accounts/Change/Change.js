import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,ListItem } from 'native-base';
import { StatusBar, Text,ScrollView } from 'react-native';

export default class Change extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Accounts')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Accounts')}}>Change number</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
					<ScrollView>
					<Body>
						<Thumbnail
								square
								style={{width: 150, height: 150,marginTop:20}}
								source={require('../../../Assets/migrate.png')}
							>
							</Thumbnail>
					</Body>
                    <ListItem avatar button style={{marginTop:10}}>
                        <Body>
                            <Text style={{fontSize:18,color:"#075E54",marginBottom:5}}>Changing your phone number will migrate{`\n`}your account info, groups &amp; settings.</Text>
                        </Body>
					</ListItem>
					<ListItem avatar noBorder button style={{marginTop:10}}>
                        <Body >
                            <Text note>Before proceeding, please confirm that you are able to receive SMS or calls at your new number{`\n`}</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button >
                        <Body >
                            <Text note>If you have both a new phone &amp; a new number,{`\n`}first change your number on your old phone.</Text>
                        </Body>
					</ListItem>
				</ScrollView>
                <Button full light style={{backgroundColor:"#075E54"}} onPress={()=>{navigate('NewNumber')}}>
                    <Text style={{color:"#ffffff",letterSpacing:3}}>NEXT</Text>
                </Button>
			</Container>
		);
	}
}