import { useState } from "react";
import { Modal, Text, View } from "react-native";
import { Botao } from "../Botao";

import { styles } from "./styles";
import { ButtonModal } from "./components/ButtonModal";

type PropsParticipant = {
  name: string;
  metodo: (name: string) => void;
}
export function Participant({ name, metodo }: PropsParticipant) {
  const [modalVisibility, setModalVisibility] = useState(false);

  function remover() {
    setModalVisibility(false);
    metodo(name);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>

      <Botao cor="red" iconName="trash-o" metodo={() => setModalVisibility(true)} />

      <Modal
        visible={modalVisibility}
        transparent
        statusBarTranslucent
        animationType="slide"
      >
        <View style={styles.ModalContainer}>
          <View style={styles.ModalWrapper}>

            <Text style={styles.ModalTitle}>Remover</Text>
            <Text style={styles.ModalSubTitle}>Deseja excluir {name}?</Text>

            <View style={styles.ModalButtonInteraction}>
              <ButtonModal
                title="Não"
                metodo={() => setModalVisibility(false)}
              />

              <ButtonModal
                title="Sim"
                metodo={remover}
              />
            </View>
          </View>
        </View>

      </Modal>
    </View>
  )
}