import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Chat Header
    chatBody:{
        marginLeft:40,
    },
    chatBodyTextHeading1:{
        color:"snow",
        fontWeight:"bold",
        fontSize:18,
    },
    chatBodyTextHeading2:{
        color:"snow",
        fontSize:11,
    },
    headerBackgroundColor:{
        backgroundColor:"#075E54"
    },
    // Chat Footer
    chatFooter:{
        width:"100%",
        height:"100%",
        backgroundColor:'#BFA5A5',
    },
    // search bar
    searchSection: {
        marginTop:"157%",
        width:300,
        height:50,
        alignSelf:"stretch",
        marginRight:80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:50,
    },
    searchIcon: {
        alignSelf:"auto",
        marginLeft:-20,
        marginRight:10,
        height:30,
        width:30,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius:50,
        fontSize:17,
    },
    // speaker
    speaker:{
        marginBottom: 45,
        backgroundColor:"#075E54"
    },
    attachment:{
        color:"#AEA3A3",
        padding:15,
        fontSize:25,
    },
    cameraalt:{
        marginRight:-20,
        color:"#AEA3A3",
    }
})