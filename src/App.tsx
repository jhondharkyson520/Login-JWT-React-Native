import 'react-native-gesture-handler';
import { AppNavigator } from "./presentation/navigation/AppNavigator";
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return <AppNavigator/>
}
