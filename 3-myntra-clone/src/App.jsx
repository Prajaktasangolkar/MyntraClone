
import Bag from "./components/Bag";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import "./index.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
