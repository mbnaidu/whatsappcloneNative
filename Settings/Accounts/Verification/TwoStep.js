import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem} from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';


export default function TwoStep({navigation}) {
	return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigation.navigate('Verification')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body  style={{marginRight:108}}>
                        <Title onPress={()=>{navigation.navigate('Verification')}} style={{color:"#000000"}}>Two-step verification</Title>
                    </Body>
				</Header>
					<ScrollView>
                        <ListItem avatar button style={{marginTop:10}}>
                            <Body>
                                <Text style={{fontSize:16}}>Enter a 6-digit PIN which you'll be asked for{`\n`}when you register your phone number with{`\n`}PIEGEON:</Text>
                            </Body>
                        </ListItem>
                    </ScrollView>
                <Button full light style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigation.navigate('Verification')}}>
                    <Text style={{color:"black",letterSpacing:3,fontWeight:"bold"}}>NEXT</Text>
                </Button>
			</Container>
		);
}
