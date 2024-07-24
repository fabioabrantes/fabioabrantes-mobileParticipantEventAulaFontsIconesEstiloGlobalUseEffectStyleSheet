import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {
}
export function Input({ ...rest }: InputProps) {
  return (
    <TextInput
      placeholder="Nome do participante"
      style={styles.inputEvento}
      placeholderTextColor="#757477"
      { ...rest }
    />
  )
}