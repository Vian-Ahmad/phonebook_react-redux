import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phonebox from './components/Phonebox';
import PhoneList from './components/PhoneList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Phonebox />} />
        <Route path='/users' element={<PhoneList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
