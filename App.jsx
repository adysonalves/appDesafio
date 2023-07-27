import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import logo from './src/assets/logo.png';
import ModalResult from './src/components/Modal';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [vlrAlcool, setVlrAlcool] = useState("");
  const [vlrGasolina, setVlrGasolina] = useState("");
  const [resultado, setResultado] = useState("")

  const result = {
    vlrAlcool: vlrAlcool,
    vlrGasolina: vlrGasolina,
    resultado: resultado
  }

  function calcular(){

    if(!vlrAlcool || !vlrGasolina){
      return alert('Preencha os campos corretamente!')
    }

    setVlrAlcool(parseFloat(vlrAlcool));
    setVlrAlcool(vlrAlcool.replace(',','.'));

    setVlrGasolina(parseFloat(vlrGasolina));
    setVlrGasolina(vlrGasolina.replace(',','.'));

    const formula = vlrAlcool / vlrGasolina;

    if(formula < 0.7){
      setResultado('Álcool');
    } else{
      setResultado('Gasolina');
    }

    setModalVisible(true)
    
  }

  function closeModal(){
    setVlrAlcool("");
    setVlrGasolina("");
    setResultado("");
    setModalVisible(false);
  }
  
  return (
    <View style={style.container}>


      <View style={style.header}>
        <Image
          source={logo}
          style={style.logo}
        />
        <Text style={style.title}>Qual a melhor opção?</Text>
      </View>

      <View style={style.formArea}>

        <View style={style.form}>


          <Text style={style.textLabel}>Álcool (preço por litro):</Text>
          <TextInput style={style.input} placeholder="R$" placeholderTextColor={'lightgrey'} keyboardType="numeric" onChangeText={(value) => setVlrAlcool(value) } value={vlrAlcool} />

          <Text style={style.textLabel}>Gasolina (preço por litro):</Text>
          <TextInput style={style.input} placeholder="R$" placeholderTextColor={'lightgrey'} keyboardType="numeric" onChangeText={(value) => setVlrGasolina(value) } value={vlrGasolina} />

          <TouchableOpacity style={style.buttonAction} onPress={() => calcular()}>
            <Text style={style.buttonActionText}>
              Calcular
            </Text>
          </TouchableOpacity>

        </View>


      </View>

      <ModalResult visible={modalVisible} onClose={closeModal} result={result}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232A",
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 10
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: "bold"
  },
  formArea: {
    flex: 1,
    alignItems: 'center'
  },
  form:{
    width: '90%'
  }
  ,
  textLabel: {
    color: "#fff",
    fontWeight: '600'
  },
  input:{
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 5,
    paddingLeft: 10
  },
  buttonAction:{
    width: '100%',
    height: 45,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonActionText:{
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  }

})

export default App;