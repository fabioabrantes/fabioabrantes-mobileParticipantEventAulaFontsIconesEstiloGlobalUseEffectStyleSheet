import { useState } from "react";
import { Alert, Text, View } from "react-native";

import { Botao } from "../../components/Botao";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";
import { Input } from "../../components/Input";

export function Home() {
  const [nameParticipant, setNameParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipant(nome: string) {
    setNameParticipant(nome);
  }
  function addParticipant() {
    if (participants.includes(nameParticipant) || nameParticipant === '') {
      Alert.alert('Error', 'Participate ja existe ou não foi digitado');
    } else {
      setParticipants([...participants, nameParticipant]);
    }
    setNameParticipant('');
  }
  function removeParticipant(name: string) {
    if (participants.length > 0) {
      const novArray = participants.filter((participantName) => participantName !== name);
      setParticipants(novArray);
    }
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleEvento}>Sertao Comp</Text>
      <Text style={styles.dateEvento}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.formEvento}>
        <Input
          value={nameParticipant}
          onChangeText={(text) => handleParticipant(text)}
        />

        <Botao
          cor="green"
          iconName="user-plus"
          metodo={addParticipant}
        />
      </View>

      <Text style={styles.ParticipantsTitle}>Participantes</Text>

      <View style={styles.containerListParticipant}>

        {
          participants.length === 0 ?
            (
              <Text style={styles.listEmpty}>Ninguém chegou no evento ainda?
                Adicione participantes a sua lista de presença.</Text>
            )
            :
            (
              participants.map((nameParticipant) =>
                <Participant
                  name={nameParticipant}
                  key={nameParticipant + Date.now()}
                  metodo={() => removeParticipant(nameParticipant)}
                />

              )
            )
        }
      </View>
    </View>
  )
}