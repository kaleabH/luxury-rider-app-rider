import React, { ReactElement } from 'react';
import {  View, StyleSheet } from 'react-native';

// import * as S from './styles';

const Container: React.FC<{childern:ReactElement}> = props => {
  return (
<View style={styles.container}>
    {props.childern}
</View>
  );
};
const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        paddingTop:65,
        paddingRight: 16.1254,
        paddingBottom:0,
        gap: 11.52,
        position: "absolute",
        width: 416.96,
        height: 356.21,
        left: 5.52,
        bottom: 558,
        backgroundColor: "#FFFFFF",
        // boxShadow: "6.46053px 5.16842px 6.46053px 7.75263px rgba(0, 0, 0, 0.15)",
        shadowColor: 'rgba(0, 0, 0, 0.15)', // Color of the shadow
        shadowOffset: { width: 6.46, height: 5.17 }, // Horizontal and vertical offsets
        shadowOpacity: 0.15, // Opacity of the shadow color
        shadowRadius: 6.46, // Blur radius
        elevation: 10, // Elevation for Android (adjust as needed)
        // backgroundColor: 'white', // Set a background color if needed
        padding: 10, // Additional styles
        borderRadius: 12.9211,
    }
});
export default Container;