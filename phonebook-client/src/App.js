import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phonebox from './components/Phonebox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Phonebox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
