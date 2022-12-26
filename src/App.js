import Form from './components/FormComponent';
import Home from './components/HomeComponent';
import UserDisplay from './components/UserDisplay';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route path="adduser" element={<Form />} />
          <Route path="userdb" element={<UserDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
