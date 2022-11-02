import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import { Card } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import Disciplina from './components/Disciplina';
import Professores from './components/Professores';
import Turma from './components/Turma';
import Historico from './components/Historico'
import Aluno from './components/Aluno'

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationCointainer} from '@react-navigation/native'

const Pilha = createStackNavigator();

export default function App() {
  return (


    
    <View style={styles.container}>
      
      <StatusBar style="auto" />

      <Card>

        <Aluno/>
        <Disciplina />
        <Professores/>
        <Turma/>
        <Historico/>
        
      </Card>
    </View>
  );
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6mAVxEKvhg753L8zkot9afhGc-BUJUg",
  authDomain: "universidade-1476f.firebaseapp.com",
  projectId: "universidade-1476f",
  storageBucket: "universidade-1476f.appspot.com",
  messagingSenderId: "364982728385",
  appId: "1:364982728385:web:bb4f961e3875592ff1c640",
  measurementId: "G-DTNFS2JCTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
