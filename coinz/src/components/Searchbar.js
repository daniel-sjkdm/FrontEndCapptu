import React, { useState } from 'react';
import {
	Button,
	InputAdornment,
	Input,
	InputLabel,
	Typography,
	TextField
} from '@material-ui/core';
import {
	makeStyles 
} from '@material-ui/core/styles';
import {
	Alert
} from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';



const useStyles = makeStyles(theme => ({
	root: {
		marginTop: "40px",
		fontSize: "14px",
	},
	alert: {
		marginBottom: "25px"
	},
	text: {
		fontFamily: "Roboto Mono, monospace",
	}
}));



const validateDate = date => {
	if (date.match(/\d{4}-\d{2}-\d{2}\sto\s\d{4}-\d{2}-\d{2}/g)) {
		return true;
	}
	else {
		return false;
	}
};


const Searchbar = ({setData}) => {

	const [query, setQuery] = useState("");
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const classes = useStyles();

	const handleSubmit = query => {
		const date_array = query.split("to");
		const url = `http://localhost:8000/coinz/api/date-range/?date1=${date_array[0]}&date2=${date_array[1]}`;
	

		axios.get(url)
		.then(
			response => {
				setData(response.data)
			}
		)
		.catch(
			error => {
				console.log(error)
			}
		)

	};

	return (
		<div className={classes.root}>
			{
				error? ( 
					<Alert 
						className={classes.alert}
						severity="warning"
						onClose={() => setError(false)}
					> 
						{ errorMessage } 
					</Alert> 
				) : ""
			}
			<Typography className={classes.text} variant="body1">
				You can get the price of the bitcoin converted to mxn currency. <br></br>
				Use the search bar and the buttons to filter 
				the content based on your interests. <br></br> <br></br>
			</Typography>
			<Typography className={classes.text} variant="body1">
				Search by date range: yyyy/mm/dd to yyyy/mm/dd
			</Typography>
			<InputLabel 
				style={{ marginTop: "25px" }} 
				htmlFor="coinz__input"
				className={classes.text}
			> 
				Seach by date 
			</InputLabel>
				<TextField
					id="coinz__input"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						)
					}}
				/>
			<Button
				color="primary"
				variant="contained"
				size="small"
				onClick={() => query? ( 
					validateDate(query)? handleSubmit(query) : (
						setError(true),
						setErrorMessage("Enter a valid date range yyyy/mm/dd to yyyy/mm/dd")
					)
				) : (
					setError(true),
					setErrorMessage("The query can't be empty")
				)}
			>
				Search
			</Button>
		</div>
	)
};


export default Searchbar;
