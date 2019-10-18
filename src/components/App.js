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

	componentDidMount() {
		this.getQuote();
	};

	getQuote = () => {
		fetch("https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json").then((response) => {
			return response.json();
		}).catch((error) => {
			this.setState({
				person: "JavaScript",
				quote: "Error: " + error
			});
		}).then((data) => {
			const index = Math.floor(Math.random() * data.length);

			this.setState({
				person: data[index]["quoteAuthor"] || "Unknown",
				quote: data[index]["quoteText"]
			});
		});
	}

	render() {
		const { author, copyright, date, name, person, quote } = this.state;

		const buttonStyling = {
			display: "block",
			margin: "0 auto",
			border: "#2466B4 solid 1px",
			borderRadius: "3px",
			padding: "10px 25px",
			backgroundColor: "#BBDDFF",
			fontFamily: "Lucida Bright, Georgia, serif",
			fontSize: "1em"
		};

		return (
			<div className="app">
				<Header name={name} />
				<main>
					<Quote person={person} quote={quote} />
					<button onClick={this.getQuote} style={buttonStyling}>New Quote</button>
				</main>
				<Footer author={author} copyright={copyright} date={date} />
			</div>
		);
	}
};

export default App;