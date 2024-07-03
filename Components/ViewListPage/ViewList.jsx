import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';

const data = [
  { id: '1', name: 'OFFICE WEAR', subtitle: 'Office wear for you office', amount: '$120', image: ('./assets/dress1.png') },
  { id: '2', name: 'LAMEREI', subtitle: 'Recycle Bounce Knit Cardigan Pink', amount: '$80', image: ('./assets/dress4.png') },
  { id: '3', name: 'CHURCH WEAR', subtitle: 'Recycle Bounce Knit Cardigan Pink', amount: '$150', image: ('./assets/dress3.png') }
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.itemAmount}>{item.amount}</Text>
        <Image source={'./assets/remove.png'} style={styles.extraImage} />
      </View>
    </View>
  </View>
);

export default function ViewList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outline}>
        <View style={styles.header}>
          <Image source={'./assets/Logo.png'} style={styles.logo} />
          <Image source={'./assets/search (1).png'} style={styles.searchIcon} />
        </View>
        <Text style={styles.checkout}>C H E C K O U T</Text>
        <Text style={styles.separator}>----------------{"<>"}----------------</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatList}
        />
        
        <View style={styles.totalContainer}>
          <Text style={styles.estTotal}>EST. TOTAL</Text>
          <Text style={styles.totalAmount}>$240</Text>
        </View>
        <View style={styles.footer}>
          
          <View style={styles.checkoutContainer}>
            <Image source={'./assets/shoppingBag.png'} style={styles.bagImage} />
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </View>
        </View>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  outline: {
    width: 375,
    height: 667,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    margin: 200,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 100,
    marginTop: 20,
    marginLeft: 115,
  },
  searchIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
    marginTop: 20,
  },
  checkout: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 65,
  },
  separator: {
    marginLeft: 70,
  },
  flatList: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemAmount: {
    fontSize: 14,
    color: 'green',
  },
  extraImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 50,
  },
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bagImage: {
    width: 24,
    height: 24,
    tintColor:"white",
    marginRight: 20
    
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  totalAmount: {
    fontSize: 20,
    color: 'brown',
  },
  estTotal: {
    fontSize: 20,
    color: '#000',
  },
});
