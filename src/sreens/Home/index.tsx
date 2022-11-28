import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/participant";
import { styles } from "./styles";

export default function Home() {
  const participants = [
    "Guto",
    "Lia",
    "Neto",
    "Laura",
    "Elena",
    "Augusto",
    "Edu",
    "Luana",
    "Peu",
    "Marquinho",
    "Dailane",
    "Tatai",
    "Arlecio",
  ];

  function handleParticipantAdd() {
    console.log("clicou em adicionar");
  }
  function handleParticipantRemove(name: string) {
    console.log(`removeu participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do evento </Text>
      <Text style={styles.eventDate}>sexta, 24 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Rodrigo")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            {" "}
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
