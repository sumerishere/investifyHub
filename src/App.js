import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav/Nav';
import Startup from './components/StartUp/Startup';
import StartUpComp from './components/StartUp/StartUpComp';
import Home from './components/StartUp/Home';
import StartUpData from './components/StartUp/StartUpData';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <Link to><StartUpComp/></Link> */}
      {/* <StartUpComp/>
      <Startup/> */}
      <Nav/>
      {/* <StartUpData/> */}
      <Routes>
        <Route path='/StartUpData' element={<StartUpData/>}/>
        <Route path='/post/:id' element={<Startup/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
