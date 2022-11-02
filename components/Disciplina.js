import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {useState} from 'react'


import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'

export default function Disciplina() {

  const [nome,setNome] = useState("")
  const [carga,setcarga] = useState("")



  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Cadastro Disciplina
      </Text>

      <TextInput
        placeholder="Digite o nome da matéria"
        value = {nome}
        onChangeText = {(text)=>{setNome(text)}}
      />
      
      <TextInput
        placeholder="Digite a carga Horária "
        value = {carga}
        onChangeText = {(text)=>{setcarga(text)}}
      />

      <Button title='Cadastrar'  onPress={() => upload(nome,carga)}></Button>

      {/* <Image style={styles.logo} source={require('../assets/favicon.png')} /> */}
    </View>
  );
}

function upload(name,carga){

  const collecRef = collection(db,'Disciplina');


  let items = []

  getDocs(collecRef).then( (snapshot)=> {
    // console.log(snapshot.docs)

    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    setDoc(doc(db, "Disciplina", (items.length + 1).toString()), {
      nome_disc: name,
      carga_hor:carga,
      cod_disc: items.length + 1 
      
    })

  }).catch(err => {
    console.log(err.message)
  })

  
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });