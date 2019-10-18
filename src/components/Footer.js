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

		return (
			<footer>
				<p>&copy; { date } { author } | { copyright }</p>
				<p>Credit: <a href={this.state.credits.api} target="_blank" rel="noopener noreferrer">JamesFT</a></p>
			</footer>
		);
	};
};

export default Footer;