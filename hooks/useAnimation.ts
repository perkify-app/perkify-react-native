import { Animated } from "react-native";
import React from "react";

export const useAnimation = () => {
	const opacityValue = React.useRef(new Animated.Value(1)).current;

	const fadeIn = () => {
		Animated.timing(opacityValue, {
			toValue: 0.1,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(opacityValue, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	return {
		opacityValue,
		fadeIn,
		fadeOut,
	};
};
