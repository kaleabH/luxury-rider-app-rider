import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const BurgerMenu: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <IconButton
                icon="menu"
                size={24}
                color="white"
                onPress={() => navigation.openDrawer()}
                style={styles.menuButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',
        top: 40,
        left: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        zIndex: 1,
    },
    menuButton: {
        margin: 0,
    },
});

export default BurgerMenu;
