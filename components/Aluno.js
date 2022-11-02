import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {useState} from 'react'


import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'

export default function Disciplina() {

  const [nome,setNome] = useState("")
  const [endereco,setEndereco] = useState("")
  const [cidade,setCidade] = useState("")
  const [foto,setFoto] = useState("")



  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Cadastro Aluno
      </Text>

      <TextInput
        placeholder="Digite o nome do Aluno"
        value = {nome}
        onChangeText = {(text)=>{setNome(text)}}
      />
      
      <TextInput
        placeholder="Digite o endereco"
        value = {endereco}
        onChangeText = {(text)=>{setEndereco(text)}}
      />

      <TextInput
        placeholder="Digite o cidade"
        value = {cidade}
        onChangeText = {(text)=>{setCidade(text)}}
      />



      <Button title='Cadastrar'  onPress={() => upload(nome,endereco,cidade)}></Button>

      {/* <Image style={styles.logo} source={require('../assets/favicon.png')} /> */}
    </View>
  );
}

function upload(nome,endereco,cidade){

  const collecRef = collection(db,'Aluno');


  let items = []

  getDocs(collecRef).then( (snapshot)=> {
    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    setDoc(doc(db, "Aluno", (items.length + 1).toString()), {
      nome_disc: nome,
      cidade:cidade,
      endereco: endereco,
      Matricula:(items.length + 1).toString()
      
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