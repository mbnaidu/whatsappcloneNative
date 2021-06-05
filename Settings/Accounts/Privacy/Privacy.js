import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio, List } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../../Styles/First';

export default class Privacy extends Component {
    constructor() {
        super();
            this.state = {
                // Last seen
                    lastSeenStatus: 'Everyone',
                // Profile photo
                    profilePhotoStatus: 'My contacts',
                // About
                    aboutStatus: 'Nobody',
        }
    }
    state = {
        // LAST SEEN
            lastSeenModalVisible: false,
            lastseenshow: false,
        // PROFILE PHOTO
            profilephotoshow: false,
            profilePhotoModalVisible: false,
        // ABOUT
            aboutshow: false,
            aboutModalVisible: false,
	};
    // Last Seen
	setLastSeenModalVisible = (visible) => {
		this.setState({ lastSeenModalVisible: visible });
	};
    // Profile Photo
    setProfilePhotoModalVisible = (visible) => {
		this.setState({ profilePhotoModalVisible: visible });
	};
    // About
    setAboutModalVisible = (visible) => {
		this.setState({ aboutModalVisible: visible });
	};
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
        // last seen
            const { lastSeenModalVisible } = this.state;
        // profile photo
            const { profilePhotoModalVisible } = this.state;
        // about
            const { aboutModalVisible } = this.state;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Accounts')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Privacy</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar noBorder button style={{marginTop:10}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54",marginBottom:5}}>Who can see my personal info</Text>
                            <Text note >If you don't share your last seen, you won't be able {`\n`}to see other people's Last seen</Text>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ lastseenshow: true });this.setLastSeenModalVisible(!lastSeenModalVisible);}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Last seen</Text>
                            <Text note >{this.state.lastSeenStatus}</Text>
                            {!this.state.lastseenshow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={lastSeenModalVisible}
                                    onRequestClose={() => {
                                        this.setLastSeenModalVisible(!lastSeenModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ lastSeenStatus: 'Everyone' });this.setLastSeenModalVisible(!lastSeenModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setLastSeenModalVisible(!lastSeenModalVisible);this.setState({ lastSeenStatus: 'Everyone' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.lastSeenStatus == 'Everyone'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Everyone</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ lastSeenStatus: 'My contacts' });this.setLastSeenModalVisible(!lastSeenModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ lastSeenStatus: 'My contacts' });this.setLastSeenModalVisible(!lastSeenModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.lastSeenStatus == 'My contacts'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>My contacts</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ lastSeenStatus: 'Nobody' });this.setLastSeenModalVisible(!lastSeenModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ lastSeenStatus: 'Nobody' });this.setLastSeenModalVisible(!lastSeenModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.lastSeenStatus == 'Nobody'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Nobody</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ profilephotoshow: true });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>My contacts</Text>
                            <Text note >{this.state.profilePhotoStatus}</Text>
                            {!this.state.profilephotoshow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={profilePhotoModalVisible}
                                    onRequestClose={() => {
                                        this.setProfilePhotoModalVisible(!profilePhotoModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ profilePhotoStatus: 'Everyone' });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setProfilePhotoModalVisible(!profilePhotoModalVisible);this.setState({ profilePhotoStatus: 'Everyone' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.profilePhotoStatus == 'Everyone'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Everyone</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ profilePhotoStatus: 'My contacts' });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ profilePhotoStatus: 'My contacts' });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.profilePhotoStatus == 'My contacts'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>My contacts</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ profilePhotoStatus: 'Nobody' });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ profilePhotoStatus: 'Nobody' });this.setProfilePhotoModalVisible(!profilePhotoModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.profilePhotoStatus == 'Nobody'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Nobody</Text>
                                                </Body>
                                                
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ aboutshow:true });this.setAboutModalVisible(!aboutModalVisible);}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>About</Text>
                            <Text note >{this.state.aboutStatus}</Text>
                            {!this.state.aboutshow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={aboutModalVisible}
                                    onRequestClose={() => {
                                        this.setAboutModalVisible(!aboutModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ aboutStatus: 'Everyone' });this.setAboutModalVisible(!aboutModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setAboutModalVisible(!aboutModalVisible);this.setState({ aboutStatus: 'Everyone' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.aboutStatus == 'Everyone'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Everyone</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ aboutStatus: 'My contacts' });this.setAboutModalVisible(!aboutModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ aboutStatus: 'My contacts' });this.setAboutModalVisible(!aboutModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.aboutStatus == 'My contacts'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:55}}>My contacts</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ aboutStatus: 'Nobody' });this.setAboutModalVisible(!aboutModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ aboutStatus: 'Nobody' });this.setAboutModalVisible(!aboutModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.aboutStatus == 'Nobody'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:85}}>Nobody</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Status')}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Status</Text>
                            <Text note >My contacts</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Groups')}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Groups</Text>
                            <Text note >Everyone</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Location')}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Live Location</Text>
                            <Text note >None</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Blocked')}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Blocked Contacts</Text>
                            <Text note >3</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Lock')}}>
                        <Body >
                            <Text style={{fontSize:18,color:"#075E54"}}>Fingerprint lock</Text>
                            <Text note >Disabled</Text>
                        </Body>
                    </ListItem>
                </ScrollView>
			</Container>
		);
	}
}