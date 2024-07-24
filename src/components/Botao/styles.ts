import { StyleSheet } from "react-native";
import { THEMES } from "../../global/thmesGlobal";

export const styles = StyleSheet.create({
  botao:{
    width:56,
    height:56,
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center"
  },
  titleBotao:{
    color:THEMES.colors.white,
    fontSize:THEMES.size.lg,
    textAlign:"center",
    fontFamily:THEMES.fonts.bold
  }
})