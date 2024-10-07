import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
