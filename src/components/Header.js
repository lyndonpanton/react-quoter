import React from "react";

const Header = (props) => {
	const { name } = props;

	const headerStyling = {
		backgroundColor: "#2466B4",
		color: "#FFFFFF"
	};

	const h1Styling = {
		margin: 0,
		padding: "10px 0",
		textAlign: "center"
	};

	return (
		<header style={headerStyling}>
			<h1 style={h1Styling}>{name}</h1>
		</header>
	);
};

export default Header;
