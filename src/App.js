import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      {/* <Route element={<Search />} path="/search" /> */}
    </Routes>
  );
}

export default App;
