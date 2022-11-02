import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {useState} from 'react'


import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'

export default function Professores() {

  const [nome,setNome] = useState("")
  const [endereco,setEndereco] = useState("")
  const [cidade,setCidade] = useState("")


  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Cadastro Professores
      </Text>

      <TextInput
        placeholder="Digite Seu nome"
        value = {nome}
        onChangeText = {(text)=>{setNome(text)}}
      />
      
      <TextInput
        placeholder="Digite seu endereço"
        value = {endereco}
        onChangeText = {(text)=>{setEndereco(text)}}
      />

      <TextInput
        placeholder="Digite sua cidade"
        value = {cidade}
        onChangeText = {(text)=>{setCidade(text)}}
      />

      <Button title='Cadastrar'  onPress={() => upload(nome,endereco,cidade)}></Button>

    </View>
  );
}

function upload(nome,endereco,cidade){

  const collecRef = collection(db,'Professor');


  let items = []

  getDocs(collecRef).then( (snapshot)=> {
  
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    setDoc(doc(db, "Professor", (items.length + 1).toString()), {
      nome: nome,
      endereco:endereco,
      cidade: cidade,
      cod_prof: items.length + 1 

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