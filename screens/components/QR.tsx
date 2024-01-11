import { View, Text, StyleSheet } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

interface QRProps {
	userId: string;
	showId?: boolean;
}

export const QR: React.FC<QRProps> = ({ userId, showId = true }) => {
	return (
		<>
			<View style={styles.qrCode}>
				<QRCode value={userId} size={200} backgroundColor="transparent" />
			</View>
			{showId ? (
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>User ID</Text>
					<Text style={styles.accountUserId}>{userId}</Text>
				</View>
			) : null}
		</>
	);
};

const styles = StyleSheet.create({
	qrCode: {
		marginTop: 15,
		marginBottom: 25,
	},
	seperator: {
		marginBottom: 25,
	},
	subHeading: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
	accountUserId: {
		backgroundColor: "white",
		borderRadius: 14,
		fontSize: 24,
		textAlign: "center",
		paddingVertical: 10,
		marginTop: 5,
		marginBottom: 15,
		width: 200,
	},
});
