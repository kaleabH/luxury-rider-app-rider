import * as React from 'react';
import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import { Card, TextInput, IconButton, Button, Text } from 'react-native-paper';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const openFilterModal = () => setModalVisible(true);
  const closeFilterModal = () => setModalVisible(false);

  const selectService = (service: string) => {
    setSelectedService(service);
    closeFilterModal();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.searchContainer}>
          <IconButton icon="magnify" size={24} />
          <TextInput
            placeholder="Search"
            value={searchQuery}
            onChangeText={onChangeSearch}
            style={styles.input}
          />
          <TouchableOpacity onPress={openFilterModal}>
            <IconButton icon="filter-variant" size={24} />
          </TouchableOpacity>
        </View>
      </Card>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeFilterModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <Text style={styles.modalTitle}>Filter Services</Text> */}
            {['VIP', 'VVIP', 'Corporate'].map(service => (
              <Button 
                key={service} 
                mode={selectedService === service ? 'contained' : 'outlined'} 
                onPress={() => selectService(service)}
                style={styles.serviceButton}
              >
                {service}
              </Button>
            ))}
            <Button onPress={closeFilterModal} style={styles.closeButton}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor:'#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    flex: 1,
    // marginHorizontal: 5,
    backgroundColor:"#FFFFFF"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  serviceButton: {
    marginVertical: 2,
    width: '100%',
  },
  closeButton: {
    marginTop: 16,
  },
});

export default SearchComponent;
