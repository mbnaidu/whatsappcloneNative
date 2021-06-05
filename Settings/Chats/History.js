import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio, CheckBox } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled:false,
            isEnabled2:true,
            displayStatus: 'Light',
            profilePhotoStatus: 'My contacts',
            aboutStatus: 'Nobody',
        };
    }
    state = {
        // LAST SEEN
            displayModalVisible: false,
            displayShow: false,
        // PROFILE PHOTO
            profilephotoshow: false,
            profilePhotoModalVisible: false,
        // ABOUT
            aboutshow: false,
            aboutModalVisible: false,
	};
    // Last Seen
	setDisplayModalVisible = (visible) => {
		this.setState({ displayModalVisible: visible });
	};
    // Profile Photo
    setProfilePhotoModalVisible = (visible) => {
		this.setState({ profilePhotoModalVisible: visible });
	};
    // About
    setAboutModalVisible = (visible) => {
		this.setState({ aboutModalVisible: visible });
	};
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
    call2 = () => {
		this.setState({ isEnabled2: !this.state.isEnabled2 });
	}
	render() {
        // last seen
            const { displayModalVisible } = this.state;
        // profile photo
            const { profilePhotoModalVisible } = this.state;
        // about
            const { aboutModalVisible } = this.state;
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Chats')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Chat History</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{navigate('Choose')}}>
                        <Left>
                            <Button transparent>
                                <Icon name='send' type="FontAwesome" style={{fontSize: 30,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Export Chat</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ displayShow: true });this.setDisplayModalVisible(!displayModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='delete-alert' type="MaterialCommunityIcons" style={{fontSize: 30,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Delete all chats</Text>
                        </Body>
                        {!this.state.displayShow ? (<View></View>) : (
                            <View style={styles.centeredView}>
                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={displayModalVisible}
                                    onRequestClose={() => {
                                        this.setDisplayModalVisible(!displayModalVisible);
                                    }}
                                    >
                                    <View>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button>
                                                <Body>
                                                    <Text style={{fontSize:18,marginBottom:10}}>Are you sure you want to delete ALL chats and their messages?</Text><CheckBox color="green" checked/>
                                                    <Text style={{fontSize:16,marginLeft:50,marginTop:-23}}>Delete media in chats</Text>
                                                </Body>
                                            </ListItem>
                                            <Fab position="bottomRight" style={{backgroundColor:"#25D366"}}>
                                                <Icon name="delete" type="MaterialIcons"/>
                                            </Fab>
                                        </View>
                                    </View>
                                    <Footer style={{backgroundColor:"#ffffff"}} button onPress={() =>{this.setDisplayModalVisible(!displayModalVisible);}}>
                                        <Text style={{fontSize:16,marginTop:10,marginLeft:300,width:"100%"}} onPress={() =>{this.setDisplayModalVisible(!displayModalVisible);}}>Cancel</Text>
                                    </Footer>
                                </Modal>
							</View>
                        )}
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}