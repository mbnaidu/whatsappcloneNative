import React, { Component, useState } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, View, ListItem, Picker,Label } from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';



export default function Search({navigation}) {
    const [format,setFormat] = useState(undefined);
    const [contains,setContains] = useState(undefined);
    return (
        <Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigation.navigate('Chat')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigation.navigate('Chat')}}>Search</Title>
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
                                    selectedValue={format}
                                    onValueChange={value => {setFormat(value)}}
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
                                    selectedValue={contains}
                                    onValueChange={value => {setContains(value)}}
                                >
                                    <Picker.Item label="Starts with" value="key0" />
                                    <Picker.Item label="Contains" value="key1" />
                                    <Picker.Item label="Ends with" value="key2" />
                                </Picker>
                            </Item>
                        </View>
				</ScrollView>
                <Button full light style={{backgroundColor:"#05F8EC"}} onPress={()=>{navigation.navigate('Chat')}}>
                    <Text style={{color:"#ffffff"}}>SEARCH</Text>
                </Button>
			</Container>
    )
}