import React, { useState} from "react";
import{ View, Text, TextInput, Button } from "react-native"
import ResultImc from "./Resultimc";

export default function Form(){
    const [heitght, setHeight]= useState(null)
    const [weight, setweight]= useState(null)
    const [messageImc, setMenssageImc]= useState("preencha o peso e altura")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(heitght*heitght)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && heitght != null){
            imcCalculator()
            setHeight(null)
            setweight(null)
            setMenssageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMenssageImc("preencha o peso e altura")
    }




    return(
        <View>
          <View>

            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={heitght}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />

            <Text>Peso</Text>
            <TextInput
            onChangeText={setweight}
            value={weight}
            placeholder=" Ex. 75.365"
            keyboardType="numeric"
            />
            <Button 
            onPress={() => validationImc()}
            title={textButton}
            />
          </View>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>

    );
}