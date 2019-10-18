import React from "react";
import Header from "./Header";
import Quote from "./Quote";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			date: (new Date()).getFullYear(),
			name: "React Quoter",
			person: "",
			quote: ""
		};
	};

	getQuote = () => {
		fetch("https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json").then((response) => {
			return response.data;
		}).catch((error) => {
			this.setState({
				person: "JavaScript",
				quote: "Error: " + error
			});
		}).then((data) => {

		});
	}

	render() {
		const { author, copyright, date, name } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<Quote />
				<Footer author={author} copyright={copyright} date={date} />
			</div>
		);
	}
};

export default App;