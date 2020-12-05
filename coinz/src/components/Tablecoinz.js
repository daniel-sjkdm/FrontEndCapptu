import React from 'react';
import {
    makeStyles,
    withStyles
} from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';


const columns = [
    {
        name: "book",
        label: "Book", 
        options: { filter: false, sort: false }
    },
    {
        name: "created_at",
        label: "Created at", 
        options: { filter: false, sort: false }
    },
    {  
        name: "volume",
        label: "Volume",
        options: { filter: false, sort: false }
    }, 
    {
        name: "high",
        label: "High",
        options: { filter: false, sort: false }
    },
    { 
        name: "low",
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