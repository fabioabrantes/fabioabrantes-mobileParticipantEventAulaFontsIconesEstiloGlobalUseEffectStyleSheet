import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type PropsBotao = {
  title:string;
  metodo: () => void;
}
export function ButtonModal({ title, metodo }: PropsBotao) {
  return (
    <TouchableOpacity
      onPress={metodo}
      style={styles.botao}
    >
      <Text style={styles.titleBotao}>{title}</Text>
    </TouchableOpacity>
  )
}