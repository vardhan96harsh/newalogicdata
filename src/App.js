import logo from './logo.svg';
import './App.css';
import { Mainpage } from './component/mainpage/mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AfterQrScan from './component/afterqrscan/afterscanqr';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/afterqrscan" element={<AfterQrScan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
