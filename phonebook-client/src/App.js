import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phonebox from './components/Phonebox';
import AddForm from './components/AddForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Phonebox />} />
        <Route path='add' element={<AddForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
