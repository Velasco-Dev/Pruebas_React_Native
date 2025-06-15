import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Modal, TouchableOpacity, 
  View as RNView, Text as RNText, SafeAreaView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { theme } from '@/constants/themes/Theme';

type ModalScreenProps = {
  visible: boolean;
  onClose: () => void;
};

export const ModalScreen = ({ visible, onClose }: ModalScreenProps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >

      <SafeAreaView style={styles.modalContainer}>

        <RNView style={styles.container}>
          <Text style={styles.title}>Paga aquí</Text>
          <RNView style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/nequi.jpeg')}
              style={{ width: 255, height: 385, resizeMode: 'contain', borderRadius: 10 }}
            />
          </RNView>
          {/* Use a light status bar on iOS to account for the black space above the modal */}
          {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
          {/* Botones */}
          <RNView style={theme.modalActions}>
            <TouchableOpacity
              style={theme.button.secondary}
              onPress={onClose}
            >
              <RNText style={theme.button.textPrimary}>Cerrar</RNText>
            </TouchableOpacity>
          </RNView>
        </RNView>

      </SafeAreaView>

    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.BLANCO,
    maxHeight: '80%',
    paddingBlock: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '80%',
      },
      android: {
        width: '80%',
        elevation: 5,
      },
      web: {
        width: '80%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    }),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    color: theme.Colors.SECONDARY,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
