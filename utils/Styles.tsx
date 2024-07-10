import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    sliderStyles: {
        margin: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        position: 'absolute',
        bottom: 40,
    },
    sliderIcon: {
        width: 50,
        margin: 4,
        borderRadius: 5,
        height: 50,
        backgroundColor: 'red',
    },
    PDScontainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    PDSimgLogo: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    PDSheader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    PDSproductContainer: {
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
    },
    PDSproductImage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
    },
    PDSproductName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    PDSproductPrice: {
        fontSize: 18,
        color: '#888',
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    slide: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#A1CEDC',
    },
    tabBar: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        elevation: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})