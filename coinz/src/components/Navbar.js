import React from 'react';
import { 
	AppBar,
	Toolbar,
	Typography,
	IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
	main__appbar: {
		backgroundColor: "#272727",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	},
	icon: {
		color: "white"
	}
}));


const Navbar = (props) => {
	const classes = useStyles();
	return (
		<AppBar
			color="primary"
			position="static"
			className={classes.main__appbar}
		>
			<Toolbar>
				<IconButton>
					<i className="fab fa-bitcoin fa-2x icon"></i>
				</IconButton>
				<Typography variant="h5">
					Bitcoinz
				</Typography>
			</Toolbar>
		</AppBar>
	)
};


export default Navbar;
