import {
	Text,
	Pressable,
	StyleSheet,
	Animated,
	PressableProps,
} from "react-native";
import React from "react";

import { useAnimation } from "../../hooks/useAnimation";

interface Props extends PressableProps {
	title?: string;
	isDark?: boolean;
	style?: {};
	children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({
	title,
	style,
	isDark = true,
	children,
	...props
}) => {
	const { fadeIn, fadeOut, opacityValue } = useAnimation();

	return (
		<Pressable onPressIn={fadeIn} onPressOut={fadeOut} {...props}>
			<Animated.View style={{ ...styles.btn, ...style, opacity: opacityValue }}>
				{children ? (
					children
				) : (
					<Text
						style={{ color: isDark ? "white" : "black", ...styles.btnText }}
					>
						{title}
					</Text>
				)}
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "black",
		paddingVertical: 20,
		paddingHorizontal: 35,
		marginVertical: 10,
		minWidth: 200,
	},
	btnText: {
		textAlign: "center",
		fontWeight: "600",
	},
});
