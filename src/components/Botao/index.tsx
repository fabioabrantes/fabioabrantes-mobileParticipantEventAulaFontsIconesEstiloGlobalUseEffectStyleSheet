import { Text, TouchableOpacity } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

import { styles } from "./styles";

type PropsBotao = {
  iconName: "user-plus" | "trash-o";
  cor: "green" | "red" | "#131016" | "#F2F2F2";
  metodo: () => void;
}
export function Botao({ iconName, cor, metodo }: PropsBotao) {
  return (
    <TouchableOpacity
      onPress={metodo}
      style={[{ backgroundColor: cor }, styles.botao]}
    >

      <FontAwesome name={iconName} size={24} color="white" />


    </TouchableOpacity>
  )
}