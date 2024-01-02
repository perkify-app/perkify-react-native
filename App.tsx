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
	View,
} from "@gluestack-ui/themed";

export default function App() {
	return (
		<SafeAreaView>
			<GluestackUIProvider>
				<Button backgroundColor="purple" padding={20}>
					<ButtonText color="white">Hello world</ButtonText>
				</Button>
			</GluestackUIProvider>
		</SafeAreaView>
	);
}