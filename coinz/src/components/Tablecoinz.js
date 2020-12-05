import React from 'react';
import {
    makeStyles,
    withStyles
} from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';


const columns = [
    {
        label: "Book", 
        options: { filter: false, sort: false }
    },
    {
        label: "Created at", 
        options: { filter: false, sort: false }
    },
    {
        label: "Volume",
        options: { filter: false, sort: false }
    }, 
    {
        label: "High",
        options: { filter: false, sort: false }
    },
    { 
        label: "Low",
        options: { filter: false, sort: false }
    }
];

const Tablecoinz = ({data}) => {

    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            {
                data? (
                    <MUIDataTable
                        title={"Coinz!"}
                        data={data.map(item => [ item.book, item.created_at, item.volume, item.high, item.low ])}
                        columns={columns}
                    />  
                ) : ""
            }
        </div>
    )
}


export default Tablecoinz;