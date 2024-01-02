import { SafeAreaView } from "react-native";

import {
  GluestackUIProvider,
  Box,
  Heading,
  Text,
  Link,
  LinkText,
  Button,
  ButtonGroup,
  ButtonText,
  ButtonIcon,
  View,
  AddIcon,
  ButtonSpinner,
  
} from "@gluestack-ui/themed";

export default function App() {
  return (
    <SafeAreaView>
      <GluestackUIProvider>
        <Button isDisabled={true} bg="$darkBlue600" p="$3">
          <ButtonSpinner mr="$1" />
          <ButtonText fontWeight="$medium" fontSize="$sm">
            Please wait...
          </ButtonText>
        </Button>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
