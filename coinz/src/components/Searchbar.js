import React, { useState } from 'react';
import {
	TextField,
	Button
} from '@material-ui/core';
import {
	makeStyles 
} from '@material-ui/core/styles';
import axios from 'axios';



const useStyles = makeStyles(theme => ({
	root: {
		marginTop: "30px",
		fontSize: "14px",
	}
}));


const handleSubmit = async query => {
	const url = "https://api.bitso.com/v3/trades/?book=btc_mxn"
	
	try {
		const response = await axios({
			method: "GET",
			url: url
		});
		const json = response.json();
		console.log(json);
	}
	catch {
		alert("Error");
	}
};



const Searchbar = () => {
	const classes = useStyles();
	const [query, setQuery] = useState("");
	return (
		<div className={classes.root}>
			<TextField
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button
				color="primary"
				variant="contained"
				onClick={() => query? handleSubmit(query) : alert("Input can't be empty")}
			>
				Search
			</Button>
		</div>
	)
};


export default Searchbar;
