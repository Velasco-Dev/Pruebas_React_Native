import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Platform, Modal,
  ViewStyle,
  TextStyle,
  ImageStyle,
  FlatList,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import { COLORS } from '@/constants/themes/Colors';
import { theme } from '@/constants/themes/Theme';
import Footer from '@/components/common/Footer';
export default function MenuScreen() {

  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';
  const isLargeScreen = width > 768; // Tablet/Web breakpoint

  // Define las categorías
  const [activeTab, setActiveTab] = useState<'comidas' | 'bebidas'>('comidas');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | typeof comidas[0]>(null);

  type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

  const comidas: {
    icon: MaterialIconName;
    image?: string; // Algunas comidas pueden no tener imagen
    title: string;
    description: string;
    price: string;
  }[] = [
      // 🥟 Comidas
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Empanadas de Pipián',
        description: 'Crujientes por fuera y suaves por dentro, nuestras empanadas de pipián están rellenas con una mezcla tradicional de papa criolla, maní molido y especias, acompañadas de ají de maní artesanal. Un clásico de Popayán que nunca falla.',
        price: '10 unidades x COP $ 6.000',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Tamal de Pipián',
        description: 'Preparado al estilo casero, este tamal está envuelto en hoja de plátano y relleno con pipián, condimentos típicos y el imprescindible maní. Es una joya gastronómica que combina la tradición con el sabor de hogar.',
        price: 'COP $ 6.000 c/u',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Rellena',
        description: 'La morcilla casera que ofrecemos está elaborada con arroz, sangre y especias criollas. Su sabor profundo y su textura suave hacen de este plato una experiencia auténtica de la gastronomía del Cauca.',
        price: 'Porción x COP $ 6.000',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bofe',
        description: 'Un platillo tradicional preparado con bofe (pulmón de res) bien aliñado y guisado, ideal para los amantes del sabor fuerte y típico del campo caucano.',
        price: 'Porción x COP $ 6.000',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Chicharrón',
        description: 'Crujiente, dorado y sabroso. Nuestro chicharrón es preparado al estilo tradicional, con una textura perfecta entre la carne y la grasa. Ideal para acompañar con papa o arepa.',
        price: 'Porción x COP $ 6.000',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Papa',
        description: 'Papa criolla frita en su punto, con piel y sabor natural. Ideal como acompañante o pasaboca.',
        price: 'COP $ 1.000 c/u',
      },
      {
        icon: 'lunch-dining',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Chorizo Casero',
        description: 'Elaborado con carne seleccionada y aliños de la casa, nuestro chorizo casero ofrece ese sabor ahumado y artesanal que encanta a los que buscan lo auténtico.',
        price: 'COP $ 6.000 c/u',
      },
    ];

  const bebidas: {
    icon: MaterialIconName;
    image?: string; // Algunas bebidas pueden no tener imagen
    title: string;
    description: string;
    price: string;
  }[] = [
      // 🧃 Bebidas
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Champús de la Casa',
        description: 'Refrescante bebida típica elaborada con maíz, lulo, piña, panela y especias. Nuestro champús es preparado de manera tradicional, con el sabor que conecta generaciones.',
        price: 'COP $ 6.000 c/u',
      },
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Salpicón de la Casa',
        description: 'Una bebida frutal con trozos naturales, dulce y refrescante. Perfecta para acompañar cualquier comida tradicional.',
        price: 'COP $ 6.000 c/u',
      },
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Aloha',
        description: 'Bebida industrializada con sabor a frutas tropicales. Ideal para quienes buscan una opción rápida y dulce.',
        price: 'COP $ 6.000 c/u',
      },
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lulada',
        description: 'Típica del Valle del Cauca, la lulada está hecha con lulo fresco, hielo, limón y azúcar. Refrescante y con un punto ácido encantador.',
        price: 'COP $ 6.000 c/u',
      },
      {
        icon: 'local-cafe',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Café - Tinto',
        description: 'Café cultivado en tierras colombianas, servido en su punto. El tinto es perfecto para cerrar una buena comida, y el café con leche para disfrutar en la tarde.',
        price: 'COP $ 2.500 - $ 1.500 c/u',
      },
      {
        icon: 'water-drop',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Agua 400ml',
        description: 'Agua purificada embotellada, ideal para acompañar cualquier plato o mantenerse hidratado.',
        price: 'COP $ 4.000 c/u',
      },
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Jugos Hit 500ml',
        description: 'Bebidas industriales saborizadas de frutas. Frescas, dulces y fáciles de llevar.',
        price: 'COP $ 5.000 c/u',
      },
      {
        icon: 'local-drink',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Gaseosas 400ml',
        description: 'Gaseosas clásicas colombianas: Coca-Cola, Colombiana, Sprite u otras marcas. Bien frías y servidas al instante.',
        price: 'COP $ 5.000 c/u',
      },
      {
        icon: 'sports-bar',
        image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cerveza 375ml',
        description: 'Cerveza nacional bien fría. Perfecta para acompañar chicharrón, empanadas o una tarde con amigos.',
        price: 'COP $ 5.000 c/u',
      },
    ];

  // Selecciona los datos según la pestaña activa
  const data = activeTab === 'comidas' ? comidas : bebidas;

  return (
    <View style={[styles.mainContainer, theme.container]}>
      <View style={styles.heroContainer}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Cocionamos con el alma</Text>
          <Text style={styles.heroSubtitle}>
            Conoce nuestro menú.
          </Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'comidas' && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab('comidas')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'comidas' && styles.tabButtonTextActive,
            ]}
          >
            Comidas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'bebidas' && styles.tabButtonActive,
          ]}
          onPress={() => setActiveTab('bebidas')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'bebidas' && styles.tabButtonTextActive,
            ]}
          >
            Bebidas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Lista de productos */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item);
              setModalVisible(true);
            }}
            activeOpacity={0.8}
            style={styles.featureCard}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.imageView}
              resizeMode='cover'
            />
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featurePrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedItem(null);
        }}
      >
        <View style={styles.modalOverlay}>
          <SafeAreaView style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image
                  source={{ uri: selectedItem.image }}
                  style={[isLargeScreen ? styles.aboutImageWeb : styles.aboutImageMobile, { marginBottom: 20 }]}
                  resizeMode="cover"
                />
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Text style={styles.featureDescription}>{selectedItem.description}</Text>
                <Text style={styles.featurePrice}>{selectedItem.price}</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={[theme.button.primary, { margin: 10 }]}
                >
                  <Text style={theme.button.textPrimary}>Cerrar</Text>
                </TouchableOpacity>
              </>
            )}
          </SafeAreaView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  heroContainer: {
    height: Platform.select<number | string>({
      web: '35vh',
      default: 200
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
  featuresGrid: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  tabButton: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginHorizontal: 50,
  },
  tabButtonActive: {
    paddingBottom: 10,
    borderBottomColor: COLORS.PRIMARY,
  },
  tabButtonText: {
    fontSize: 18,
    color: COLORS.GRIS,
    fontWeight: 'bold',
  },
  tabButtonTextActive: {
    color: COLORS.PRIMARY,
  },
  featureCard: {
    backgroundColor: COLORS.BLANCO,
    // padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    width: '70%',
    minWidth: 150,
    ...Platform.select({
      web: {
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT,
    // marginVertical: 10,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 16,
    color: COLORS.SECONDARY,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  featurePrice: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 35,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '80%',
    borderColor: COLORS.SECONDARY,
    borderWidth: 2,
  },
  aboutImageWeb: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    // margin: 10,
  },
  aboutImageMobile: {
    width: '95%',
    height: 200,
    borderStartEndRadius: 30,
    borderStartStartRadius: 30,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 7,
  },
  imageView: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  }
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
