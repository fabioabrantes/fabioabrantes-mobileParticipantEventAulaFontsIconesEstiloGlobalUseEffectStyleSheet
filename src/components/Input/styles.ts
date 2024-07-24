import { StyleSheet } from "react-native";
import { THEMES } from "../../global/thmesGlobal";

export const styles = StyleSheet.create({
   inputEvento: {
    backgroundColor:THEMES.colors.gray600,
    flex:1,
    height:56,
    borderRadius:4,
    padding:8,
    fontSize:THEMES.size.xxm,
    color:THEMES.colors.white,
    fontFamily:THEMES.fonts.regular,
   }
  });