import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import LoginPage from "./Pages/loginPage";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
