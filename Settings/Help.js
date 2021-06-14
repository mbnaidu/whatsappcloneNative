import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';

export default class Help extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Settings')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Settings')}} style={{color:"#000000"}}>Help</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                <Icon name='help' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>Help center</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                    <Icon name='persons' type="Fontisto" style={{fontSize: 28,color:"#05F8EC"}}/>
                                </Button>
                            </Left>
                        <Body>
                            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>Contact us</Text>
                            <Text note>Questions? Need help?</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                <Icon name='file-contract' type="FontAwesome5" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 18,color:"black",fontWeight:"bold"}}>Terms and Privacy policy</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}}>
                        <Left>
                            <Button transparent>
                                <Icon name='info' type="Octicons" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 18,color:"black",fontWeight:"bold"}}>App Info</Text>
                        </Body>
					</ListItem>
                </ScrollView>
			</Container>
		);
	}
}