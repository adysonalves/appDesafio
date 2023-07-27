import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#20232A"
    },
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    titleResult:{
        color: '#86B300',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    resultArea:{
        flex: 1,
        alignItems: 'center'
    },
    titlePrice:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    },
    result:{
        color: '#fff',
        fontSize: 16,
    },
    closeButton:{
        width: '55%',
        height: 45,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButtonText:{
        color: 'orange',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default style;