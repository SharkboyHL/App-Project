import React from "react";
import { Text } from "react-native";
import estilo from "../Estilo";

function Comp(){
    return <Text style={estilo.fontG}>Initial Component</Text>
}

function Comp2(){
    return <Text style={estilo.fontG}>2º Component</Text>
}

function Comp3(){
    return <Text style={estil o.fontG}>3º Component</Text>
}

export {Comp, Comp2, Comp3};