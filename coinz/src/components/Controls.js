import React from 'react';
import Searchbar from './Searchbar';
import Buttons from './Buttons';


const Controls = ({setData}) => {
    return (
        <div>
            <Searchbar setData={setData}/>
            <Buttons setData={setData}/>
        </div>
    )
};


export default Controls;