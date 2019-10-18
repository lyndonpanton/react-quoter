import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			date: (new Date()).getFullYear(),
			name: "React Quoter"
		};
	};

	render() {
		const { author, copyright, date, name } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<Footer />
			</div>
		);
	}
};

export default App;