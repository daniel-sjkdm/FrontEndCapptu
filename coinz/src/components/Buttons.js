import React from 'react';
import {
    ButtonGroup,
    Button
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    buttons: {
        marginTop: "20px"
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));



const Buttons = ({setData}) => {
    const classes = useStyles();

    const fetchCoinz = fetch_by => {
        let url = "";
        switch(fetch_by) {
            case "all":
                url = "http://127.0.0.1:8000/coinz/api/";
                break;
            case "by_year": 
                url = "http://127.0.0.1:8000/coinz/api/by-year/";
                break;
            case "by_month":
                url = "http://127.0.0.1:8000/coinz/api/by-month/";
                break;
            case "by_week":
                url = "http://127.0.0.1:8000/coinz/api/by-week/";
                break;
            case "last_24":
                url = "http://127.0.0.1:8000/coinz/api/last-24/";
                break;
            default:
                console.log("Error")
                break;
        }
        axios.get(url)
        .then(
            response => (
                response.status === 200 ? setData(response.data) : console.log("Error")
            )
        )
        .catch(
            error => console.log("Error")
        )
    };

    return (
        <div className={classes.root}>
        <ButtonGroup 
            className={classes.buttons} 
            color="primary"
            arial-label="outlined primary button group"
        >
            <Button onClick={() => fetchCoinz("last_24")}> Last 24 hrs </Button>
            <Button onClick={() => fetchCoinz("by_week")}> Week </Button>
            <Button onClick={() => fetchCoinz("by_month")}> Month </Button>
        </ButtonGroup>
        <ButtonGroup
            className={classes.buttons}
            color="primary"
            arial-label="outlined primary button group"
        >
            <Button onClick={() => fetchCoinz("by_year")}> Year </Button>
            <Button onClick={() => fetchCoinz("all")}> All </Button>
        </ButtonGroup>
        </div>
    )
};


export default Buttons;