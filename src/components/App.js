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
			const index = Math.floor(Math.random() * data.length);

			this.setState({
				person: data[index]["quoteAuthor"],
				quote: data[index]["quoteText"]
			});
		});
	}

	render() {
		const { author, copyright, date, name, person, quote } = this.state;

		return (
			<div className="app">
				<Header name={name} />
				<main>
					<Quote person={person} quote={quote} />
					<button onClick={this.getQuote}>New Quote</button>
				</main>
				<Footer author={author} copyright={copyright} date={date} />
			</div>
		);
	}
};

export default App;