import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BAZZAAR</Text>
        <Icon style={styles.icon} name='bars' size={26} color='white' />
      </View>
      <ScrollView style={styles.list}>
        <Image style={styles.image} source={require('./img/casaco.jpg')} resizeMode='contain' />
        <Image style={styles.image} source={require('./img/calca.jpg')} resizeMode='contain' />
        <Image style={styles.image} source={require('./img/blusa.jpg')} resizeMode='contain' />
        <Image style={styles.image} source={require('./img/camisa.jpg')} resizeMode='contain' />
        <View>
          <Image style={styles.imageShop} source={require('./img/roupas.jpg')} resizeMode='contain' />
          <Text style={styles.descriptionTitle}> Bem vindos ao BAZZAAR</Text>
          <Text style={styles.descriptionText}>Nossos produtos são inspirados pelas pessoas a nossa volta, com suas belezas e qualidades. </Text>
          <Text style={styles.descriptionText}>Produtos de bom gosto especialmente para você. Descubra our story e aproveite as promoções. </Text>
          <Image style={styles.imageFachada} source={require('./img/fachada.jpg')} resizeMode='contain' />
          <Text style={styles.descriptionTextShop}>Rua Eusébio 10,</Text>
          <Text style={styles.descriptionTextShop}>Centro, Cidade das águas</Text>
          <Text style={styles.descriptionTextShop}>Aberta de segunda à sexta</Text>
          <Text style={styles.descriptionTextShop}>das 10:00 às 12:00</Text>
          <Text style={styles.social}>Siga-nos</Text>
          <View style={styles.socialIcons}>
            <Icon style={styles.singleIcon} name='facebook-square' size={30} />
            <Icon style={styles.singleIcon} name='twitter-square' size={30} />
            <Icon style={styles.singleIcon} name='pinterest-square' size={30} />
            <Icon style={styles.singleIcon} name='snapchat-ghost' size={30} />
            <Icon style={styles.singleIcon} name='instagram' size={30} />
          </View>
          <Text style={styles.social}>Aceitamos</Text>
          <View style={styles.cardIcons}>
            <Icon style={styles.singleIcon} name='cc-visa' size={30} />
            <Icon style={styles.singleIcon} name='cc-mastercard' size={30} />
            <Icon style={styles.singleIcon} name='cc-discover' size={30} />
            <Icon style={styles.singleIcon} name='cc-amex' size={30} />
            <Icon style={styles.singleIcon} name='paypal' size={30} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    flexDirection: 'row',
    borderRadius: 5,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 5,
    fontSize: 20,
    color: 'white',
    marginLeft: 10
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 120
  },
  image: {
    flex: 1,
    width: '100%',
    height: 500,
    marginTop: 15
  },
  list: {
    flex: 10,
    width: '100%'
  },
  descriptionTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  descriptionText: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    textAlign: 'justify'
  },
  imageShop: {
    height: 308,
    width: 505,
    marginVertical: 15
  },
  imageFachada: {
    marginVertical: 15,
    height: 200,
    width: '100%'
  },
  descriptionTextShop: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  social: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  singleIcon: {
    marginHorizontal: 10
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20
  }
})
