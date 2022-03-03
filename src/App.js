import React,{useState} from 'react';
import { Text,View,SafeAreaView ,FlatList,StyleSheet,TextInput,TouchableOpacity} from 'react-native';


function App(){

  const [number, setNumber]= useState(0);
  const [text,setText]= useState('');
  const [task, setTask]= useState([]);

  function Add(){
    setTask([...task, text]);
    setText('');
    setNumber(number+1);
  }
 


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.banner}>YAPILACAKLAR SAYISI:{number} </Text>
      </View>
      <TextInput
       style={styles.input} placeholder='Buraya Giriniz...'
       value={text}
       onChangeText={setText}/>
       <View style={styles.buttonscontainer}>
        <TouchableOpacity onPress={Add} >
          <View style={styles.buttons}>
            <Text style={styles.add}>EKLE</Text>  
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.buttons}>
            <Text style={styles.delete}>CIKAR</Text>  
          </View>
        </TouchableOpacity>
       </View>
      

      <FlatList
      data={task}
      renderItem={({item}) => <View><Text style={styles.todo}>{item}</Text></View>}/>
      
    </SafeAreaView>
      
  );
}


const styles = StyleSheet.create({

  container:{
    backgroundColor:'#38598b',
    flex:1,
  },

  header:{
    margin:5,
    padding:10,
  },
  banner:{
    color:'#f96d00',
    fontWeight: 'bold',
    fontSize: 25,
  },
    
  input:{
    padding:15,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor:'#42b883',
    color: 'white',
    fontWeight:'bold',
    fontSize:20,
  },

  buttons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5,
    backgroundColor:'#f96d00',
    borderRadius:10,
    
  },

  delete:{
    marginTop: 5,
    color:'white',
    fontWeight: 'bold',
    padding:5,
    borderRadius:10,
    fontSize:15,
  },

  add:{
    fontSize:15,
    color:'white',
    fontWeight: 'bold',
    padding:5,
    borderRadius:10,
  },

  buttonscontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  todo:{
    borderWidth:1,
    margin:5,
    borderRadius:10,
    padding:10,
    fontWeight: 'bold',
    color:'white',
    fontSize:18,
    backgroundColor:'#42b883',
  },

})



export default App;

