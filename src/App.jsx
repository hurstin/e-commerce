import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<>hellooo</>} />
    </Routes>
  );
}

export default App;
