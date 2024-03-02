import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav/Nav';
import Startup from './components/StartUp/Startup';
import StartUpComp from './components/StartUp/StartUpComp';
import Home from './components/home/Home';
import StartUpData from './components/StartUp/StartUpData';
import Nav from './components/Nav/Nav';
import InvestorSignUp from './components/RegisterationComp/InvestorSignUp';
import Login from './components/Login/Login';

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
        <Route path='/' element={<Home/>}/>
        <Route path='/StartUpData' element={<StartUpData/>}/>
        <Route path='/post/:id' element={<Startup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/InvestorSignUp' element={<InvestorSignUp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
