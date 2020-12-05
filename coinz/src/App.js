import Navbar from './components/Navbar';
// import Searchbar from './components/Searchbar';
import Controls from './components/Controls';
import Tablecoinz from './components/Tablecoinz';
import Coin from './components/Coin';
import {
  Container,
  Typography
} from '@material-ui/core';
import './App.css';
import { useState } from 'react';



function App() {
  const [ data , setData ] = useState("");
  return (
    <div className="App">
			<Navbar />
      <Container>
        <Typography 
          style={{ 
            fontFamily: "Roboto Mono, monospace",
            marginTop: "30px"
          }} 
          variant="h3"
        >
          BTC 2 MXN
        </Typography>
        <Coin />
        <Controls setData={setData}/>
        <Tablecoinz data={data}/>
      </Container>
    </div>
  );
}

export default App;
