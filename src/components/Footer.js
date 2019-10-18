import React from "react";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credits: {
				api: "https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json"
			}
		};
	};

	render() {
		const { author, copyright, date } = this.props;

		const footerStyling = {
			position: "absolute",
			bottom: "0px",

			width: "100%",
			backgroundColor: "#2466B4",
			textAlign: "center",
			color: "#FFFFFF"
		};

		const rightsStyling = {
			opacity: 0.9
		};

		const creditsStyling = {
			color: "inherit"
		};

		const creditStyling = {
			borderBottom: "#DADADA dotted 1px",
			textDecoration: "none",
			fontStyle: "italic",
			color: "#E5E5E5"
		};

		return (
			<footer style={footerStyling}>
				<p style={rightsStyling}>&copy; { date } { author } | { copyright }</p>
				<p style={creditsStyling}>Credit: <a href={this.state.credits.api} target="_blank" rel="noopener noreferrer" style={creditStyling}>JamesFT</a></p>
			</footer>
		);
	};
};

export default Footer;