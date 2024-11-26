import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UserMenuComponent from './Components/UserMenuComponent';
import HomeComponent from './Components/HomeComponent';
import { useEffect } from 'react';


const App = () => {



  useEffect(() => {


  }, []);



  return (
    <div>

      <Router>

        <UserMenuComponent />


        <div className='container'>
          <Routes>
            <Route exact path='/' element={<HomeComponent />} />

          </Routes>
        </div>

      </Router>

    </div>
  );
}



export default App;