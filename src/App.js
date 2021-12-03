import './App.css';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus';
import Profile from './Components/Profile';
import Home from './Components/Home';
import { BrowserRouter,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />

      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/Profile" component={Profile} />
      </BrowserRouter>


    </div>
  );
}

export default App;