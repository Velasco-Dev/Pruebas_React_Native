import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Platform, Modal,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

// import { Text, View } from '@/components/Themed';

import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import { COLORS } from '@/constants/themes/Colors';
import { theme } from '@/constants/themes/Theme';
import Footer from '@/components/common/Footer';
export default function AboutScreen() {

  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = width > 768; // Tablet/Web breakpoint

  const features = [
    {
      icon: 'store',
      title: 'Acerca de',
      description: 'Somos una pequeña empresa familiar, que lleva más de 25 años ofreciendo lo mejor de la gastronomía Patoja a propios y extrangeros.'
    },
    {
      icon: 'trending-up',
      title: 'Misión',
      description: 'Ofrecer con amor y tradición lo mejor de la gastronomía Patoja, rescatando sabores y saberes auténticos que conectan generaciones, brindando a propios y visitantes una experiencia cálida, familiar y llena de identidad cultural.'
    },
    {
      icon: 'people',
      title: 'Visión',
      description: 'Ser reconocidos como un referente de la cocina típica Patoja en el Cauca, destacándonos por nuestra autenticidad, hospitalidad y compromiso con la preservación de las tradiciones gastronómicas del Departamento.'
    }
  ];

  return (
    <View style={[styles.mainContainer, theme.container]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={isWeb}
      >
        {/* Hero Banner */}
        <View style={styles.heroContainer}>
          <Image
            source={require('../../assets/images/rp.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Somos Patojos de Corazón</Text>
            <Text style={styles.heroSubtitle}>
              por eso cocinamos con alma, tradición y ese sabor que te hace sentir en casa.
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Nosotros</Text>
          <View style={[styles.featuresGrid, isLargeScreen && { flexDirection: 'row' }]}>
            {features.map((feature, index) => (
              <View
                key={index}
                style={[
                  styles.featureCard,
                  isLargeScreen && { width: '30%', marginHorizontal: '1.5%' }
                ]}
              >
                <MaterialIcons
                  name={feature.icon as keyof typeof MaterialIcons.glyphMap}
                  size={isLargeScreen ? 50 : 40}
                  color={COLORS.PRIMARY}
                />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Por qué preferirnos?</Text>
          <View style={isLargeScreen ? styles.aboutContentWeb : styles.aboutContentMobile}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              style={isLargeScreen ? styles.aboutImageWeb : styles.aboutImageMobile}
              resizeMode="cover"
            />
            <Text style={styles.aboutText}>
              Aquí no solo servimos comida, {' '}<Text style={{ fontWeight: 'bold' }}>servimos tradición</Text>. 
              Cada plato está preparado con recetas heredadas, ingredientes locales y el cariño de una familia que lleva 
              más de 25 años conservando el verdadero sabor Patojo.
              {' '}<Text style={{ fontWeight: 'bold' }}>Elegirnos es sentirte en casa</Text>, 
              revivir la cocina de la abuela y apoyar lo nuestro.
            </Text>
          </View>
        </View>

        {/* CTA Section 
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>¿Listo para empezar?</Text>
          <TouchableOpacity
            // onPress={() => setModalVisible(true)}
            style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Comenzar Ahora</Text>
          </TouchableOpacity>
        </View>*/}

        <Footer />

      </ScrollView>
      {/* <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Solicita un Rol</Text>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.optionButton}
                onPress={() => {
                  setAlertVisible(true)
                  PushAdminNotification(option)
                }}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal> */}

      {/* <CustomAlert
        visible={alertVisible}
        status={alertStatus}
        title={alertTitle}
        message={alertMessage}
        onClose={() => {
          if (alertStatus !== 'loading') {
            setAlertVisible(false);
          } // Solo resetear si no está cargando
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create<Styles>({
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.TEXT,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  optionButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
  },
  heroContainer: {
    height: Platform.select<number | string>({
      web: '50vh',
      default: 300
    }),
    width: '100%',
    position: 'relative',
  } as ViewStyle,
  heroImage: {
    width: '100%',
    height: '100%',
    ...Platform.select({
      web: { objectFit: 'cover' },
      default: { resizeMode: 'cover' }
    })
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: Platform.select({ web: 48, default: 36 }),
    fontWeight: 'bold',
    color: COLORS.BLANCO,
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: Platform.select({ web: 24, default: 18 }),
    color: COLORS.BLANCO,
    textAlign: 'center',
    maxWidth: 600,
  },
  section: {
    padding: 20,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: Platform.select({ web: 32, default: 28 }),
    fontWeight: 'bold',
    color: COLORS.TEXT,
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresGrid: {
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  featureCard: {
    backgroundColor: COLORS.BLANCO,
    padding: 20,
    marginBlock: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    ...Platform.select({
      web: {
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      },
      default: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
  featureTitle: {
    fontSize: Platform.select({ web: 24, default: 20 }),
    fontWeight: 'bold',
    color: COLORS.TEXT,
    marginVertical: 10,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: COLORS.SECONDARY,
    textAlign: 'justify',
  },
  aboutContentWeb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aboutContentMobile: {
    alignItems: 'center',
  },
  aboutImageWeb: {
    width: '48%',
    height: 300,
    borderRadius: 10,
  },
  aboutImageMobile: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    margin: 20,

  },
  aboutText: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: COLORS.SECONDARY,
    lineHeight: Platform.select({ web: 28, default: 24 }),
    textAlign: 'justify',
    paddingInline: 20,
    marginBottom: 10,
    ...Platform.select({
      web: {
        width: '100%',
      },
      default: {
        width: '100%',
      }
    })
  },
  ctaSection: {
    padding: 20,
    backgroundColor: COLORS.PRIMARY,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: Platform.select({ web: 30, default: 24 }),
    fontWeight: 'bold',
    color: COLORS.BLANCO,
    marginBottom: 20,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: COLORS.BLANCO,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  } as ViewStyle,
  ctaButtonText: {
    fontSize: Platform.select({ web: 20, default: 18 }),
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
});

interface Styles {
  mainContainer: ViewStyle;
  scrollView: ViewStyle;
  scrollContent: ViewStyle;
  heroContainer: ViewStyle;
  heroImage: ImageStyle;
  heroOverlay: ViewStyle;
  heroTitle: TextStyle;
  heroSubtitle: TextStyle;
  section: ViewStyle;
  sectionTitle: TextStyle;
  featuresGrid: ViewStyle;
  featureCard: ViewStyle;
  aboutContentWeb: ViewStyle;
  aboutContentMobile: ViewStyle;
  aboutImageWeb: ImageStyle;
  aboutImageMobile: ImageStyle;
  aboutText: TextStyle;
  featureTitle: TextStyle;
  featureDescription: TextStyle;
  ctaSection: ViewStyle;
  ctaTitle: TextStyle;
  ctaButton: ViewStyle;
  ctaButtonText: TextStyle;
  modalTitle: TextStyle;
  modalOverlay: ViewStyle;
  modalContent: ViewStyle;
  optionButton: ViewStyle;
  optionText: TextStyle;
  // ...resto de estilos
}
