import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { CustomerOnboarding } from "../constants/OnboardingData";
import { Button } from "./components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { Colours } from "../constants/Colours";

const Item = ({ item, index }) => (
	<View style={styles.item}>
		<Text style={styles.title}>
			{index + 1}. {item.title}
		</Text>
		<Text style={styles.description}>{item.description}</Text>
	</View>
);

export default function WelcomeScreenInfo() {
	return (
		<ScrollView style={styles.page}>
			<View style={styles.container}>
				<View style={styles.separator} />
				<Text style={{ ...styles.title, textAlign: "center" }}>
					Welcome to your Treasure Trove!
				</Text>
				<View style={styles.separator} />
				<Text style={styles.intro}>
					Toss the bulky cards and ditch the paper receipts. Step into a world
					where every purchase fuels your ultimate shopping comeback with
					Perkify!
				</Text>
				{CustomerOnboarding.map((item, index) => {
					return <Item key={item.id} item={item} index={index} />;
				})}
				<Button
					title="Get Started"
					onPress={() => router.replace("/merchants/")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: Colours.backgroundOffWhite,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: 25,
		marginBottom: 10,
	},
	item: {
		backgroundColor: "white",
		flex: 1,
		width: "95%",
		padding: 25,
		marginVertical: 12,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
	},
	intro: {
		fontSize: 16,
		color: "#555",
		textAlign: "center",
		marginBottom: 20,
		maxWidth: 700,
	},
	description: {
		fontSize: 16,
		marginTop: 10,
	},
	separator: {
		marginVertical: 15,
		height: 1,
		width: "80%",
	},
});
