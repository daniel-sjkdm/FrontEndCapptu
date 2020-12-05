import React from 'react';
import {
    TableContainer,
    Table, 
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography
} from '@material-ui/core';
import {
    makeStyles,
    withStyles
} from '@material-ui/core/styles';
import { DataTable } from 'react-data-table-component';



const useStyles = makeStyles(theme => ({
    table__container: {
        marginTop: "20px"
    },
    text: {
        marginTop: "20px",
        color: "#8F7F7F"
    }
}));


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#272727",
        color: theme.palette.common.white
    }
}))(TableCell);


const columns = [
    {
        name: "Book",
        selector: "book"
    },
    {
        name: "Volume",
        selector: "volume"
    },
    {
        name: "High",
        selector: "high"
    },
    {
        name: "Low",
        selector: "low"
    },
];


const Tablecoinz = ({ data }) => {
    const classes = useStyles();
    return (
        <div>
            {
                data? (
                    <TableContainer className={classes.table__container} component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center"> Book  </StyledTableCell>
                                    <StyledTableCell align="center"> Created at </StyledTableCell>
                                    <StyledTableCell align="center"> Volume (MXN) </StyledTableCell>
                                    <StyledTableCell align="center"> High (MXN) </StyledTableCell>
                                    <StyledTableCell align="center"> Low  (MXN) </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell align="center"> { item.book } </TableCell>
                                            <TableCell align="center"> { item.created_at } </TableCell>
                                            <TableCell align="center"> { item.volume } </TableCell>
                                            <TableCell align="center"> { item.high } </TableCell>
                                            <TableCell align="center"> { item.low } </TableCell>
                                        </TableRow>
                                        
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography 
                        className={classes.text} 
                        variant="h6"
                    > 
                        Feed me some coinz! 
                    </Typography>
                )
            }
        </div>
    );
};


export default Tablecoinz;