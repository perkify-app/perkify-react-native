import { FontAwesome } from "@expo/vector-icons";

export const FAIcon = (props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
	size?: number;
	style?: {};
}) => {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};
