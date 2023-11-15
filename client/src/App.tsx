import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
      <Route path="/main" element={<MainPage></MainPage>}></Route>
      <Route path="*" element={<Navigate to="/main" />} />
    </Routes>
  );
}

export default App;
