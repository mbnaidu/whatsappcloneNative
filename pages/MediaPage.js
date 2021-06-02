import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, TabHeading, Badge, Thumbnail, ListItem, Fab, View } from 'native-base';
import { ScrollView, StatusBar, Text } from 'react-native';
import styles from '../Styles/First';

export default class MediaPage extends Component {
	render() {
		StatusBar.setBackgroundColor('#128C7E',true);
		const { navigate } = this.props.navigation;
		return (
		<Container >
			<Header style={styles.mediaHeader}>
				<Left>
                    <Button transparent onPress={()=>{navigate('ChatPage')}}>
					<Icon name='arrow-back' type="MaterialIcons" style={{color:"#075E54",fontSize:28,marginRight:30}} />
					<Text style={{color:"#000000",fontWeight:'bold',fontSize:20}}>Hanuman</Text>
				</Button>
                </Left>
                <Right>
                    <Icon name='search' type="MaterialIcons" style={{color:"#075E54",fontSize:28,alignSelf:"center"}} />
                </Right>
			</Header>
			<Tabs initialPage={0}
				tabBarBackgroundColor="#075E54"
				tabContainerStyle={{elevation:0}}
				tabBarUnderlineStyle={{ backgroundColor: "#075E54" }}
			>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#ffffff"}}>
							<Text style={styles.mediaSubHeaderText}>MEDIA </Text>
						</TabHeading>}>
						<Container>
                            <Text style={{textAlign:"center",flex:1,textAlignVertical:"center"}}>
                                No photos found
                            </Text>
						</Container>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#ffffff"}}>
							<Text style={styles.mediaSubHeaderText}>DOCS</Text>
						</TabHeading>}>
                        <Container>
                            <Text style={{textAlign:"center",flex:1,textAlignVertical:"center"}}>
                                No DOCS found
                            </Text>
						</Container>
				</Tab>
				<Tab 
					heading={
						<TabHeading style={{backgroundColor:"#ffffff"}}>
							<Text style={styles.mediaSubHeaderText}>LINKS</Text>
						</TabHeading>}>
                        <Container>
                            <Text style={{textAlign:"center",flex:1,textAlignVertical:"center"}}>
                                No LINKS found
                            </Text>
						</Container>
				</Tab>
			</Tabs>
		</Container>
		);
	}
}