import {
	Text,
	View,
	StyleSheet,
	Pressable,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	Image,
} from "react-native";
import { Link, useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import getMerchantById from "../../utils/getMerchantById";
import MapView, { Marker } from "react-native-maps";

interface merchant {
	merchant_id: number;
	company_name?: string;
	logo_url?: string;
	description?: string;
	address?: string;
	phone_no?: string;
}

const singleMerchant = () => {
	const id = useLocalSearchParams();

	const [merchant, setMerchant] = useState<merchant | null>(null);
	const [loading, setLoading] = useState(true);

	const merchantId = id.id;

	useEffect(() => {
		getMerchantById(merchantId).then((data) => {
			setMerchant(data);
			setLoading(false);
		});
	}, [merchantId]);

	if (loading)
		return (
			<View>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);

	return (
		<View style={styles.container}>
			<Pressable style={styles.back}>
				<Link href="/merchants">Back</Link>
			</Pressable>
			<Text style={styles.logo}>{merchant.company_name} Logo placeholder</Text>
			<Text style={styles.title}>{merchant.company_name}</Text>
			<View style={styles.mapPlaceholder}>
				{Platform.OS === "web" ? (
					<Image
						source={require("../../../assets/images/map-placeholder.jpg")}
						style={{ width: "100%", height: "100%" }}
					/>
				) : (
					<MapView
						style={{ width: "100%", height: "100%" }}
						initialRegion={{
							latitude: 53.47221762503716,
							longitude: -2.238378094847027,
							latitudeDelta: 0.005,
							longitudeDelta: 0.045,
						}}
					>
						<Marker
							coordinate={{
								latitude: 53.47221762503716,
								longitude: -2.238378094847027,
							}}
							title={merchant.company_name}
						/>
					</MapView>
				)}
			</View>
			<Text style={styles.description}>{merchant.description}</Text>
			<Text style={styles.description}>{merchant.phone_no}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					router.push(`/(tabs)/cards/2`);
				}}
			>
				<Text style={styles.btnText}>View Loyalty Card</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	logo: {
		fontSize: 15,
		textAlign: "right",
		marginRight: 15,
	},

	title: {
		marginTop: 40,
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 15,
	},
	mapPlaceholder: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 300,
		backgroundColor: "#DDDDDD",
		marginTop: 20,
		marginBottom: 20,
	},
	back: {
		marginLeft: 15,
	},
	description: {
		textAlign: "center",
		fontSize: 15,
		marginBottom: 20,
	},
	button: {
		backgroundColor: "black",
		padding: 10,
		marginBottom: 10,
		width: 300,
		alignSelf: "center",
		borderRadius: 7,
	},
	btnText: {
		fontSize: 16,
		fontWeight: "600",
		color: "white",
		textAlign: "center",
	},
});

export default singleMerchant;
