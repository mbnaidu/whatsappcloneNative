import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // appbar
    appTitle:{
        fontSize:22,
        color:"snow"
    },
    headerBackgroundColor:{
        backgroundColor:"#075E54"
    },
    tabBarUnderline:{
        height:2
    },
    // first Text
    firstText:{
        marginTop:5,
        fontWeight:"bold"
    },
    // tabColorText
    textColor:{
        fontWeight:"bold",
        color:"snow",
        fontSize:15,
    },
    // badge
    badge: {
        height:24,
        width:24,
        backgroundColor:"#ECE5DD",
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center"
    },
    badgeText:{
        alignSelf:"center",
        fontSize:12,
        color:"#075E54"
    },
    //Chat Page
    badgeChats:{
        backgroundColor:"#25D366",
        height:28,
        width:28,
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center",
        marginTop: 4,
    },
    badgeChatsText:{
        fontSize:14,
        color:"snow"
    },
    // Status Page
    addStatusIcon:{
        color:"#25D366",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:35,
        bottom:-10,
        width:25,
        fontSize:23,
        marginBottom:10,
    },
    recentUpdate:{
        marginTop:10,
    },
    viewedUpdate:{
        marginTop:10,
    },
})