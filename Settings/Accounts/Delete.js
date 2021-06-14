import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title, Item, Input, Fab, View, ListItem,Label } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';


export default function Delete({navigation}) {
    return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigation.navigate('Accounts')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body style={{marginRight:150}}>
                        <Title  onPress={()=>{navigation.navigate('Accounts')}} style={{color:"#000000"}}>Delete my account</Title>
                    </Body>
				</Header>
					<ScrollView>
                    <ListItem avatar noBorder button onPress={() =>{navigation.navigate('Accounts')}}>
                        <Left>
                            <Button transparent onPress={()=>{navigation.navigate('Chat')}}>
                                <Icon name='alert' type="Foundation" style={{fontSize: 28,color:"red"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <View>
                                <View>
                                    <Text style={{fontSize:18}}>Deleting your account will:</Text>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:15}}>&#8226; Delete your account from Piegeon</Text>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:15}}>&#8226; Erase your message history</Text>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:15}}>&#8226; Delete you from all your Piegeon groups</Text>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:15}}>&#8226; Delte your Google Drive backup</Text>
                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:15}}>&#8226; Delete your payments history and cancel{`\n`}  any pending payments</Text>
                                </View>
                            </View>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent onPress={()=>{navigation.navigate('Chat')}}>
                                <Icon name='sign-out' type="Octicons" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:18}}>Change number instead</Text>
                            <Button style={{backgroundColor:"#05F8EC",padding:30,marginTop:10}} onPress={() =>{navigation.navigate('Change')}}>
                                <Text style={{color:"black"}}>CHANGE NUMBER</Text>
                            </Button>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button>
                        <Body>
                            <View>
                                <Text style={{fontSize:16}}>To delete your account, confirm your{`\n`}country code and enter your phone number.{`\n`}</Text>
                            </View>
                            <View>
                                <Item stackedLabel>
                                    <Icon name='call' type="MaterialIcons" style={{fontSize: 28}}/>
                                    <Label style={{fontWeight:"bold"}}>Contact</Label>
                                    <Input placeholder="Contact Number"/>
                                </Item>
                            </View>
                        </Body>
                    </ListItem>
				</ScrollView>
                <Fab position="bottomRight" style={{backgroundColor:"red"}} onPress={() =>{navigation.navigate('Chat')}}>
					<Icon name="delete" type="MaterialIcons" style={{color:"#ffffff",fontSize:28}}/>
				</Fab>
			</Container>
		);
}