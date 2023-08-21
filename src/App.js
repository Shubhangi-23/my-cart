import Header from './components/Header';
import './App.css';
import { Route ,BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <Routes>
    
      <Route exact path='/' element={<Home/>}/>
        
    
      
      <Route  exact path='/Cart' element={<Cart/>}/>
      
      
      </Routes>
    

    </BrowserRouter>

    

        
    
    
  );
}

export default App;
