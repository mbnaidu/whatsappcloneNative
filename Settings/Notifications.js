import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, Item, Input, Content, Fab, View, ListItem, Badge, Switch, Card, CardItem, Picker, DatePicker, Label, Radio } from 'native-base';
import { StatusBar, Text, TextInput,Image, Keyboard, Modal,Pressable, TouchableWithoutFeedback, ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vibrateStatus: 'Default',
            isEnabled:false,
            isEnabled2:true,
            notificationsStatus: 'Default',
            ringtoneStatus: 'Default',
            callStatus: 'Default',
        };
    }
    state = {
        // LAST SEEN
            notificationsModalVisible: false,
            notificationsShow: false,
        // PROFILE PHOTO
            vibrateShow: false,
            vibrateModalVisible: false,
        // PROFILE PHOTO
            ringtoneShow: false,
            ringtoneModalVisible: false,
        // ABOUT
            callShow: false,
            callModalVisible: false,
	};
    // Last Seen
	setNotificationsModalVisible = (visible) => {
		this.setState({ notificationsModalVisible: visible });
	};
    // Profile Photo
    setRingtoneModalVisible = (visible) => {
		this.setState({ ringtoneModalVisible: visible });
	};
    // About
    setCallModalVisible = (visible) => {
		this.setState({ callModalVisible: visible });
	};
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
    call2 = () => {
		this.setState({ isEnabled2: !this.state.isEnabled2 });
	}
    // Profile Photo
    setVibrateModalVisible = (visible) => {
		this.setState({ vibrateModalVisible: visible });
	};
	render() {
        // last seen
            const { notificationsModalVisible } = this.state;
        // profile photo
            const { ringtoneModalVisible } = this.state;
        // about
            const { callModalVisible } = this.state;
        // 
            const { vibrateModalVisible } = this.state;
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#075E54",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Settings')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28}}/>
						</Button>
					</Left>
					<Body>
                        <Title>Notifications</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <Text style={{fontSize: 18,color:"#075E54",margin:10,fontWeight:"bold"}}>Messages</Text>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ notificationsShow: true });this.setNotificationsModalVisible(!notificationsModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='notification' type="AntDesign" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Notifications</Text>
                            <Text note >{this.state.notificationsStatus}</Text>
                            {!this.state.notificationsShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={notificationsModalVisible}
                                    onRequestClose={() => {
                                        this.setNotificationsModalVisible(!notificationsModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ notificationsStatus: 'Default' });this.setNotificationsModalVisible(!notificationsModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setNotificationsModalVisible(!notificationsModalVisible);this.setState({ notificationsStatus: 'Default' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.notificationsStatus == 'Default'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Default</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ vibrateShow: true });this.setVibrateModalVisible(!vibrateModalVisible);}}>
                        <Left>
                            <Button transparent>
                                    <Icon name='volume-vibrate' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                                </Button>
                            </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Vibrate</Text>
                            <Text note >{this.state.vibrateStatus}</Text>
                            {!this.state.vibrateShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={vibrateModalVisible}
                                    onRequestClose={() => {
                                        this.setVibrateModalVisible(!vibrateModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ vibrateStatus: 'Off' });this.setVibrateModalVisible(!vibrateModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setVibrateModalVisible(!vibrateModalVisible);this.setState({ vibrateStatus: 'Off' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.vibrateStatus == 'Off'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Off</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ vibrateStatus: 'Default' });this.setVibrateModalVisible(!vibrateModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ vibrateStatus: 'Default' });this.setVibrateModalVisible(!vibrateModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.vibrateStatus == 'Default'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Default</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ vibrateStatus: 'Short' });this.setVibrateModalVisible(!vibrateModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ vibrateStatus: 'Short' });this.setVibrateModalVisible(!vibrateModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.vibrateStatus == 'Short'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Short</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ vibrateStatus: 'Long' });this.setVibrateModalVisible(!vibrateModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ vibrateStatus: 'Long' });this.setVibrateModalVisible(!vibrateModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.vibrateStatus == 'Long'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Long</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <Text style={{fontSize: 18,color:"#075E54",margin:10,fontWeight:"bold"}}>Calls</Text>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ ringtoneShow: true });this.setRingtoneModalVisible(!ringtoneModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='folder-music' type="Entypo" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Ringtone</Text>
                            <Text note >{this.state.ringtoneStatus}</Text>
                            {!this.state.ringtoneShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={ringtoneModalVisible}
                                    onRequestClose={() => {
                                        this.setRingtoneModalVisible(!ringtoneModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ ringtoneStatus: 'Default' });this.setRingtoneModalVisible(!ringtoneModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setRingtoneModalVisible(!ringtoneModalVisible);this.setState({ ringtoneStatus: 'Default' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.ringtoneStatus == 'Default'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Default</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ callShow:true });this.setCallModalVisible(!callModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='volume-vibrate' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Vibrate</Text>
                            <Text note >{this.state.callStatus}</Text>
                            {!this.state.callShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={callModalVisible}
                                    onRequestClose={() => {
                                        this.setCallModalVisible(!callModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ callStatus: 'Default' });this.setCallModalVisible(!callModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setCallModalVisible(!callModalVisible);this.setState({ callStatus: 'Default' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.callStatus == 'Default'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Default</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ callStatus: 'Short' });this.setCallModalVisible(!callModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ callStatus: 'Short' });this.setCallModalVisible(!callModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.callStatus == 'Short'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:55}}>Short</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ callStatus: 'Medium' });this.setCallModalVisible(!callModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ callStatus: 'Medium' });this.setCallModalVisible(!callModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.callStatus == 'Medium'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:85}}>Medium</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ callStatus: 'Long' });this.setCallModalVisible(!callModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ callStatus: 'Long' });this.setCallModalVisible(!callModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.callStatus == 'Long'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:85}}>Long</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                </ScrollView>
			</Container>
		);
	}
}