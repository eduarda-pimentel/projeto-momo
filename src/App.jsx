import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AppProvider } from './AppContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/landingPage/landingPage';
import Main from './pages/main/main';
import Surpresa from './pages/surpresa/surpresa';

function App() {
  return (
    <AppProvider>
      <div className='p-0 m-0' style={{ width: '100vw', height: '100vh' }}>
      <BrowserRouter basename='/projeto-momo/'>
          <Routes>
            <Route index path="/" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/surpresa" element={<Surpresa/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
