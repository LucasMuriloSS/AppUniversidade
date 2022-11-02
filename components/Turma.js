import * as React from 'react';
import { Text, View, StyleSheet,Button, Image,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker'

import {useState,useEffect} from 'react'

import db from '../config.js'

import {getFirestore, collection, getDocs, setDoc,addDoc, doc, deleteDoc, getDoc} from 'firebase/firestore'
// import Professores from './Professores.js';

export default function Turma() {

  const [cod_prof,setProf] = useState()
  const [cod_disc,setDisc] = useState("")
  const [ano,setAno] = useState("")
  const [hora,setHor] = useState("")


  const[professores,setProfessores] = useState([])

  const[disciplina,setDisciplina] = useState([])

  const collecRef = collection(db,'Professor');
  const collectDisci = collection(db,'Disciplina');

  const ChangeProf = (e) => {console.clear(), console.log(professores[e.target.value].cod_prof)}
  const ChangeDisc = (e) => {console.clear(), setDisc(disciplina[e.target.value].cod_disc)}
  const ChangeDate = (e) => {console.clear(), setHor((e.target.value))}

  const Add = professores.map(Add => Add)

  const Add2 = disciplina.map(Add2 => Add2)


  let items = []
  let items2 = []

  useEffect(()=>{

    console.log("professores")

  },[professores,disciplina])

  getDocs(collecRef).then( (snapshot)=> {

    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    if(professores.length == 0){
      setProfessores(items)
      
    }

  }).catch(err => {
    console.log(err.message)
  })

  getDocs(collectDisci).then( (snapshot)=> {
    // console.log(snapshot.docs)

    
    snapshot.docs.forEach((doc) => {
      items2.push({...doc.data(), id:doc.id})
      
    })

    if(disciplina.length == 0){
      setDisciplina(items2)
      
    }

  }).catch(err => {
    console.log(err.message)
  })


  return (

    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Cadastro Turma
      </Text>


      <Text style={styles.paragraph}>
        Professor:
      </Text>

      
      {/* {console.log(professores)}
      {console.log(professores)} */}

      < select
        onChange={e => ChangeProf(e)}
        className="browser-default custom-select" >
        {
          Add.map((data,key) => <option value={key}>{data.nome}</option>)
        }
      </select>

      

      <Text style={styles.paragraph}>
        Disciplina:
      </Text>

      < select
        onChange={e => ChangeDisc(e)}
        className="browser-default custom-select" >
        {
          Add2.map((data,key) => <option  value={key}>{data.nome_disc}</option>)
        }
      </select > 
      
      

      <Text style={styles.paragraph}>
        Horario:
        <select
        onChange={e => ChangeDate(e)}
        >
        <option value="07:00">07:00</option>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>

        </select>
      </Text>

      <TextInput
        placeholder="Ano"
        value = {ano}
        onChangeText = {(text)=>{setAno(text)}}
      />

      
      <Button title='Cadastrar'  onPress={() => upload(cod_prof,cod_disc,ano,hora)}></Button>

    </View>
  );
}

function upload(cod_prof,cod_disc,ano,horario){

  const collecRef = collection(db,'Turma');

  let items = []

  getDocs(collecRef).then( (snapshot)=> {
    // console.log(snapshot.docs)

    
    snapshot.docs.forEach((doc) => {
      items.push({...doc.data(), id:doc.id})
      
    })

    setDoc(doc(db, "Turma", (items.length + 1).toString()), {
      ano: ano,
      horario:horario,
      cod_disc: cod_disc,
      cod_turma:(items.length + 1),
      cod_prof: cod_prof
      
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