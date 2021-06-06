import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, ListItem, Switch, Radio } from 'native-base';
import { Text, Modal, ScrollView } from 'react-native';
import styles from '../../Styles/First';

export default class Backup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled:false,
            isEnabled2:true,
            driveStatus: 'Daily',
            accountStatus: 'madhucharliehash@gmail.com',
            backupStatus: 'Wi-Fi or Cellular',
        };
    }
    state = {
        // LAST SEEN
            driveModalVisible: false,
            driveShow: false,
        // PROFILE PHOTO
            accountShow: false,
            accountModalVisible: false,
        // ABOUT
            backupShow: false,
            backupModalVisible: false,
	};
    // Last Seen
	setDriveModalVisible = (visible) => {
		this.setState({ driveModalVisible: visible });
	};
    // Profile Photo
    setAccountModalVisible = (visible) => {
		this.setState({ accountModalVisible: visible });
	};
    // About
    setBackupModalVisible = (visible) => {
		this.setState({ backupModalVisible: visible });
	};
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
    call2 = () => {
		this.setState({ isEnabled2: !this.state.isEnabled2 });
	}
	render() {
        // last seen
            const { driveModalVisible } = this.state;
        // profile photo
            const { accountModalVisible } = this.state;
        // about
            const { backupModalVisible } = this.state;
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
                        <Title onPress={()=>{navigate('Chats')}}>Chat backup</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar button style={{marginTop:10}} >
                        <Left>
                            <Button transparent>
                                <Icon name='backup' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Last backup</Text>
                            <Text note >Back up your messages and media to Google{`\n`}Drive. You can restore them when you{`\n`}reinstall Piegeon. Your messages will also{`\n`}back up to your phone's internal storage.</Text>
                            <View style={{marginTop:10}}>
                                <Text style={{fontSize: 15,marginTop:3,fontFamily:"Roboto_medium"}}>Local: 2:15 AM</Text>
                                <Text style={{fontSize: 15,marginTop:3,fontFamily:"Roboto_medium"}}>Google Drive: 4:23 AM</Text>
                                <Text style={{fontSize: 15,marginTop:3,fontFamily:"Roboto_medium"}}>Size: 700 MB</Text>
                            </View>
                            <View>
                                <Button style={{backgroundColor:"#075E54",padding:30,margin:20}}>
                                    <Text style={{color:"#ffffff"}}>BACK UP</Text>
                                </Button>
                            </View>
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button>
                        <Left>
                            <Button transparent>
                                <Icon name='google-drive' type="MaterialCommunityIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold",marginBottom:10}}>Google Drive settings</Text>
                            <Text note>Messages and media backed up in Google{`\n`}Drive are not protected by Piegeon{`\n`}end-to-end Encryption</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ driveShow: true });this.setDriveModalVisible(!driveModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='add-to-drive' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Back up to Google Drive</Text>
                            <Text note >{this.state.driveStatus}</Text>
                            {!this.state.driveShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={driveModalVisible}
                                    onRequestClose={() => {
                                        this.setDriveModalVisible(!driveModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ driveStatus: 'Daily' });this.setDriveModalVisible(!driveModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setDriveModalVisible(!driveModalVisible);this.setState({ driveStatus: 'Daily' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.driveStatus == 'Daily'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Daily</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ driveStatus: 'Never' });this.setDriveModalVisible(!driveModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ driveStatus: 'Never' });this.setDriveModalVisible(!driveModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.driveStatus == 'Never'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Never</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ driveStatus: 'Monthly' });this.setDriveModalVisible(!driveModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ driveStatus: 'Monthly' });this.setDriveModalVisible(!driveModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.driveStatus == 'Monthly'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Monthly</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ driveStatus: 'Weekly' });this.setDriveModalVisible(!driveModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ driveStatus: 'Weekly' });this.setDriveModalVisible(!driveModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.driveStatus == 'Weekly'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Weekly</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem noBorder button>
                                                <Text style={{color:"#075E54",fontWeight:"bold",margin:10,alignSelf:"flex-end",textAlignVertical:'bottom'}} onPress={() => {this.setDriveModalVisible(!driveModalVisible);}}>Cancel</Text>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ accountShow: true });this.setAccountModalVisible(!accountModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='google' type="Fontisto" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Google Account</Text>
                            <Text note >{this.state.accountStatus}</Text>
                            {!this.state.accountShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={accountModalVisible}
                                    onRequestClose={() => {
                                        this.setAccountModalVisible(!accountModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ accountStatus: '18pa1a1213@vishnu.edu.in' });this.setAccountModalVisible(!accountModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setAccountModalVisible(!accountModalVisible);this.setState({ accountStatus: '18pa1a1213@vishnu.edu.in' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.accountStatus == '18pa1a1213@vishnu.edu.in'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>18pa1a1213@vishnu.edu.in</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ accountStatus: 'madhucharliehash@gmail.com' });this.setAccountModalVisible(!accountModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ accountStatus: 'madhucharliehash@gmail.com' });this.setAccountModalVisible(!accountModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.accountStatus == 'madhucharliehash@gmail.com'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>madhucharliehash@gmail.com</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ accountStatus: 'Add account' });this.setAccountModalVisible(!accountModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ accountStatus: 'Add account' });this.setAccountModalVisible(!accountModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.accountStatus == 'Add account'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Add account</Text>
                                                </Body>
                                                
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ backupShow:true });this.setBackupModalVisible(!backupModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='backup' type="MaterialIcons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"#075E54",fontWeight:"bold"}}>Back up over</Text>
                            <Text note >{this.state.backupStatus}</Text>
                            {!this.state.backupShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={backupModalVisible}
                                    onRequestClose={() => {
                                        this.setBackupModalVisible(!backupModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ backupStatus: 'Wi-Fi' });this.setBackupModalVisible(!backupModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setBackupModalVisible(!backupModalVisible);this.setState({ backupStatus: 'Wi-Fi' });}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.backupStatus == 'Wi-Fi'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Wi-Fi</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ backupStatus: 'Wi-Fi or cellular' });this.setBackupModalVisible(!backupModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ backupStatus: 'Wi-Fi or cellular' });this.setBackupModalVisible(!backupModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"#075E54"}
                                                        selected={this.state.backupStatus == 'Wi-Fi or cellular'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17,marginRight:55}}>Wi-Fi or cellular</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginBottom: 20}}>
                        <Left>
                            <Button transparent>
                                <Icon name='file-media' type="Octicons" style={{fontSize: 28,color:"#128C7E"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"#075E54",fontWeight:"bold"}}>Include videos</Text>
                        </Body>
                        <Right>
                            <Switch
                                trackColor={{false:'#767577', true:"#128C7E"}}
                                thumbColor={this.state.isEnabled2 ? '#075E54' : "#767577"}
                                value={this.state.isEnabled2}
                                onChange={this.call2}
                            >
                            </Switch>
                        </Right>
                    </ListItem>
				</ScrollView>
			</Container>
		);
	}
}