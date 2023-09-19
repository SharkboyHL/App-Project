import React from "react";
import { SafeAreaView } from "react-native";

import Primeiro from "./components/Primeiro";
import {Comp, Comp2, Comp3} from "./components/Multiplo";

export default function App(){
    return(
        <SafeAreaView style={style.App}>
            <Primeiro/>
            <Comp/>
            <Comp2/>
            <Comp3/>
        </SafeAreaView>
    )
    const style = StyleSheet.create({
        App:{
            flexGrow:1,
            justifyContent: "center",
            alignItens: "center",
        }
    })
}