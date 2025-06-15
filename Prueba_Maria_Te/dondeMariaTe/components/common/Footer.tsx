import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS } from '../../constants/themes/Colors';
import { theme } from '../../constants/themes/Theme';
import Colors from '@/constants/Colors';

import { ExternalLink } from '../ExternalLink';

import { Text as TText } from '@/components/Themed';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <View style={[styles.footerContainer, theme.container]}>
            <View style={styles.footerContent}>
                {/* Sección de información de la empresa */}
                <View style={styles.footerSection}>
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    {/* <Text style={styles.footerTitle}>MercApp</Text> */}
                    <Text style={[styles.footerText, { fontStyle: 'italic' }]}>
                        "Sabor que abraza"
                    </Text>
                    <View style={styles.socialIcons}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
                            <MaterialIcons name="facebook" size={26} color={COLORS.BLANCO} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
                            <Entypo name="twitter-with-circle" size={24} color={COLORS.BLANCO} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
                            <Entypo name="instagram-with-circle" size={24} color={COLORS.BLANCO} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Sección de contacto */}
                <View style={styles.footerSection}>
                    <Text style={styles.footerTitle}>Contacto</Text>
                    <Text style={styles.footerText}>
                        <MaterialIcons name="email" size={16} color={COLORS.BLANCO} /> mariaTeContact@gmail.com
                    </Text>
                    <ExternalLink
                        style={styles.footerText}
                        href="https://wa.me/573157667269?text=Hola, me gustaría saber más sobre Donde Maria Te.">
                        <Text >
                            <MaterialIcons name="phone" size={16} color={COLORS.BLANCO} /> +57 3157667269
                        </Text>
                    </ExternalLink>
                    <Text style={styles.footerText}>
                        <MaterialIcons name="location-on" size={16} color={COLORS.BLANCO} /> Popayán, Cauca, Colombia
                    </Text>
                </View>
            </View>

            {/* Copyright */}
            <View style={styles.copyright}>
                <Text style={styles.copyrightText}>
                    © {currentYear} Donde Maria Te. Todos los derechos reservados
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: COLORS.PRIMARY,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 40,
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: 1200,
        alignSelf: 'center',
        width: '100%',
    },
    footerSection: {
        width: Platform.OS === 'web' ? '50%' : '100%',
        justifyContent: 'center',
        // alignContent: 'center'
    },
    footerTitle: {
        ...theme.typography.h2,
        color: COLORS.BLANCO,
        marginBottom: 15,
        textAlign: 'center',
        marginTop: 20,

    },
    footerText: {
        ...theme.typography.body,
        color: COLORS.BLANCO,
        marginVertical: 5,
        textAlign: 'center',
    },
    socialIcons: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly'
    },
    icon: {
        marginRight: 15,
    },
    link: {
        marginVertical: 5,
    },
    copyright: {
        borderTopWidth: 1,
        borderTopColor: COLORS.BLANCO + '50',
        paddingTop: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    copyrightText: {
        ...theme.typography.body2,
        color: COLORS.BLANCO,
        opacity: 0.8,
        marginBottom: 15,
    },
    logo: {
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});

export default Footer;