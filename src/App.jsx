import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProtectedRoutes from "./pages/ProtectedRoutes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/products"
          element={
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
