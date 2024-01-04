import { router } from "expo-router";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

const Item = ({ item, backgroundColor, textColor }) => (
	<TouchableOpacity style={[styles.item, { backgroundColor }]}>
		<Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
	</TouchableOpacity>
);

export default function WelcomeScreenInfo() {
	return (
		<View>
			<View style={styles.exampleContainer}>
				{DATA.map((item) => {
					return (
						<Item item={item} backgroundColor="lightgray" textColor="black" />
					);
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
	exampleContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	exampleText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
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
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
