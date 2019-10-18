import React from "react";

class Footer extends React.Component {
	constructor(props) {
		super(props);
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