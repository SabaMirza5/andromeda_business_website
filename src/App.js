import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Claim_page from './pages/Claim_page';
import Mint_page from './pages/Mint_page';

function App() {


  return (
    <>
        <Routes>
          <Route exact path="/" element={<Homepage/>} /> 
          <Route exact path="claim" element={<Claim_page/>}/>
          <Route exact path="mint" element={<Mint_page/>}/>
        </Routes>
    </>
  );
}

export default App;
