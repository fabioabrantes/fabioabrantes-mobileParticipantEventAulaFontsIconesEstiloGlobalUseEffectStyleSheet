import { StyleSheet } from "react-native";
import { THEMES } from "../../../../global/thmesGlobal";

export const styles = StyleSheet.create({
  botao: {
    height: 44,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: THEMES.colors.gray700,
    borderWidth: 1,
    paddingHorizontal: 38
  },
  titleBotao: {
    color: THEMES.colors.blue400,
    fontSize: THEMES.size.sm,
    fontFamily:THEMES.fonts.regular
  }
})