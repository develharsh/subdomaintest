// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Name from './Name';
import Home from './Home';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="showmyname" element={<Name />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
