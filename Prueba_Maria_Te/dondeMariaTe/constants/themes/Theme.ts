import { COLORS } from './Colors';
import { Platform, ViewStyle } from 'react-native';

export const theme = {
    Colors: COLORS,
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    } as const,
    typography: {
        h1: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#2c3e50',
        },
        h2: {
            fontSize: 24,
            fontWeight: '600',
            color: '#2c3e50',
        },
        body: {
            fontSize: 16,
            color: '#2c3e50',
        },
        body2: {
            fontSize: 12,
            color: '#2c3e50',
        },
        button: {
            fontSize: 18,
            fontWeight: '600',
        },
    } as const,
    button: {
        primary: {
            backgroundColor: COLORS.PRIMARY,
            padding: 10,
            borderRadius: 10,
            width: 'auto',
            alignSelf: 'center',
            // marginVertical: 10,
            // Sombras base para iOS
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Sombra para Android
            elevation: 5,
        } as const,
        secondary: {
            backgroundColor: COLORS.SECONDARY,
            padding: 10,
            borderRadius: 10,
            width: 'auto',
            alignSelf: 'center',
            // marginVertical: 10,
            // Sombras base para iOS
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Sombra para Android
            elevation: 5,
        } as const,
        textPrimary: {
            color: COLORS.BLANCO,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
        } as const,
        registerButtonText: {
            color: COLORS.PRIMARY,
            textAlign: 'center',
            fontSize: 14,
            textDecorationLine: 'underline',
            paddingTop: 15,
        } as const,
        logout: {
            backgroundColor: COLORS.ERROR,
            padding: 15,
            borderRadius: 10,
            width: 'auto',
            margin: 10,
            // Sombras base para iOS
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Sombra para Android
            elevation: 5,
        } as const,
        editar: {
            backgroundColor: COLORS.ACCENT,
            padding: 5,
            borderRadius: 10,
            width: 'auto',
            margin: 10,
            // Sombras base para iOS
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Sombra para Android
            elevation: 5,
        } as const,
        buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        } as const,
        icon: {
            marginRight: -3,
        } as const,
    },
    row: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    card: {
        //width: 'auto', // Ancho del 45% para dejar espacio entre cards
        backgroundColor: COLORS.BLANCO,
        borderRadius: 10,
        // padding: 10,
        marginVertical: 8,
        alignItems: 'center',
        // Sombras
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                margin: 5,
                width: '30%',  //Ancho del 45% para dejar espacio entre cards
                elevation: 5,
            },
            web: {
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }
        }),
        buttonCardContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        actionCardButton: {
            padding: 8,
            borderRadius: 5,
        },
        header: {
            flexDirection: 'row',
            backgroundColor: COLORS.GRIS,
            color: COLORS.BLANCO,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: '100%',
            padding: 10,
            alignSelf: 'center'
        }
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.TEXT,
    },
    info: {
        fontSize: 14,
        color: COLORS.SECONDARY,
        marginBottom: 4,
    },
    picker: {
        // marginBottom: open ? 200 : 10, 
        zIndex: 6000,
        borderWidth: 1,
        borderColor: COLORS.SECONDARY,
        borderRadius: 5,
        backgroundColor: COLORS.BACKGROUND,
        color: COLORS.TEXT,
        width: '100%',
        ...Platform.select({
            web: {
                height: 40,
            },
            android: {
                height: 50,
            },
            ios: {
                height: 150,
            }
        }),
    },
    flatList: {
        flex: 1,
        width: '100%',
    },
    flatListContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    form: {
        alignSelf: 'center',
        justifyContent: 'center',
        ...Platform.select({
            web: {
                width: '70%', // Más pequeño en web
                // maxWidth: 400, // Tamaño máximo para pantallas grandes
                // minWidth: 300, // Tamaño mínimo para que sea usable
            },
            default: {
                width: '100%', // Mantiene el 100% en móvil
            }
        }),
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 2,
        padding: 10,
        backgroundColor: COLORS.BLANCO,
        // Reemplaza boxShadow (que no funciona en React Native) por:
        ...Platform.select({
            web: {
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
            default: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }
        }),
    },
    formRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    formEditRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    inputContainer: {
        width: '48%', // Deja un pequeño espacio entre inputs
    },
    container: {
        ...Platform.select({
            web: {
                userSelect: 'none',
                cursor: 'default',
            }
        })
    } as ViewStyle,
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        ...Platform.select({
            web: {
                userSelect: 'none'
            }
        }),
        alignSelf: 'center'
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center'
    },
    emptyText: {
        color: COLORS.SECONDARY,
        fontSize: 16
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: COLORS.TEXT,
        alignSelf: 'center'
    },
    inputFilter: {
        borderWidth: 1,
        borderColor: COLORS.ACCENT,
        borderRadius: 5,
        padding: 10,
        marginTop: 25,
        marginBottom: 5,
        backgroundColor: COLORS.BLANCO,
        color: COLORS.SECONDARY,
        width: '80%',
        alignSelf: 'center',
        ios: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        android: {
            elevation: 5,
        },
        web: {
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }
    },
    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    } as ViewStyle,
};