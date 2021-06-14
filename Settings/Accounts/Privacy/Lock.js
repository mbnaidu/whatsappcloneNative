import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, ListItem, Switch} from 'native-base';
import { StatusBar, Text, ScrollView } from 'react-native';

export default class Lock extends Component {
	constructor(props) {
        super(props);
        this.state = {
			isEnabled:false,
        };
    }
    call = () => {
		this.setState({ isEnabled: !this.state.isEnabled });
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={{backgroundColor:"#05F8EC",width:"100%"}} button>
					<Left>
						<Button transparent onPress={()=>{navigate('Privacy')}}>
							<Icon name='arrow-back' type="MaterialIcons" style={{fontSize: 28,color:"black"}}/>
						</Button>
					</Left>
					<Body>
                        <Title onPress={()=>{navigate('Privacy')}} style={{color:"#000000"}}>Fingerprint lock</Title>
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
							<Text style={{fontSize:18,color:"black",marginBottom:5}}>Unlock with fingerprint</Text>
							<Text note >When enabled, you'll need to use {`\n`} fingerprint to open Piegon. You can still{`\n`}answer calls if Piegeon is locked.</Text>
						</Body>
						<Right>
							<Switch
								trackColor={{false:'#767577', true:"#128C7E"}}
								thumbColor={this.state.isEnabled ? '#05F8EC' : "#767577"}
								value={this.state.isEnabled}
								onChange={this.call}
							>
							</Switch>
						</Right>
					</ListItem>
				</ScrollView>
			</Container>
		);
	}
}