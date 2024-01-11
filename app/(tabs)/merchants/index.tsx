import { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	TextInput,
	ImageBackground,
} from "react-native";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { Feather } from "@expo/vector-icons";

import getAllMerchants from "../../utils/getMerchants";
import { useAuth } from "../../../hooks/useAuth";
import { QR } from "../../../screens/components/QR";
import { Loading } from "../../../screens/components/Loading";
import { Colours } from "../../../constants/Colours";

export default function MerchantListScreen() {
	const [merchants, setMerchants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [input, setInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [filteredMerchants, setFilteredMerchants] = useState([]);
	const { user, setUser, getUser } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await getUser();
				const merchantsData = await getAllMerchants();

				setMerchants(merchantsData);
				setFilteredMerchants(merchantsData);
				setUser(userData);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};

		fetchData();
	}, []);

	const filterMerchants = (input) => {
		setInput(input);
		if (input.trim() === "") {
			setFilteredMerchants(merchants);
		} else {
			const filtered = merchants.filter((merchant) =>
				merchant.company_name.toLowerCase().startsWith(input.toLowerCase())
			);
			setFilteredMerchants(filtered);
		}
	};

	const handleInputChange = (inputText) => {
		filterMerchants(inputText);
	};

	const handleClearInput = () => {
		setInput("");
		filterMerchants("");
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		if (category === "all items") {
			getAllMerchants().then((data) => {
				setFilteredMerchants(data);
			});
		} else {
			getAllMerchants().then((data) => {
				const filteredCategory = data.filter(
					(merchant) => merchant.category === category
				);
				setFilteredMerchants(filteredCategory);
			});
		}
	};

	if (loading) return <Loading />;

	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<ImageBackground
				source={require("../../../assets/images/qr-bg.png")}
				imageStyle={{
					resizeMode: "contain",
					top: -100,
				}}
				style={{
					flex: 1,
					justifyContent: "center",
					width: "100%",
					alignItems: "center",
				}}
			>
				<QR userId={user.id} />
			</ImageBackground>
			<Text style={styles.title}>Merchants</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputField}
					placeholder="Search merchants"
					placeholderTextColor={"grey"}
					onChangeText={handleInputChange}
					value={input}
				/>
				{input !== "" && (
					<TouchableOpacity
						onPress={handleClearInput}
						style={styles.clearButton}
					>
						<Text style={styles.clearButtonText}>X</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={styles.pickerContainer}>
				<Text style={styles.filter}>Filter</Text>
				<Picker
					style={styles.picker}
					selectedValue={selectedCategory}
					onValueChange={(itemValue) => handleCategoryChange(itemValue)}
				>
					<Picker.Item
						label="All Categories"
						value="all items"
						style={{ fontSize: 16, borderRadius: 20 }}
					/>
					<Picker.Item
						label="Coffee"
						value="coffee"
						style={{ fontSize: 16, borderRadius: 20 }}
					/>
					<Picker.Item
						label="Bakery"
						value="bakery"
						style={{ fontSize: 16, borderRadius: 20 }}
					/>
				</Picker>
			</View>
			<Feather
				name="arrow-down"
				size={24}
				color={Colours.pink}
				style={{ marginBottom: 15 }}
			/>
			{filteredMerchants.map((merchant) => (
				<TouchableOpacity
					style={styles.button}
					key={merchant.id}
					onPress={() => router.push(`/merchants/${merchant.id}`)}
				>
					<Text style={styles.buttonText}>{merchant.company_name}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: Colours.backgroundOffWhite,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 50,
		paddingBottom: 20,
	},
	title: {
		fontFamily: "Quicksand-Bold",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 10,
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 20,
		borderRadius: 7,
		marginBottom: 12,
		width: 300,
	},
	buttonText: {
		fontSize: 16,
		color: "#000000",
		textAlign: "center",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
		alignItems: "center",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 15,
	},
	inputField: {
		height: 50,
		width: 300,
		backgroundColor: "white",
		padding: 10,
		color: "black",
		borderRadius: 10,
	},
	clearButtonText: {
		color: "black",
		fontSize: 12,
	},
	clearButton: {
		padding: 5,
		paddingHorizontal: 10,
		borderRadius: 50,
		marginLeft: -35,
		backgroundColor: "#F5F5F5",
	},
	pickerContainer: {
		marginBottom: 15,
	},
	picker: {
		height: 30,
		width: 300,
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 16,
	},
	filter: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
});
