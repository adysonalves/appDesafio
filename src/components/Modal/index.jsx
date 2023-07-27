import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import figura from '../../assets/gas.png';
import style from './style';
import { useState } from "react";


function ModalResult({ visible, onClose, result }) {
    return (

        <Modal
            visible={visible}
            animationType="slide"
        >

            <View style={style.container}>


                <View style={style.header}>

                    <Image
                        source={figura}
                    />

                    <Text style={style.titleResult}>
                        Compensa usar {result.resultado}
                    </Text>
                </View>

                <View style={style.resultArea} >

                    <Text style={style.titlePrice}>
                        Com os preços:
                    </Text>

                    <Text style={style.result}>
                        Álcool: R${result.vlrAlcool}
                    </Text>

                    <Text style={style.result}>
                        Gasolina: R${result.vlrGasolina}
                    </Text>

                    <TouchableOpacity style={style.closeButton} onPress={onClose}>
                        <Text style={style.closeButtonText}>
                            Calcular novamente
                        </Text>
                    </TouchableOpacity>

                </View>




            </View>

        </Modal>

    );
}

export default ModalResult;
