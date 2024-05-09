
import Bag from "./components/Bag";
import Home from "./components/Home";
import "./index.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bag' element={<Bag/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
