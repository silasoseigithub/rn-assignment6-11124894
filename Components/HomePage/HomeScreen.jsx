import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.outline}>
                <View style={styles.imageRow}>
                    <Image source={'./assets/Menu.png'} style={styles.menu} />
                    <Image source={'./assets/Logo.png'} style={styles.logo} />
                    <Image source={'./assets/Search (1).png'} style={styles.search} />
                    <Image source={'./assets/shoppingBag.png'} style={styles.bag} />
                </View>

                <View style={styles.Row2}>
                    <Text style={styles.title}>OUR STORY</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewList')}>
                        <Image source={'./assets/Listview.png'} style={styles.viewList} />
                    </TouchableOpacity>
                    <Image source={'./assets/Filter.png'} style={styles.filter} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.gridContainer}>
                        {[
                            {
                                img: ('./assets/dress1.png'),
                                name: "Office Wear",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress2.png'),
                                name: "Black",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress3.png'),
                                name: "Church Wear",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress4.png'),
                                name: "Lamerei",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress5.png'),
                                name: "21WN",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress6.png'),
                                name: "Lopo",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress7.png'),
                                name: "21WN",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                            {
                                img: ('./assets/dress3.png'),
                                name: "Lame",
                                subtitle: "reversible angora cardigan",
                                amount: "$120",
                            },
                        ].map((item, index) => (
                            <View key={index} style={styles.gridItem}>
                                <Image source={item.img} style={styles.dressImage} />
                                <View>
                                    <Text style={styles.dressName}>{item.name}</Text>
                                    <Text style={styles.dressSubtitle}>{item.subtitle}</Text>
                                    <Text style={styles.dressAmount}>{item.amount}</Text>
                                </View>
                                <Image
                                    source={'./assets/add_circle.png'}
                                    style={styles.addIcon}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
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


  scrollContainer: {
      alignItems: "center",
  },

  outline: {
 
      margin:200,
      width: 375,
      height: 667,
      borderWidth: 2,
      borderColor: "#000",
      padding: 10,
  },

  imageRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      marginTop: 10,
  },

  menu: {
      height: 40,
      width: 40,
  },

  logo: {
      height: 40,
      width: 100,
      marginLeft: 25,
  },

  search: {
      height: 40,
      width: 40,
  },

  bag: {
      height: 40,
      width: 40,
      marginLeft: -40,
  },

  title: {
      fontSize: 24,
      marginVertical: 15,
  },

  Row2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
  },

  viewList: {
      height: 40,
      width: 40,
  },

  filter: {
      height: 40,
      width: 40,
      marginLeft: -130,
  },

  gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: 20,
  },

  gridItem: {
      width: "48%",
      marginBottom: 20,
      alignItems: "center",
      padding: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      position: "relative",
  },

  dressImage: {
      width: "100%",
      height: 150,
      resizeMode: "contain",
      marginBottom: 10,
  },

  dressName: {
      fontSize: 16,
      fontWeight: "bold",
  },

  dressSubtitle: {
      fontSize: 14,
      color: "#666",
      marginTop: 2,
  },

  dressAmount: {
      fontSize: 16,
      color: "brown",
      marginTop: 2,
      marginBottom: 10,
  },

  addIcon: {
      position: "absolute",
      bottom: 10,
      right: 10,
      width: 30,
      height: 30,
  },
});
