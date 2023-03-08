import './App.css';
import { Route,Routes,BrowserRouter, Form } from 'react-router-dom';
import Details from './product/details';
import AddForm from './product/form';
import Update from './product/update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Details/>}/>
      <Route path ="/add" element={<AddForm/>}/>
      <Route path ="/update" element={<Update/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
