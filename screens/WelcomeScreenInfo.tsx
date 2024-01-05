import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CustomerOnboarding } from "../constants/OnboardingData";

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
		<View>
			<View style={styles.container}>
				<Text style={styles.intro}>
					Toss the bulky cards and ditch the paper receipts. Step into a world
					where every purchase fuels your ultimate shopping comeback with
					Perkify!
				</Text>
				{CustomerOnboarding.map((item, index) => {
					return <Item key={item.id} item={item} index={index} />;
				})}
				<TouchableOpacity
					style={styles.btn}
					onPress={() => router.replace("/merchants/")}
				>
					<Text style={styles.btnText}>Get Started</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	btn: {
		backgroundColor: "black",
		marginTop: 20,
	},
	btnText: {
		color: "white",
		paddingVertical: 20,
		paddingHorizontal: 40,
	},
	item: {
		backgroundColor: "#E0E0E0",
		flex: 1,
		width: "100%",
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
});
