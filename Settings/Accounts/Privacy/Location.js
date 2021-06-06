import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, ListItem} from 'native-base';
import { StatusBar, Text,ScrollView } from 'react-native';

export default class Location extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Privacy')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Privacy')}}>Live location</Title>
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
								style={{width: 150, height: 150}}
								source={require('../../../Assets/map.png')}
							>
							</Thumbnail>
					</Body>
                    <ListItem avatar button style={{marginTop:10}}>
                        <Body>
                            <Text style={{fontSize:18,color:"#075E54",marginBottom:5}}>You aren't sharing live location in any chats</Text>
                        </Body>
					</ListItem>
					<ListItem avatar noBorder button style={{marginTop:10}}>
                        <Body >
                            <Text note>Live location requires background location. You{`\n`} can manage this in your device settings.</Text>
                        </Body>
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}