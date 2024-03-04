import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Phonebox from './components/Phonebox';
import AddForm from './components/AddForm';
import AvatarForm from './components/AvatarForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Phonebox />} />
        <Route path='add' element={<AddForm />} />
        <Route path='/avatar' element={<AvatarForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
