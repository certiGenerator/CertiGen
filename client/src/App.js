import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/SigUpSignIn/Login';
import MainComponent from './components/MainComponent';
import RegisterPage from './components/SigUpSignIn/Register';
import Event from './certifcate/eventCreation/Event';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<MainComponent />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/certificate-template' element={<Event/>}/>
      </Routes>

    </div>
  );
}

export default App;
