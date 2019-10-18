import React from "react";

const Quote = (props) => {
	const { person, quote } = props;
	
	return (
		<blockquote>
			<q>{quote}</q>
			<cite> - {person}</cite>
		</blockquote>
	);
};

export default Quote;