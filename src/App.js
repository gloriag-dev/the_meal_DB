
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import MealDetails from './components/MealDetail/MealDetail';

function App() {
  return (
    <Router>
   <div className="App">
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/:id' element={<MealDetails />}></Route>
     </Routes>
     </div>
    </Router>
 
  );
}

export default App;
