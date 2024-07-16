import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    sliderStyles: {
        margin: 8,
        backgroundColor: 'rgba(44, 40, 40, 0.22)',
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        position: 'absolute',
        bottom: 40,
        left: 30,
    },
    sliderIcon: {
        width: 50,
        margin: 4,
        borderRadius: 30,
        height: 50,
        backgroundColor: 'white',
    },
    PDSsliderStyles: {
        margin: 8,
        backgroundColor: 'rgba(44, 40, 40, 0.22)',
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        position: 'absolute',
        bottom: 40,
        left: 30,
    },
    PDSsliderIcon: {
        width: 50,
        margin: 4,
        borderRadius: 30,
        height: 50,
        backgroundColor: 'white',
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
    PDSimageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    PDSimage: {
        width: '100%', // Adjust the width as needed
        height: 500, // Adjust the height as needed
        borderRadius: 10, // Adjust the border radius as needed
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
    PDSlike: {
        position: 'absolute',
        backgroundColor: 'rgba(44, 40, 40, 0.22)',
        borderRadius: 40,
        paddingVertical: 15, // Adjust vertical padding
        paddingHorizontal: 15, // Adjust horizontal padding
        top: '3%', // Adjust vertical positioning
        left: '85%', // Adjust horizontal positioning
        transform: "[{ translateX: -50% }, { translateY: -50% }]", // Center the text
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
    description: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    seeMore: {
        color: '#1e90ff',
        fontSize: 14,
        fontWeight: 'bold',
    },
})