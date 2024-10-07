import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
