import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
          <Route path="/main" element={<MainPage></MainPage>}></Route>
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
