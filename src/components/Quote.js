import React from "react";

const Quote = (props) => {
	const { person, quote } = props;

	// const background = "repeating-linear-gradient(315deg, #FFFFFF 0px, #FFFFFF 20px, #F3F3F3 20px, #F3F3F3 40px)";

	const blockStyling = {
		margin: "40px auto",
		border: "#CACACA solid 1px",
		borderRadius: "5px",
		boxSizing: "border-box",
		padding: "20px",
		background: "#FFFFFF",
		width: "80%"
	};

	const quoteStyling = {
		display: "block",
		lineHeight: "1.5",
		fontStyle: "italic"
	};

	const personStyling = {
		display: "block",
		paddingTop: "10px",
		textAlign: "right",
		color: "#1A1A1A"
	};

	return (
		<blockquote style={blockStyling}>
			<q style={quoteStyling}>{quote}</q>
			<cite style={personStyling}> - {person}</cite>
		</blockquote>
	);
};

export default Quote;