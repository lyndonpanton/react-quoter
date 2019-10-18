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
				<p>Credit: ...</p>
			</footer>
		);
	};
};

export default Footer;