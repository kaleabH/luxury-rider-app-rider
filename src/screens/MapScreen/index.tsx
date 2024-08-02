import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, TextInput, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BurgerMenu from '../../newComponents/BurgerMenu'; // Adjust the path as necessary
import carImage from '../../assets/cars/car4.jpg';
import RideHistoryCard from '../../newComponents/RideHistoryCard'; // Adjust the path as necessary

const MapScreen: React.FC = () => {
    const [phase, setPhase] = useState<number>(1);
    const [startLocation, setStartLocation] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [locations, setLocations] = useState<string[]>([]);
    const navigation = useNavigation();

    const handleAddStop = () => {
        setLocations([...locations, '']);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 8.9831,
                    longitude: 38.8101,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
            </MapView>
            <BurgerMenu />
            <View style={[styles.panel, phase > 1 && styles.panelExpanded]}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {phase === 1 ? (
                        <View style={styles.inputContainerHorizontal}>
                            <Image
                                source={carImage}
                                style={styles.carImage}
                            />
                            <TextInput
                                placeholder="Where to..."
                                style={styles.inputHorizontal}
                                onFocus={() => setPhase(2)}
                            />
                            <TouchableOpacity>
                                <IconButton
                                    icon="apps"
                                    size={24}
                                    iconColor='#B80028'
                                    onPress={() => navigation.navigate('Services')}
                                    style={styles.servicesButton}
                                />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.inputContainerVertical}>
                            <Card style={styles.inputCard}>
                                <TextInput
                                    label="Start"
                                    placeholder="Start"
                                    value={startLocation}
                                    onChangeText={setStartLocation}
                                    style={styles.input}
                                />
                            </Card>
                            {locations.map((location, index) => (
                                <Card key={index} style={styles.inputCard}>
                                    <TextInput
                                        label={`Stop ${index + 1}`}
                                        placeholder={`Stop ${index + 1}`}
                                        value={location}
                                        onChangeText={(text) => {
                                            const newLocations = [...locations];
                                            newLocations[index] = text;
                                            setLocations(newLocations);
                                        }}
                                        style={styles.input}
                                    />
                                </Card>
                            ))}
                            <TouchableOpacity style={styles.plusIconContainer}>
                                <IconButton
                                    icon="plus"
                                    size={24}
                                    iconColor='#B80028'
                                    onPress={handleAddStop}
                                    style={styles.plusIcon}
                                />
                            </TouchableOpacity>
                            <Card style={styles.inputCard}>
                                <TextInput
                                    label="Destination"
                                    placeholder="Destination"
                                    value={destination}
                                    onChangeText={setDestination}
                                    style={styles.input}
                                />
                            </Card>
                        </View>
                    )}
                
                    {(phase === 2 || phase === 3) && (
                        <View style={styles.historyContainer}>
                            <View style={styles.historyContent}>
                                <RideHistoryCard 
                                    startLocation="Bole, Addis Ababa, Ethiopia" 
                                    destination="Skylight Hotel" 
                                    price="2000birr" 
                                    date="2024-08-01" 
                                />
                                <RideHistoryCard 
                                    startLocation="Iebu, Addis Ababa, Ethiopia" 
                                    destination="Hilton Hotel" 
                                    price="1500birr" 
                                    date="2024-07-30" 
                                />
                                <RideHistoryCard 
                                    startLocation="Piyasa, Addis Ababa, Ethiopia" 
                                    destination="Skylight Hotel" 
                                    price="birr1800" 
                                    date="2024-07-28" 
                                />
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 8,
    },
    panel: {
        flex: 2, // Adjusted to allow growth
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
    },
    panelExpanded: {
        flex: 8, // Increase the height when expanded
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    inputContainerHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    inputContainerVertical: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Adjusted to align items at the top
        padding: 20,
        position: 'relative',
    },
    carImage: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    inputHorizontal: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        color:'#B80028',
        borderRadius: 10,
        marginRight: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '100%',
    },
    inputCard: {
        width: '100%',
        marginBottom: 5,
        borderRadius: 10,
        elevation: 3,
        padding: 5,
    },
    servicesButton: {
        marginLeft: 10,
    },
    plusIconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 50,
        padding: 5,
    },
    plusIcon: {
        margin: 0,
    },
    historyContainer: {
        flex: 1,
        padding: 10,
    },
    historyContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
});

export default MapScreen;
