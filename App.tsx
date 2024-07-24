import { ActivityIndicator, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
export default function App() {

  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {
        loaded ? <Home /> : <Loading />
      }
    </>
  );
}

