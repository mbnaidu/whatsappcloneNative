import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, ListItem, Radio } from 'native-base';
import { StatusBar, Text,Modal,ScrollView } from 'react-native';
import styles from '../Styles/First';

export default class Storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wifiStatus: 'No media',
            mobileStatus: 'No media',
        };
    }
    state = {
        // Mobile Modal
            mobileModalVisible: false,
            mobileShow: false,
        //Wi-Fi Modal
            wifiShow: false,
            wifiModalVisible: false,
	};
    // Mobile Modal
	setMobileModalVisible = (visible) => {
		this.setState({ mobileModalVisible: visible });
	};
    //Wi-Fi Modal
    setWifiModalVisible = (visible) => {
		this.setState({ wifiModalVisible: visible });
	};
	render() {
        // MOBILE model
            const { mobileModalVisible } = this.state;
        // WIFI model
            const { wifiModalVisible } = this.state;
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
                        <Title onPress={()=>{navigate('Settings')}} style={{color:"#000000"}}>Storage and Data</Title>
                    </Body>
					<Right>
						<Button transparent>
							<Icon name='more-vert' type="MaterialIcons" style={{fontSize: 0}}/>
						</Button>
					</Right>
				</Header>
				<ScrollView>
                    <ListItem avatar button>
                        <Left>
                            <Button transparent>
                                <Icon name='storage' type="MaterialIcons" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize: 16,color:"black",fontWeight:"bold"}}>Manage storage</Text>
                            <Text note >1.0 GB</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button>
                        <Body>
                            <Text style={{fontSize: 14,color:"black",fontWeight:"bold",marginBottom:10}}>Media auto-download</Text>
                            <Text note >  Voice messages are always automatically{`\n`}  downloaded</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ mobileShow: true });this.setMobileModalVisible(!mobileModalVisible);}}>
                        <Left>
                            <Button transparent>
                                <Icon name='mobile1' type="AntDesign" style={{fontSize: 28,color:"#05F8EC"}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>When using mobile data</Text>
                            <Text note >{this.state.mobileStatus}</Text>
                            {!this.state.mobileShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={mobileModalVisible}
                                    onRequestClose={() => {
                                        this.setMobileModalVisible(!mobileModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ mobileStatus: 'No media' });this.setMobileModalVisible(!mobileModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setMobileModalVisible(!mobileModalVisible);this.setState({ mobileStatus: 'No media' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.mobileStatus == 'No media'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>No media</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ mobileStatus: 'Photos' });this.setMobileModalVisible(!mobileModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setMobileModalVisible(!mobileModalVisible);this.setState({ mobileStatus: 'Photos' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.mobileStatus == 'Photos'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Photos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ mobileStatus: 'Audio' });this.setMobileModalVisible(!mobileModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setMobileModalVisible(!mobileModalVisible);this.setState({ mobileStatus: 'Audio' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.mobileStatus == 'Audio'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Audio</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ mobileStatus: 'Videos' });this.setMobileModalVisible(!mobileModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setMobileModalVisible(!mobileModalVisible);this.setState({ mobileStatus: 'Videos' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.mobileStatus == 'Videos'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Videos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ mobileStatus: 'Documents' });this.setMobileModalVisible(!mobileModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setMobileModalVisible(!mobileModalVisible);this.setState({ mobileStatus: 'Documents' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.mobileStatus == 'Documents'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Documents</Text>
                                                </Body>
                                            </ListItem>
                                        </View>
                                    </View>
                                </Modal>
							</View>
                            )}
                        </Body>
					</ListItem>
                    <ListItem avatar noBorder button style={{marginTop:10}} onPress={()=>{this.setState({ wifiShow: true });this.setWifiModalVisible(!wifiModalVisible);}}>
                        <Left>
                            <Button transparent>
                                    <Icon name='wifi-logo' type="Fontisto" style={{fontSize: 28,color:"#05F8EC"}}/>
                                </Button>
                            </Left>
                        <Body>
                            <Text style={{fontSize:16,color:"black",fontWeight:"bold"}}>When connected on Wi-Fi</Text>
                            <Text note >{this.state.wifiStatus}</Text>
                            {!this.state.wifiShow ? (<View></View>) : (
                                <View style={styles.centeredView}>
                                    <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={wifiModalVisible}
                                    onRequestClose={() => {
                                        this.setWifiModalVisible(!wifiModalVisible);
                                    }}
                                    >
                                    <View style={styles.privacycenteredView}>
                                        <View style={styles.modalView}>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ wifiStatus: 'No media' });this.setWifiModalVisible(!wifiModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setWifiModalVisible(!wifiModalVisible);this.setState({ wifiStatus: 'No media' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.wifiStatus == 'No media'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>No media</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ wifiStatus: 'Photos' });this.setWifiModalVisible(!wifiModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ wifiStatus: 'Photos' });this.setWifiModalVisible(!wifiModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.wifiStatus == 'Photos'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Photos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ wifiStatus: 'Audio' });this.setWifiModalVisible(!wifiModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setWifiModalVisible(!wifiModalVisible);this.setState({ wifiStatus: 'Audio' });}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.wifiStatus == 'Audio'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Audio</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ wifiStatus: 'Videos' });this.setWifiModalVisible(!wifiModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ wifiStatus: 'Videos' });this.setWifiModalVisible(!wifiModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.wifiStatus == 'Videos'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Videos</Text>
                                                </Body>
                                            </ListItem>
                                            <ListItem avatar noBorder button onPress={() => {this.setState({ wifiStatus: 'Documents' });this.setWifiModalVisible(!wifiModalVisible);}}>
                                                <Left>
                                                    <Radio
                                                        onPress={() => {this.setState({ wifiStatus: 'Documents' });this.setWifiModalVisible(!wifiModalVisible);}}
                                                        color={"#808080"}
                                                        selectedColor={"black"}
                                                        selected={this.state.wifiStatus == 'Documents'}
                                                    />
                                                </Left>
                                                <Body>
                                                    <Text style={{fontSize:17}}>Documents</Text>
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