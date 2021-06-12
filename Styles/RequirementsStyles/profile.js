import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:"#05F8EC",
        flex: 1,
        justifyContent: "center",
    },
    circle: {
        height:130,
        width:130,
        borderRadius:100,
        backgroundColor:"#04D9CF",
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
    },
    icon:{
        height:80,
        width:80,
        alignSelf:"center"
    },
    card: {
        width:"100%",
        height:"50%",
        borderRadius:20,
        padding:20,
        backgroundColor:"#04D9CF",
        alignSelf:"center",
        alignItems: "center",
        margin:20,
        justifyContent: "center",
    },
    text:{
        fontWeight:"bold",
        fontSize:15,
        color:"#025D58",
        fontFamily:"Roboto_medium",
        alignSelf:"center"
    },
    listitem:{
        alignSelf:"center",
        marginTop:50,
    },
    cardItem: {
        marginBottom:0,
    },
    button: {
        marginTop:50,
        padding:20,
        borderWidth:1,
        borderColor:"#13B4AC",
        backgroundColor:"#04D9CF",
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
    },
})