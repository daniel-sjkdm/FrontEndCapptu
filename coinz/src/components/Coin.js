import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Typography,
    makeStyles
} from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "40px",
        display: "flex",
        justifyContent: "center"
    },
    card: {
        backgroundColor: "#272727",
    },
    text: {
        fontFamily: "Robo Mono, monospace",
        color: "white"
    },
}));


const Coin = () => {
    const [ coinData, setCoinData ] = useState({});
    const classes = useStyles();

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/coinz/api/repeat/");
                console.log(response)
                if (response.status === 200) {
                    setCoinData(response.data);
                }
            }  
            catch {
                alert("There was an error fetching the data");
            }
        };
        setInterval(() => {
            fetchCoinData();
        }, 5000)
    }, []);

    return (
        <div className={classes.root}>
            {
                coinData? (
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.text}> Book: { coinData.book } </Typography>
                            <hr></hr>
                            <Typography className={classes.text}> Volume: { coinData.volume } </Typography>
                            <Typography className={classes.text}> High: { coinData.high } </Typography>
                            <Typography className={classes.text}> Last: { coinData.last } </Typography>
                            <Typography className={classes.text}> Low: { coinData.low } </Typography>
                            <Typography className={classes.text}> Vwap: { coinData.vwap } </Typography>
                            <Typography className={classes.text}> Ask: { coinData.ask } </Typography>
                            <Typography className={classes.text}> Bid: { coinData.bid } </Typography>
                        </CardContent>
                    </Card>
                ) : ""
            }
        </div>
    )
};


export default Coin;