import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "react-native-paper";

const { width } = Dimensions.get('window');




const dummyData = [
  {
    id: 1,
    name: "Dados do entregador",
    color: "red",
  },
   {
    id: 2,
    name: "Notificações",
    color: "red",
  },
  {
    id: 3,
    name: "Agenda",
    color: "red",
  },
  {
    id: 4,
    name: "Registro de jornada",
    color: "red",
  },
  {
    id: 5,
    name: "Registro de despesa",
    color: "red",
  },
  {
    id: 6,
    name: "Checklist do veículo",
    color: "red",
  },
  {
    id: 7,
    name: "Diário de bordo",
    color: "red",
  },
  {
    id: 8,
    name: "Dados da transportadora",
    color: "red",
  },
  {
    id: 9,
    name: "Histórico de pedidos",
    color: "red",
  },
  {
    id: 10,
    name: "Última sincronização",
    color: "red",
  },
  
];

export default function App() {
  const [data, setData] = React.useState(dummyData); 
  const removeItem = (id) => {
    let arr = data.filter(function(item) {
      return item.id !== id
    })
    setData(arr);
    LayoutAnimation.configureNext(layoutAnimConfig)
  };

  return (
   
     <View style={styles.container}>
      <Text style={styles.baseText}>
       Área do entregador
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        numColumns={1}
        
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              
            >
              <Card style={[styles.card, {backgroundColor: item.color}]}>
                <Text style={styles.text}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    padding: 7,
    
  },
  baseText: {
   
   
   fontSize:35,
   fontWeight: 'bold',
   color: "white",
   headerTitleAlign: 'left',
   paddingVertical: 50
   
  },
  flatList: {
    paddingVertical: 1,
  },
  cardContainer: {
    height: 100,
    width: width * 0.5,
    marginRight: 8,
    
    
  },
  card: {
    height: 90,
    width: width * 10,
    padding: 10,
    
    
    
  },
  text: { color: "white", fontWeight: 'bold', fontSize:25, }
});
