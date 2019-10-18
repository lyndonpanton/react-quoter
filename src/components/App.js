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
		return (
			<div className="app">
				<Header />
				<Footer />
			</div>
		);
	}
};

export default App;