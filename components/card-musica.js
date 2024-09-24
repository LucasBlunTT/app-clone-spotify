import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { colors } from '../styles/colors';

export default function CardMusica({ imgAlbum, artista, duracao }) {
  // Inicializa o valor de opacidade para a animação
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Configura e inicia a animação de fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <Image source={imgAlbum} style={styles.cardImage} />
      <View style={styles.bodyCard}>
        <View style={styles.topCard}>
          <Text style={styles.singer}>{artista}</Text>
          <TouchableOpacity>
            <Text style={styles.follow}>Seguir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.monthlyListeners}>
            {duracao} ouvintes mensais
          </Text>
          <Text style={styles.detailsArtist}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequatur fugiat, impedit tempore iste id debitis voluptatem animi
            eos sunt beatae quos? Vitae quos accusamus amet iusto asperiores
            quod vel?
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  cardImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  bodyCard: {
    padding: 20,
    backgroundColor: colors.bgcard,
  },
  topCard: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  singer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.title,
  },
  follow: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: colors.title,
    fontSize: 15,
    fontWeight: 'bold',
  },
  monthlyListeners: {
    color: colors.title,
    marginBottom: 10,
  },
  detailsArtist: {
    color: colors.title,
  },
});
