import React, { ReactNode, useState } from "react";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerHeaderProps } from "@react-navigation/drawer";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import EIcon from 'react-native-vector-icons/Entypo';
import BottomNav from "../../newComponents/BottomNav";
import DrawerContent from "../../newComponents/DrawerContent"; // Ensure this import is correct
import { DrawerParamsList } from "../../../types";

const Drawer = createDrawerNavigator<DrawerParamsList>();

const HomeScreen: React.FC = () => {
    const [value, setValue] = useState<string | undefined>();

    return (
        <Drawer.Navigator
            screenOptions={{
                header: (props: DrawerHeaderProps): ReactNode => (
                    <View style={styles.menuAndLogoContainer}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity
                                style={styles.menuButton}
                                onPress={() => {
                                    props.navigation.toggleDrawer();
                                }}
                            >
                                <EIcon name="menu" size={25} color="#000000" />
                            </TouchableOpacity>

                            <View style={styles.logoContainer}>
                                <Image
                                    source={require("../../assets/logo.png")}
                                    style={{ height: 55, width: 55 }}
                                />
                            </View>
                        </View>
                    </View>
                )
            }}
            drawerContent={(props: DrawerContentComponentProps): ReactNode =>
                <DrawerContent {...props} />
            }>
            <Drawer.Screen
                name="BottomNav"
                component={BottomNav}
                options={{
                    title: "Home"
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: "80%",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "center",
        position: "absolute",
        top: 50,
        borderRadius: 10,
        height: 45,
    },
    logoContainer: {
        backgroundColor: "#FFFFFF",
        borderColor: "#B80028",
        borderWidth: 2,
        borderRadius: 50,
        overflow: "hidden",
        marginRight: "38%"
    },
    menuAndLogoContainer: {
        marginTop: 20,
        flex: 2,
    },
    menuButton: {
        zIndex: 1,
        backgroundColor: "white",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    }
});

export default HomeScreen;
